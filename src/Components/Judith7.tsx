import React from "react";
import Judith8 from "../Components/Judith8";

interface propsDate {
  joy: number;
}

const Judith7: React.FC<propsDate> = ({ joy }) => {
  return (
    <div>
      <Judith8 joy={joy} />
    </div>
  );
};

export default Judith7;
