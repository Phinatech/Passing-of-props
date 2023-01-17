import React from "react";
import Judith15 from "../Components/Judith15";

interface propsDate {
  joy: number;
}

const Judith14: React.FC<propsDate> = ({ joy }) => {
  return (
    <div>
      <Judith15 joy={joy} />
    </div>
  );
};

export default Judith14;
