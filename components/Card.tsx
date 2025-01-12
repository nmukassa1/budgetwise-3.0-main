"use client"
import { ReactNode, FC } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: object;
  ref?: any;
}

const Card: FC<CardProps> = ({ children, className = '', style, ref }) => {
  return (
    <div ref={ref} className={`card ${className}`} style={style}>
      {children}
    </div>
  );
}

export default Card;