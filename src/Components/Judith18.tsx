import React from "react";

interface propsDate {
  joy: number;
}

const Judith18: React.FC<propsDate> = ({ joy }) => {
  return (
    <div>
      <h2>Count: {joy}</h2>
    </div>
  );
};

export default Judith18;
