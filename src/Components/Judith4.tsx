import React from "react";
import Judith5 from "../Components/Judith5";

interface propsDate {
  joy: number;
}
const Judith4: React.FC<propsDate> = ({ joy }) => {
  return (
    <div>
      <Judith5 joy={joy} />
    </div>
  );
};

export default Judith4;
