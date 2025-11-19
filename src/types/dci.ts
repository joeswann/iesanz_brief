import React from "react";

export type WithKey = { _key: string };

type WithComponentProps<P> = P & {
  className?: string;
  children?: React.ReactNode;
};

export type DCI<P = unknown> = React.FC<WithComponentProps<P>>;
