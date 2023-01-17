import React from "react";
import Judith11 from "../Components/Judith11";

interface propsDate {
  joy: number;
}

const Judith10: React.FC<propsDate> = ({ joy }) => {
  return (
    <div>
      <Judith11 joy={joy} />
    </div>
  );
};

export default Judith10;
