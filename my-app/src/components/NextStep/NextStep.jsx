import React, { useState } from "react";

const NextStep = (props) => {
  const { children, step } = props;
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <div>
      <div>
        {children.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentStep(index);
            }}
          >
            {item.props.title + 1}
          </button>
        ))}
      </div>
      <div>{children[currentStep]}</div>
      <div>
        <button
          onClick={() => {
            if (currentStep > 0) setCurrentStep((prev) => prev - 1);
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            if (currentStep < step - 1) setCurrentStep((prev) => prev + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NextStep;
