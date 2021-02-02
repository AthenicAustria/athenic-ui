import React, { useState, useEffect } from "react";
import "./Stepper.scss";
import { StepType, StepperDirection } from "../types/StepperTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export interface StepperProps {
  steps: StepType;
  direction?: StepperDirection;
  currentStep: number;
}

const Stepper = ({ steps, direction, currentStep = 1 }: StepperProps) => {
  const [stepState, setStepState] = useState([]);
  direction = direction ? direction : "vertical";

  useEffect(() => {
    let createSteps = steps.map((step: any, idx: number) => ({
      description: step,
      completed: idx < currentStep - 1, // past are completed
      selected: idx <= currentStep - 1, // past & present are colored
      highlighted: idx === currentStep - 1, // only present is highlighted
    }));

    setStepState(createSteps);
  }, [steps, currentStep]);

  return (
    <div className={`stepper-${direction}`}>
      {stepState.map(
        ({ selected, completed, highlighted, description }, idx) => (
          <div className="step" key={idx}>
            <div
              className={`step__number step-number-${
                selected ? "active" : "disabled"
              }`}
            >
              {completed ? (
                <FontAwesomeIcon icon={faCheckCircle} className="step-icon" />
              ) : (
                idx + 1
              )}
            </div>
            <div
              className={`step__description ${
                highlighted ? "step-description-active" : ""
              }`}
            >
              {description}
            </div>
            {idx + 1 !== stepState.length && (
              <div
                className={`step__divider divider-${stepState.length}`}
              ></div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Stepper;
