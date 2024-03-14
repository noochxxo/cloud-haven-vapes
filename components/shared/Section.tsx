import React from 'react'

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ className, id, children }: SectionProps) => {
  return (
    <div
      id={id}
      className={`
        py-3
        ${className || ""}
      `}
    >
      {children}
    </div>
  )
}

export default Section