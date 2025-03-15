import React from "react";

export default function DesignLines() {
  return (
    <>
      <img
        src="../assets/images/pattern-lines.svg"
        alt="Pattern lines"
        className="fixed top-0 w-full"
        loading="lazy"
        width={500}
        height={100}
      />
      <img
        src="../assets/images/pattern-circle.svg"
        alt="Pattern circle"
        className="fixed top-[50%] right-[-20px] w-20 lg:right-[20%] lg:w-[200px]"
        loading="lazy"
        width={300}
        height={500}
      />
      <img
        src="../assets/images/pattern-squiggly-line-top.svg"
        alt="Squiggly top line"
        className="fixed right-0 top-6 w-1/4"
        loading="lazy"
        width={300}
        height={300}
      />
      <img
        src="../assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg"
        alt="Squiggly bottom line"
        className="fixed left-0 bottom-0 w-2/3 visible-on-mobile z-1"
        loading="lazy"
        width={300}
        height={300}
      />
      <img
        src="../assets/images/pattern-squiggly-line-bottom-desktop.svg"
        alt="Squiggly bottom line"
        className="fixed left-0 bottom-0 w-3/7 visible-on-desktop"
        loading="lazy"
        width={300}
        height={300}
      />
    </>
  );
}
