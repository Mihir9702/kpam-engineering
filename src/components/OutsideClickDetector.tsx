import React, { useRef, useEffect, ReactNode } from "react";

interface OutsideClickDetectorProps {
  children: ReactNode;
  onOutsideClick: () => void;
}

const OutsideClickDetector: React.FC<OutsideClickDetectorProps> = ({
  children,
  onOutsideClick,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        onOutsideClick();
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Unbind the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOutsideClick]);

  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideClickDetector;
