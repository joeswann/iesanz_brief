import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import React from "react";
import { fontSize } from "@/styles/styling";

const styles = css`
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8rem;
    margin-bottom: 24rem;
  }

  label {
    font-weight: 600;
    ${fontSize(0.9)}
    color: #333;
    display: block;
  }

  input, select, textarea {
    width: 100%;
    padding: 12rem 16rem;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    ${fontSize(1)}
    background: #fff;
    transition: border-color 0.2s, box-shadow 0.2s;

    &:focus {
      outline: none;
      border-color: #333;
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
    }

    &::placeholder {
      color: #aaa;
    }
  }

  .hint {
    ${fontSize(0.85)}
    color: #666;
    margin-top: 4rem;
  }
`;

export const LofiFormGroup: DCI<{ label?: string; hint?: string; htmlFor?: string }> = ({ label, hint, htmlFor, children, className }) => {
    return (
        <div className={`${styles} ${className || ""}`}>
            <div className="form-group">
                {label && <label htmlFor={htmlFor}>{label}</label>}
                {children}
                {hint && <div className="hint">{hint}</div>}
            </div>
        </div>
    );
};

export const LofiInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
    return <input ref={ref} {...props} />;
});

export const LofiSelect = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>((props, ref) => {
    return <select ref={ref} {...props} />;
});

export const LofiTextarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>((props, ref) => {
    return <textarea ref={ref} {...props} />;
});
