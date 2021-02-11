declare module 'athenic-ui/src/App' {
  /// <reference types="react" />
  import "./index.scss";
  const App: () => JSX.Element;
  export default App;

}
declare module 'athenic-ui/src/components/Alert/index' {
  export { default as Alert, AlertProps } from "athenic-ui/src/components/Alert/src/Alert";
  export { AlertVariant } from "athenic-ui/src/components/Alert/types/AlertTypes";

}
declare module 'athenic-ui/src/components/Alert/src/Alert' {
  import { CSSProperties } from "react";
  import { AlertVariant } from "athenic-ui/src/components/Alert/types/AlertTypes";
  import "./Alert.scss";
  export interface AlertProps {
      title: string;
      description?: string;
      icon?: boolean;
      variant: AlertVariant;
      closeIcon?: boolean;
      shown?: boolean;
      onClose?: () => void;
      className?: string;
      style?: CSSProperties;
  }
  const Alert: ({ className, style, title, description, icon, variant, closeIcon, onClose, shown, }: AlertProps) => JSX.Element;
  export default Alert;

}
declare module 'athenic-ui/src/components/Alert/types/AlertTypes' {
  export type AlertVariant = "success" | "info" | "warning" | "error";

}
declare module 'athenic-ui/src/components/Avatar/index' {
  export { default as Avatar, AvatarProps } from "athenic-ui/src/components/Avatar/src/Avatar";
  export { AvatarSize } from "athenic-ui/src/components/Avatar/types/AvatarTypes";

}
declare module 'athenic-ui/src/components/Avatar/src/Avatar' {
  import { CSSProperties } from "react";
  import { AvatarSize } from "athenic-ui/src/components/Avatar/types/AvatarTypes";
  import "./Avatar.scss";
  export interface AvatarProps {
      image?: string;
      className?: string;
      style?: CSSProperties;
      size?: AvatarSize;
      notifications?: number;
      link?: string;
      onClick?: () => void;
  }
  const Avatar: ({ className, style, image, size, notifications, link, onClick, }: AvatarProps) => JSX.Element;
  export default Avatar;

}
declare module 'athenic-ui/src/components/Avatar/types/AvatarTypes' {
  export type AvatarSize = "small" | "medium" | "large";

}
declare module 'athenic-ui/src/components/Badge/index' {
  export { default as Badge, BadgeProps } from "athenic-ui/src/components/Badge/src/Badge";
  export { BadgeSolid, BadgeVariant } from "athenic-ui/src/components/Badge/types/BadgeTypes";

}
declare module 'athenic-ui/src/components/Badge/src/Badge' {
  import { CSSProperties } from "react";
  import "./Badge.scss";
  import { BadgeVariant, BadgeSolid } from "athenic-ui/src/components/Badge/types/BadgeTypes";
  export interface BadgeProps {
      label: string;
      variant?: BadgeVariant;
      solid?: BadgeSolid;
      style?: CSSProperties;
      className?: string;
  }
  const Badge: ({ label, variant, solid, className }: BadgeProps) => JSX.Element;
  export default Badge;

}
declare module 'athenic-ui/src/components/Badge/types/BadgeTypes' {
  export type BadgeVariant = "primary" | "secondary" | "tertiary" | "success" | "warning" | "error";
  export type BadgeSolid = boolean;

}
declare module 'athenic-ui/src/components/Button/index' {
  export { default as Button, ButtonProps } from "athenic-ui/src/components/Button/src/Button";
  export { default as IconButton, IconButtonProps } from "athenic-ui/src/components/Button/src/IconButton";
  export { ButtonIconType, ButtonSize, ButtonVariant } from "athenic-ui/src/components/Button/types/ButtonTypes";

}
declare module 'athenic-ui/src/components/Button/src/Button' {
  import React, { CSSProperties, ReactChild, ReactChildren } from "react";
  import { ButtonIconType, ButtonSize, ButtonVariant } from "athenic-ui/src/components/Button/types/ButtonTypes";
  import "./Button.scss";
  export interface ButtonProps {
      text?: string | ReactChildren;
      style?: CSSProperties;
      className?: string;
      size?: ButtonSize;
      variant?: ButtonVariant;
      children?: ReactChildren | ReactChild | string;
      iconBefore?: ButtonIconType;
      iconAfter?: ButtonIconType;
      onClick?: React.MouseEventHandler<HTMLButtonElement>;
      onHover?: React.MouseEventHandler<HTMLButtonElement>;
      disabled?: boolean;
      link?: string;
  }
  const Button: ({ text, style, className, size, variant, children, onClick, onHover, iconBefore, iconAfter, disabled, link, }: ButtonProps) => JSX.Element;
  export default Button;

}
declare module 'athenic-ui/src/components/Button/src/IconButton' {
  import { CSSProperties } from "react";
  import { ButtonSize, ButtonIconType } from "athenic-ui/src/components/Button/types/ButtonTypes";
  import "./IconButton.scss";
  export interface IconButtonProps {
      icon: ButtonIconType;
      style?: CSSProperties;
      className?: string;
      size?: ButtonSize;
  }
  const IconButton: ({ icon, style, className, size }: IconButtonProps) => JSX.Element;
  export default IconButton;

}
declare module 'athenic-ui/src/components/Button/types/ButtonTypes' {
  import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
  export type ButtonSize = "small" | "medium" | "large";
  export type ButtonVariant = "primary" | "secondary" | "tertiary" | "success" | "warning" | "error";
  export type ButtonIconType = IconDefinition;

}
declare module 'athenic-ui/src/components/Button/__tests__/Button.test' {
  export {};

}
declare module 'athenic-ui/src/components/Card/index' {
  export { default as Card, CardProps } from "athenic-ui/src/components/Card/src/Card";
  export { CardSize } from "athenic-ui/src/components/Card/types/CardTypes";

}
declare module 'athenic-ui/src/components/Card/src/Card' {
  import { CSSProperties, ReactChild, ReactChildren } from "react";
  import { CardSize } from "athenic-ui/src/components/Card/types/CardTypes";
  import "./Card.scss";
  export interface CardProps {
      style?: CSSProperties;
      className?: string;
      children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[] | string;
      title?: string;
      size?: CardSize;
  }
  const Card: ({ style, className, children, title, size }: CardProps) => JSX.Element;
  export default Card;

}
declare module 'athenic-ui/src/components/Card/types/CardTypes' {
  export type CardSize = "small" | "medium" | "large" | "auto";

}
declare module 'athenic-ui/src/components/Collapse/index' {
  export { default as Collapse, CollapseProps } from "athenic-ui/src/components/Collapse/src/Collapse";
  export { CollapsContentType, CollapseTab } from "athenic-ui/src/components/Collapse/types/CollapseTypes";

}
declare module 'athenic-ui/src/components/Collapse/src/Collapse' {
  import { CSSProperties } from "react";
  import { CollapsContentType } from "athenic-ui/src/components/Collapse/types/CollapseTypes";
  import "./Collapse.scss";
  export interface CollapseProps {
      content: CollapsContentType;
      initialActiveTabs?: number[];
      className?: string;
      style?: CSSProperties;
  }
  const Collapse: ({ content, initialActiveTabs, className, style, }: CollapseProps) => JSX.Element;
  export default Collapse;

}
declare module 'athenic-ui/src/components/Collapse/types/CollapseTypes' {
  export type CollapsContentType = CollapseTab[];
  export type CollapseTab = {
      header: string;
      content: any;
  };

}
declare module 'athenic-ui/src/components/Comment/index' {
  export { default as Comment, CommentProps } from "athenic-ui/src/components/Comment/src/Comment";
  export { CommentAuthor } from "athenic-ui/src/components/Comment/types/CommentTypes";

}
declare module 'athenic-ui/src/components/Comment/src/Comment' {
  import { CSSProperties, ReactElement } from "react";
  import { CommentAuthor } from "athenic-ui/src/components/Comment/types/CommentTypes";
  import "./Comment.scss";
  export interface CommentProps {
      author: CommentAuthor;
      text: string;
      likes?: number;
      dislikes?: number;
      onLike?: () => void;
      onDislike?: () => void;
      onReply?: () => void;
      style?: CSSProperties;
      className?: string;
      children?: ReactElement<CommentProps> | Array<ReactElement<CommentProps>>;
  }
  const Comment: ({ style, className, author, text, likes, dislikes, onLike, onDislike, onReply, children, }: CommentProps) => JSX.Element;
  export default Comment;

}
declare module 'athenic-ui/src/components/Comment/types/CommentTypes' {
  export type CommentAuthor = {
      name: string;
      avatar?: string;
      link?: string;
  };

}
declare module 'athenic-ui/src/components/Counter/index' {
  export { default as Counter, CounterProps } from "athenic-ui/src/components/Counter/src/Counter";
  export { CounterSize } from "athenic-ui/src/components/Counter/types/CounterTypes";

}
declare module 'athenic-ui/src/components/Counter/src/Counter' {
  /// <reference types="react" />
  import "./Counter.scss";
  import { useCountUpProps } from "react-countup";
  import { CounterSize } from "athenic-ui/src/components/Counter/types/CounterTypes";
  export interface CounterProps extends useCountUpProps {
      end: number;
      size?: CounterSize;
      className?: string;
  }
  const Counter: ({ className, end, start, size, prefix, suffix, duration, decimal, decimals, delay, easingFn, formattingFn, onEnd, onPauseResume, onReset, onStart, onUpdate, separator, useEasing, }: CounterProps) => JSX.Element;
  export default Counter;

}
declare module 'athenic-ui/src/components/Counter/types/CounterTypes' {
  export type CounterSize = "small" | "medium" | "large";

}
declare module 'athenic-ui/src/components/H1/index' {
  export { default as H1, H1Props } from "athenic-ui/src/components/H1/src/H1";

}
declare module 'athenic-ui/src/components/H1/src/H1' {
  import { CSSProperties, ReactChild } from "react";
  import "./H1.scss";
  export interface H1Props {
      children?: ReactChild;
      style?: CSSProperties;
      className?: string;
  }
  const H1: ({ children, style, className }: H1Props) => JSX.Element;
  export default H1;

}
declare module 'athenic-ui/src/components/H1/__tests__/H1.test' {
  export {};

}
declare module 'athenic-ui/src/components/H2/index' {
  export { default as H2, H2Props } from "athenic-ui/src/components/H2/src/H2";

}
declare module 'athenic-ui/src/components/H2/src/H2' {
  import { CSSProperties, ReactChild } from "react";
  import "./H2.scss";
  export interface H2Props {
      children?: ReactChild;
      style?: CSSProperties;
      className?: string;
  }
  const H2: ({ children, style, className }: H2Props) => JSX.Element;
  export default H2;

}
declare module 'athenic-ui/src/components/H3/index' {
  export { default as H3, H3Props } from "athenic-ui/src/components/H3/src/H3";

}
declare module 'athenic-ui/src/components/H3/src/H3' {
  import { CSSProperties, ReactChild } from "react";
  import "./H3.scss";
  export interface H3Props {
      children?: ReactChild;
      style?: CSSProperties;
      className?: string;
  }
  const H3: ({ children, style, className }: H3Props) => JSX.Element;
  export default H3;

}
declare module 'athenic-ui/src/components/Link/index' {
  export { default as Link, LinkProps } from "athenic-ui/src/components/Link/src/Link";

}
declare module 'athenic-ui/src/components/Link/src/Link' {
  import { CSSProperties } from "react";
  import "./Link.scss";
  export interface LinkProps {
      text: string;
      to: string;
      target?: string;
      className?: string;
      style?: CSSProperties;
  }
  const Link: ({ to, text, target, className, style }: LinkProps) => JSX.Element;
  export default Link;

}
declare module 'athenic-ui/src/components/Modal/index' {
  export { default as Modal, ModalProps } from "athenic-ui/src/components/Modal/src/Modal";
  export { ModalPosition } from "athenic-ui/src/components/Modal/types/ModalTypes";

}
declare module 'athenic-ui/src/components/Modal/src/Modal' {
  import { CSSProperties, ReactChild, ReactChildren } from "react";
  import { ModalPosition } from "athenic-ui/src/components/Modal/types/ModalTypes";
  import "./Modal.scss";
  export interface ModalProps {
      shown: boolean;
      title?: string;
      closeButton?: boolean;
      className?: string;
      style?: CSSProperties;
      onClose: () => void;
      children?: ReactChild | ReactChildren | ReactChild[] | ReactChildren[];
      position?: ModalPosition;
  }
  const Modal: ({ shown, className, style, closeButton, title, onClose, children, position, }: ModalProps) => JSX.Element;
  export default Modal;

}
declare module 'athenic-ui/src/components/Modal/types/ModalTypes' {
  export type ModalPosition = "default" | "center" | "bottomLeft" | "bottomRight";

}
declare module 'athenic-ui/src/components/OTPInput/index' {
  export { default as OTPInput, OTPInputProps } from "athenic-ui/src/components/OTPInput/src/OTPInput";

}
declare module 'athenic-ui/src/components/OTPInput/src/OTPInput' {
  import React, { CSSProperties } from "react";
  import "./OTPInput.scss";
  export interface OTPInputProps {
      style?: CSSProperties;
      className?: string;
      numInputs?: number;
      separator?: any;
      label?: string;
      validationMessage?: string;
      value?: number[];
      onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
      onComplete?: () => void;
      placeholder?: string;
      summary?: boolean;
  }
  const OTPInput: ({ className, style, numInputs, label, validationMessage, value, onChange, onComplete, summary, placeholder, }: OTPInputProps) => JSX.Element;
  export default OTPInput;

}
declare module 'athenic-ui/src/components/RadioGroup/index' {
  export { default as RadioGroup, RadioGroupProps } from "athenic-ui/src/components/RadioGroup/src/RadioGroup";
  export { RadioGroupOption, RadioGroupOptions } from "athenic-ui/src/components/RadioGroup/types/RadioGroupTypes";

}
declare module 'athenic-ui/src/components/RadioGroup/src/RadioGroup' {
  import React, { CSSProperties } from "react";
  import { RadioGroupOptions } from "athenic-ui/src/components/RadioGroup/types/RadioGroupTypes";
  import "./RadioGroup.scss";
  export interface RadioGroupProps {
      title?: string;
      className?: string;
      style?: CSSProperties;
      options: RadioGroupOptions;
      value?: string;
      onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
      validationMessage?: string;
  }
  const RadioGroup: ({ className, style, onChange, options, value, validationMessage, }: RadioGroupProps) => JSX.Element;
  export default RadioGroup;

}
declare module 'athenic-ui/src/components/RadioGroup/types/RadioGroupTypes' {
  export type RadioGroupOption = {
      value: string;
      label: string;
      id: string;
  };
  export type RadioGroupOptions = {
      options: RadioGroupOption[];
      form?: string;
      name: string;
  };

}
declare module 'athenic-ui/src/components/Rating/index' {
  export { default as Rating, RatingProps } from "athenic-ui/src/components/Rating/src/Rating";
  export { EmojiScale, EmojiType, RatingSize, RatingVariant, } from "athenic-ui/src/components/Rating/types/RatingTypes";

}
declare module 'athenic-ui/src/components/Rating/src/Rating' {
  import { CSSProperties } from "react";
  import { RatingVariant, RatingSize } from "athenic-ui/src/components/Rating/types/RatingTypes";
  import "./Rating.scss";
  export interface RatingProps {
      variant?: RatingVariant;
      size?: RatingSize;
      className?: string;
      style?: CSSProperties;
      initialRating?: number;
      onRate?: (value: number) => void;
  }
  const Rating: ({ variant, className, style, size, initialRating, onRate, }: RatingProps) => JSX.Element;
  export default Rating;

}
declare module 'athenic-ui/src/components/Rating/types/RatingTypes' {
  export type RatingVariant = "star" | "emoji";
  export type RatingSize = "small" | "medium" | "large";
  export type EmojiType = {
      emoji: string;
      value: number;
  };
  export type EmojiScale = EmojiType[];

}
declare module 'athenic-ui/src/components/SearchInput/index' {
  export { default as SearchInput, SearchInputProps } from "athenic-ui/src/components/SearchInput/src/SearchInput";

}
declare module 'athenic-ui/src/components/SearchInput/src/SearchInput' {
  import React, { CSSProperties } from "react";
  import "./SearchInput.scss";
  export interface SearchInputProps {
      style?: CSSProperties;
      className?: string;
      label?: string;
      name?: string;
      form?: string;
      disabled?: boolean;
      validationMessage?: string;
      invalid?: boolean;
      onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
      onFocus?: (e: React.FormEvent<HTMLInputElement>) => void;
      onSearch?: () => void;
      expandOnFocus?: boolean;
  }
  const SearchInput: ({ style, className, label, name, form, disabled, validationMessage, invalid, onChange, onFocus, onSearch, expandOnFocus, }: SearchInputProps) => JSX.Element;
  export default SearchInput;

}
declare module 'athenic-ui/src/components/Spinner/index' {
  export { default as Spinner, SpinnerProps } from "athenic-ui/src/components/Spinner/src/Spinner";
  export { SpinnerSize, SpinnerSpeed, SpinnerVariant, } from "athenic-ui/src/components/Spinner/types/SpinnerTypes";

}
declare module 'athenic-ui/src/components/Spinner/src/Spinner' {
  import { CSSProperties } from "react";
  import { SpinnerSize, SpinnerVariant, SpinnerSpeed } from "athenic-ui/src/components/Spinner/types/SpinnerTypes";
  import "./Spinner.scss";
  export interface SpinnerProps {
      variant?: SpinnerVariant;
      size?: SpinnerSize;
      speed?: SpinnerSpeed;
      style?: CSSProperties;
  }
  const Spinner: ({ variant, size, speed, style }: SpinnerProps) => JSX.Element;
  export default Spinner;

}
declare module 'athenic-ui/src/components/Spinner/types/SpinnerTypes' {
  export type SpinnerVariant = "default" | "primary" | "secondary" | "tertiary";
  export type SpinnerSize = "small" | "medium" | "large";
  export type SpinnerSpeed = number;

}
declare module 'athenic-ui/src/components/Stepper/index' {
  export { default as Stepper, StepperProps } from "athenic-ui/src/components/Stepper/src/Stepper";
  export { Step, StepState, StepperDirection, Steps } from "athenic-ui/src/components/Stepper/types/StepperTypes";

}
declare module 'athenic-ui/src/components/Stepper/src/Stepper' {
  /// <reference types="react" />
  import "./Stepper.scss";
  import { Steps, StepperDirection } from "athenic-ui/src/components/Stepper/types/StepperTypes";
  export interface StepperProps {
      steps: Steps;
      direction?: StepperDirection;
      currentStep: number;
  }
  const Stepper: ({ steps, direction, currentStep, }: StepperProps) => JSX.Element;
  export default Stepper;

}
declare module 'athenic-ui/src/components/Stepper/types/StepperTypes' {
  export type Step = string;
  export type Steps = Step[];
  export type StepperDirection = "horizontal" | "vertical";
  export type StepState = {
      description: string;
      completed: boolean;
      selected: boolean;
      highlighted: boolean;
  }[];

}
declare module 'athenic-ui/src/components/Switch/index' {
  export { default as Switch, SwitchProps } from "athenic-ui/src/components/Switch/src/Switch";
  export { SwitchSize, SwitchVariant } from "athenic-ui/src/components/Switch/types/SwitchTypes";

}
declare module 'athenic-ui/src/components/Switch/src/Switch' {
  import React, { CSSProperties } from "react";
  import { SwitchVariant } from "athenic-ui/src/components/Switch/types/SwitchTypes";
  import "./Switch.scss";
  export interface SwitchProps {
      variant?: SwitchVariant;
      className?: string;
      style?: CSSProperties;
      onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
      disabled?: boolean;
      form?: string;
      name?: string;
      id?: string;
      label?: string;
      validationMessage?: string;
      checked?: boolean;
  }
  const Switch: ({ variant, className, style, onChange, disabled, form, id, name, label, validationMessage, checked, }: SwitchProps) => JSX.Element;
  export default Switch;

}
declare module 'athenic-ui/src/components/Switch/types/SwitchTypes' {
  export type SwitchSize = "small" | "medium" | "large";
  export type SwitchVariant = "primary" | "secondary" | "tertiary" | "success" | "warning" | "error";

}
declare module 'athenic-ui/src/components/TextInput/index' {
  export { default as TextInput, TextInputProps } from "athenic-ui/src/components/TextInput/src/TextInput";
  export { TextInputType } from "athenic-ui/src/components/TextInput/types/TextInput";

}
declare module 'athenic-ui/src/components/TextInput/src/TextInput' {
  import React, { CSSProperties } from "react";
  import "./TextInput.scss";
  import { TextInputType } from "athenic-ui/src/components/TextInput/types/TextInput";
  export interface TextInputProps {
      placeholder?: string;
      disabled?: boolean;
      form?: string;
      value?: string;
      invalid?: boolean;
      name?: string;
      label?: string;
      validationMessage?: string;
      style?: CSSProperties;
      className?: string;
      type?: TextInputType;
      onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  }
  const TextInput: ({ placeholder, disabled, form, value, invalid, name, label, validationMessage, style, className, type, onChange, }: TextInputProps) => JSX.Element;
  export default TextInput;

}
declare module 'athenic-ui/src/components/TextInput/types/TextInput' {
  export type TextInputType = "text" | "password";

}
declare module 'athenic-ui/src/index' {
  export { H1, H1Props } from "athenic-ui/src/components/H1/index";
  export { H2, H2Props } from "athenic-ui/src/components/H2/index";
  export { H3, H3Props } from "athenic-ui/src/components/H3/index";
  export { Button, IconButton, ButtonIconType, ButtonProps, ButtonSize, ButtonVariant, } from "athenic-ui/src/components/Button/index";
  export { Badge, BadgeProps, BadgeSolid, BadgeVariant, } from "athenic-ui/src/components/Badge/index";
  export { Spinner, SpinnerProps, SpinnerSize, SpinnerSpeed, SpinnerVariant, } from "athenic-ui/src/components/Spinner/index";
  export { TextInput, TextInputProps, TextInputType, } from "athenic-ui/src/components/TextInput/index";
  export { SearchInput, SearchInputProps } from "athenic-ui/src/components/SearchInput/index";
  export { Card, CardProps, CardSize } from "athenic-ui/src/components/Card/index";
  export { Link, LinkProps } from "athenic-ui/src/components/Link/index";
  export { Counter, CounterProps, CounterSize } from "athenic-ui/src/components/Counter/index";
  export { Collapse, CollapsContentType, CollapseProps, CollapseTab, } from "athenic-ui/src/components/Collapse/index";
  export { Stepper, StepperDirection, Step, StepState, StepperProps, Steps, } from "athenic-ui/src/components/Stepper/index";
  export { Rating, EmojiScale, EmojiType, RatingProps, RatingSize, RatingVariant, } from "athenic-ui/src/components/Rating/index";
  export { Modal, ModalPosition, ModalProps } from "athenic-ui/src/components/Modal/index";
  export { Avatar, AvatarProps, AvatarSize } from "athenic-ui/src/components/Avatar/index";
  export { Comment, CommentAuthor, CommentProps } from "athenic-ui/src/components/Comment/index";
  export { Alert, AlertProps, AlertVariant } from "athenic-ui/src/components/Alert/index";
  export { Switch, SwitchProps, SwitchSize, SwitchVariant, } from "athenic-ui/src/components/Switch/index";
  export { RadioGroup, RadioGroupOption, RadioGroupOptions, RadioGroupProps, } from "athenic-ui/src/components/RadioGroup/index";
  export { OTPInput, OTPInputProps } from "athenic-ui/src/components/OTPInput/index";

}
declare module 'athenic-ui' {
  import main = require('athenic-ui/index.ts');
  export = main;
}