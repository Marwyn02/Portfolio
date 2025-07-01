import React from "react";
import clsx from "clsx";

const Subtext = ({ children, className, align = "left" }) => {
  return (
    <p
      className={clsx(
        `text-white/60 text-base tracking-wide leading-6 text-${align}`,
        className
      )}
    >
      {children}
    </p>
  );
};

export default Subtext;
