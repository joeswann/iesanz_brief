import { DCI } from "@/types/dci";
import { useState } from "react";
import { LofiButton } from "../lofi/LofiButton";
import { LofiFormGroup, LofiInput, LofiTextarea } from "../lofi/LofiForm";
import { LofiCard } from "../lofi/LofiLayouts";
import { TypeBody } from "../type/TypeBody";
import { TypeHeading } from "../type/TypeHeading";
import { css } from "@linaria/core";

const stepIndicator = css`
    display: flex;
    gap: 16rem;
    margin-bottom: 32rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 16rem;
`;

const stepContent = css`
    display: flex;
    flex-direction: column;
    gap: 24rem;
`;

const stepHeader = css`
    margin-bottom: 24rem;
`;

const radioLabel = css`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const radioInput = css`
    width: auto;
    margin-right: 12rem;
    transform: scale(1.2);
`;

const radioText = css`
    display: block;
`;

const reviewGrid = css`
    display: grid;
    gap: 12rem;
`;

const reviewLabel = css`
    margin-bottom: 4rem;
`;

const disclaimer = css`
    margin-top: 24rem;
`;

const buttonGroup = css`
    display: flex;
    gap: 16rem;
    margin-top: 32rem;
`;

const UpgradeForm: DCI = () => {
    const [step, setStep] = useState(1);

    const nextStep = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    return (
        <div>
            {/* Step Indicator */}
            <div className={stepIndicator}>
                <TypeBody weight={step === 1 ? "bold" : "default"} color={step === 1 ? "default" : "muted"}>1. Select Grade</TypeBody>
                <TypeBody weight={step === 2 ? "bold" : "default"} color={step === 2 ? "default" : "muted"}>2. Details</TypeBody>
                <TypeBody weight={step === 3 ? "bold" : "default"} color={step === 3 ? "default" : "muted"}>3. Review & Submit</TypeBody>
            </div>

            <form onSubmit={nextStep}>
                {step === 1 && (
                    <div className={stepContent}>
                        <div>
                            <TypeHeading level={2} style={{ marginBottom: "8rem" }}>Select Membership Grade</TypeHeading>
                            <TypeBody color="muted">Choose the grade you wish to upgrade to.</TypeBody>
                        </div>

                        <LofiCard>
                            <label className={radioLabel}>
                                <input type="radio" name="grade" value="fellow" className={radioInput} />
                                <div>
                                    <TypeBody weight="bold" as="span" className={radioText}>Fellow (FIES)</TypeBody>
                                    <TypeBody variant="small" color="muted" as="span">For members with significant contributions to the industry.</TypeBody>
                                </div>
                            </label>
                        </LofiCard>

                        <LofiCard>
                            <label className={radioLabel}>
                                <input type="radio" name="grade" value="senior" className={radioInput} />
                                <div>
                                    <TypeBody weight="bold" as="span" className={radioText}>Senior Member (MIES Senior)</TypeBody>
                                    <TypeBody variant="small" color="muted" as="span">For experienced professionals.</TypeBody>
                                </div>
                            </label>
                        </LofiCard>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <div className={stepHeader}>
                            <TypeHeading level={2} style={{ marginBottom: "8rem" }}>Your Details</TypeHeading>
                            <TypeBody color="muted">Please confirm your current details.</TypeBody>
                        </div>

                        <LofiFormGroup label="Full Name" htmlFor="fullName">
                            <LofiInput id="fullName" type="text" defaultValue="Joe Swann" />
                        </LofiFormGroup>

                        <LofiFormGroup label="Current Position" htmlFor="position" hint="e.g. Senior Lighting Designer">
                            <LofiInput id="position" type="text" placeholder="Enter your position" />
                        </LofiFormGroup>

                        <LofiFormGroup label="Statement of Experience" htmlFor="experience">
                            <LofiTextarea id="experience" rows={5} placeholder="Describe your relevant experience..." />
                        </LofiFormGroup>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <div className={stepHeader}>
                            <TypeHeading level={2} style={{ marginBottom: "8rem" }}>Review & Submit</TypeHeading>
                            <TypeBody color="muted">Please review your application before submitting.</TypeBody>
                        </div>

                        <LofiCard>
                            <div className={reviewGrid}>
                                <div>
                                    <TypeBody variant="small" color="muted" className={reviewLabel}>Grade</TypeBody>
                                    <TypeBody weight="bold">Fellow (FIES)</TypeBody>
                                </div>
                                <div>
                                    <TypeBody variant="small" color="muted" className={reviewLabel}>Name</TypeBody>
                                    <TypeBody weight="bold">Joe Swann</TypeBody>
                                </div>
                                <div>
                                    <TypeBody variant="small" color="muted" className={reviewLabel}>Position</TypeBody>
                                    <TypeBody weight="bold">Senior Lighting Designer</TypeBody>
                                </div>
                            </div>
                        </LofiCard>

                        <TypeBody variant="small" color="muted" className={disclaimer}>By submitting this application, you agree to the terms and conditions.</TypeBody>
                    </div>
                )}

                <div className={buttonGroup}>
                    {step > 1 && (
                        <LofiButton type="button" variant="secondary" onClick={prevStep}>Back</LofiButton>
                    )}
                    {step < 3 ? (
                        <LofiButton type="submit" variant="primary">Next Step</LofiButton>
                    ) : (
                        <LofiButton type="submit" variant="primary" onClick={() => alert("Application Submitted!")}>Submit Application</LofiButton>
                    )}
                </div>
            </form>
        </div>
    );
};

export default UpgradeForm;
