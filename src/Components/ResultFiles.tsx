import React from "react";
import NewResult from "../Components/NewResult";

interface propsDate {
  count: number;
}

const ResultFiles: React.FC<propsDate> = ({ count }) => {
  return (
    <div>
      <NewResult count={count} />
    </div>
  );
};

export default ResultFiles;
