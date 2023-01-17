import React from "react";
import Judith7 from "../Components/Judith7";

interface propsDate {
  joy: number;
}

const Judith6: React.FC<propsDate> = ({ joy }) => {
  return (
    <div>
      <Judith7 joy={joy} />
    </div>
  );
};

export default Judith6;
