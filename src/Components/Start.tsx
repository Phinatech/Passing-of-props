import React from "react";
import ResultFiles from "../Components/ResultFiles";

interface propsDate {
  count: number;
}

const Start: React.FC<propsDate> = ({ count }) => {
  return (
    <div>
      <ResultFiles count={count} />
    </div>
  );
};

export default Start;
