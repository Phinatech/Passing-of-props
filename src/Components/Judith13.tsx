import React from "react";
import Judith14 from "../Components/Judith14";

interface propsDate {
  joy: number;
}
const Judith13: React.FC<propsDate> = ({ joy }) => {
  return (
    <div>
      <Judith14 joy={joy} />
    </div>
  );
};

export default Judith13;
