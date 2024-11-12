import React from "react";

const IconWrapper = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div
      className="w-10 h-10 flex items-center justify-center bg-mutedLow rounded-full"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default IconWrapper;
