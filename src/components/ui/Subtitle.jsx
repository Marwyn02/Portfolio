import React from "react";
import clsx from "clsx";

const Subtitle = ({ children, className, align = "left" }) => {
  return (
    <h2
      className={clsx(
        `text-3xl md:text-4xl font-semibold text-white text-${align}`,
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Subtitle;
