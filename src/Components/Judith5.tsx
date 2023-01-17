import React from "react";
import Judith6 from "../Components/Judith6";

interface propsDate {
  joy: number;
}

const Judith5: React.FC<propsDate> = ({ joy }) => {
  return (
    <div>
      <Judith6 joy={joy} />
    </div>
  );
};

export default Judith5;
