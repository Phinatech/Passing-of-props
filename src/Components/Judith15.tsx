import React from "react";
import Judith16 from "../Components/Judith16";

interface propsDate {
  joy: number;
}

const Judith15: React.FC<propsDate> = ({ joy }) => {
  return (
    <div>
      <Judith16 joy={joy} />
    </div>
  );
};

export default Judith15;
