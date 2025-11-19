import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import React from "react";
import { fontSize } from "@/styles/styling";

const styles = css`
  padding: 10rem 20rem;
  border-radius: 0;
  font-weight: 600;
  ${fontSize(0.95)}
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid #000;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  text-decoration: none;
  background: #fff;
  color: #000;

  &:hover {
    background: #f0f0f0;
  }

  &:active {
    background: #e0e0e0;
    transform: translateY(1px);
  }

  &.primary {
    background: #000;
    color: #fff;
    border-color: #000;

    &:hover {
      background: #333;
      border-color: #333;
    }
  }

  &.secondary {
    background: #fff;
    color: #000;
  }

  &.ghost {
    background: transparent;
    border-color: transparent;
    
    &:hover {
      background: #f5f5f5;
      text-decoration: underline;
    }
  }
`;

interface LofiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
}

export const LofiButton: DCI<LofiButtonProps> = ({ variant = "primary", href, children, className, ...props }) => {
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
