import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import React from "react";

const styles = css`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;

  &.primary {
    background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
    color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }

    &:active {
      transform: translateY(0);
    }
  }

  &.secondary {
    background: white;
    color: #1a1a1a;
    border: 1px solid #e0e0e0;

    &:hover {
      background: #f9f9f9;
      border-color: #d0d0d0;
    }
  }

  &.ghost {
    background: transparent;
    color: #666;
    padding: 0.5rem 1rem;

    &:hover {
      color: #1a1a1a;
      background: rgba(0, 0, 0, 0.05);
    }
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
    href?: string;
}

const Button: DCI<ButtonProps> = ({ variant = "primary", href, children, className, ...props }) => {
    const classes = `${styles} ${variant} ${className || ""}`;

    if (href) {
        return (
            <a href={href} className={classes}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;
