import React, { CSSProperties } from "react";
import "./Counter.scss";
import CountUp, { useCountUpProps } from "react-countup";
import { CounterSize } from "../types/CounterTypes";

export interface CountUpProps extends useCountUpProps {
  end: number;
  size?: CounterSize;
  className?: string;
}

const Counter = ({
  className,
  end,
  start,
  size,
  prefix,
  suffix,
  duration,
  decimal,
  decimals,
  delay,
  easingFn,
  formattingFn,
  onEnd,
  onPauseResume,
  onReset,
  onStart,
  onUpdate,
  separator,
  useEasing,
}: CountUpProps) => {
  return (
    <CountUp
      end={end}
      start={start && start}
      prefix={prefix && prefix}
      suffix={suffix && suffix}
      decimal={decimal && decimal}
      decimals={decimals && decimals}
      delay={delay && delay}
      easingFn={easingFn && easingFn}
      formattingFn={formattingFn && formattingFn}
      onEnd={onEnd && onEnd}
      onPauseResume={onPauseResume && onPauseResume}
      onReset={onReset && onReset}
      onStart={onStart && onStart}
      onUpdate={onUpdate && onUpdate}
      separator={separator && separator}
      useEasing={useEasing && useEasing}
      duration={duration && duration}
      className={`counter ${className ? className : ""} ${size ? size : ""}`}
    />
  );
};

export default Counter;
