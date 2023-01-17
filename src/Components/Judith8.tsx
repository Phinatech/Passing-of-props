import React from "react";
import Judith9 from "../Components/Judith9";

interface propsDate {
  joy: number;
}
const Judith8: React.FC<propsDate> = ({ joy }) => {
  return (
    <div>
      <Judith9 joy={joy} />
    </div>
  );
};

export default Judith8;
