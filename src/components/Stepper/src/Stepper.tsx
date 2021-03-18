import React, { useState, useEffect } from "react";
import "./Stepper.scss";
import { Steps, StepperDirection, StepState } from "../types/StepperTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export interface StepperProps {
  steps: Steps;
  direction?: StepperDirection;
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  direction = "vertical",
  currentStep = 1,
}: StepperProps) => {
  const [stepState, setStepState] = useState<StepState>([]);

  useEffect(() => {
    const createSteps: StepState = steps.map((step: any, i: number) => ({
      description: step,
      completed: i < currentStep - 1,
      selected: i <= currentStep - 1,
      highlighted: i === currentStep - 1,
    }));

    setStepState(createSteps);
  }, [steps, currentStep]);

  return (
    <div className={`stepper-${direction}`}>
      {stepState.map(
        ({ selected, completed, highlighted, description }, index: number) => (
          <div className="step" key={index}>
            <div
              className={`step__number step-number-${
                selected ? "active" : "disabled"
              }`}
            >
              {completed ? (
                <FontAwesomeIcon icon={faCheckCircle} className="step-icon" />
              ) : (
                index + 1
              )}
            </div>
            <div
              className={`step__description ${
                highlighted ? "step-description-active" : ""
              }`}
            >
              {description}
            </div>
            {index + 1 !== stepState.length && (
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
