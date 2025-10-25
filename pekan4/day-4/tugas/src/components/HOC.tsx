import React from "react";
import withLoading from "./withLoading";
import HelloBox from "./HelloBox";

const EnhancedHelloBox = withLoading(HelloBox);

const HOC: React.FC = () => {
  return (
    <div>
      <EnhancedHelloBox />
    </div>
  );
};

export default HOC;
