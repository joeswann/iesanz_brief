import { DCI } from "@/types/dci";
import { css, cx } from "@linaria/core";
import React from "react";
import { fontSize } from "@/styles/styling";

const buttonBase = css`
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
`;

const buttonPrimary = css`
  background: #000;
  color: #fff;
  border-color: #000;

  &:hover {
    background: #333;
    border-color: #333;
  }
`;

const buttonSecondary = css`
  background: #fff;
  color: #000;
`;

const buttonGhost = css`
  background: transparent;
  border-color: transparent;
  
  &:hover {
    background: #f5f5f5;
    text-decoration: underline;
  }
`;

interface LofiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
}

export const LofiButton: DCI<LofiButtonProps> = ({ variant = "primary", href, children, className, ...props }) => {
  const variantClass = variant === "primary" ? buttonPrimary : variant === "secondary" ? buttonSecondary : buttonGhost;
  const classes = cx(buttonBase, variantClass, className);

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
