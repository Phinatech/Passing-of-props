import React from "react";
import Judith10 from "../Components/Judith10";

interface propsDate {
  joy: number;
}

const Judith9: React.FC<propsDate> = ({ joy }) => {
  return (
    <div>
      <Judith10 joy={joy} />
    </div>
  );
};

export default Judith9;
