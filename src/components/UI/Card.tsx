import React, { ReactNode } from "react";
import "./Card.css";

interface IProps {
  children: ReactNode;
  className: string;
}

const Card: React.FC<IProps> = (props: IProps) => {
  const { children, className } = props;

  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
