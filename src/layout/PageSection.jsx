
import React from "react";

const PageSection = ({
  children,
  className = "",
  containerClassName = "",
  id,

  // UPDATED defaults
  bgLight = "bg-white",
  bgDark = "dark:bg-slate-950",
  textLight = "text-gray-800",        
  textDark = "dark:text-gray-100",    
}) => {
  return (
    <section
      id={id}
      className={`
        py-12 md:py-16 
        transition-colors duration-300

        ${bgLight} 
        ${bgDark}
        ${textLight}
        ${textDark}

        ${className}
      `}
    >
      <div
        className={`
          max-w-6xl mx-auto 
          px-4 sm:px-5 lg:px-0 
          ${containerClassName}
        `}
      >
        {children}
      </div>
    </section>
  );
};

export default PageSection;
