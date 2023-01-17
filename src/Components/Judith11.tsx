import React from "react";
import Judith12 from "../Components/Judith12";

interface propsDate {
  joy: number;
}
const Judith11: React.FC<propsDate> = ({ joy }) => {
  return (
    <div>
      <Judith12 joy={joy} />
    </div>
  );
};

export default Judith11;
