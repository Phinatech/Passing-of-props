import React from "react";
import Judith13 from "../Components/Judith13";

interface propsDate {
  joy: number;
}

const Judith12: React.FC<propsDate> = ({ joy }) => {
  return (
    <div>
      <Judith13 joy={joy} />
    </div>
  );
};

export default Judith12;
