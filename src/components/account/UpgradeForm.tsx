import { DCI } from "@/types/dci";
import { useState } from "react";
import { css } from "@linaria/core";
import Button from "../ui/Button";

const styles = css`
  .step-indicator {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 1rem;
    
    div {
      font-weight: bold;
      color: #ccc;
      
      &.active {
        color: var(--foreground);
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 600px;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  input, select, textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }

  .actions {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    
    button {
      padding: 0.75rem 1.5rem;
      cursor: pointer;
      border-radius: 4px;
      font-weight: bold;
      
      &.primary {
        background: var(--foreground);
        color: var(--background);
        border: none;
      }
      
      &.secondary {
        background: transparent;
        border: 1px solid var(--foreground);
        color: var(--foreground);
      }
    }
  }
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
        <div className={styles}>
            <div className="step-indicator">
                <div className={step === 1 ? "active" : ""}>1. Select Grade</div>
                <div className={step === 2 ? "active" : ""}>2. Details</div>
                <div className={step === 3 ? "active" : ""}>3. Review & Submit</div>
            </div>

            <form onSubmit={nextStep}>
                {step === 1 && (
                    <div>
                        <h2>Select Membership Grade</h2>
                        <p>Choose the grade you wish to upgrade to.</p>

                        <div style={{ marginTop: "1rem" }}>
                            <label>
                                <input type="radio" name="grade" value="fellow" style={{ width: "auto", marginRight: "0.5rem" }} />
                                Fellow (FIES)
                            </label>
                            <p style={{ marginLeft: "1.5rem", fontSize: "0.9rem", color: "#666" }}>For members with significant contributions to the industry.</p>
                        </div>

                        <div style={{ marginTop: "1rem" }}>
                            <label>
                                <input type="radio" name="grade" value="senior" style={{ width: "auto", marginRight: "0.5rem" }} />
                                Senior Member (MIES Senior)
                            </label>
                            <p style={{ marginLeft: "1.5rem", fontSize: "0.9rem", color: "#666" }}>For experienced professionals.</p>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <h2>Your Details</h2>
                        <p>Please confirm your current details.</p>

                        <div>
                            <label>Full Name</label>
                            <input type="text" defaultValue="Joe Swann" />
                        </div>

                        <div>
                            <label>Current Position</label>
                            <input type="text" placeholder="e.g. Senior Lighting Designer" />
                        </div>

                        <div>
                            <label>Statement of Experience</label>
                            <textarea rows={5} placeholder="Describe your relevant experience..." />
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <h2>Review & Submit</h2>
                        <p>Please review your application before submitting.</p>

                        <div style={{ background: "#f9f9f9", padding: "1rem", borderRadius: "4px" }}>
                            <p><strong>Grade:</strong> Fellow (FIES)</p>
                            <p><strong>Name:</strong> Joe Swann</p>
                            <p><strong>Position:</strong> Senior Lighting Designer</p>
                        </div>

                        <p style={{ marginTop: "1rem" }}>By submitting this application, you agree to the terms and conditions.</p>
                    </div>
                )}

                <div className="actions">
                    {step > 1 && (
                        <Button type="button" variant="secondary" onClick={prevStep}>Back</Button>
                    )}
                    {step < 3 ? (
                        <Button type="submit" variant="primary">Next Step</Button>
                    ) : (
                        <Button type="submit" variant="primary" onClick={() => alert("Application Submitted!")}>Submit Application</Button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default UpgradeForm;
