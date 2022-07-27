import React from 'react';

type Props = {
  type: 'button' | 'submit' | 'reset' | undefined;
  onClickFunction: () => void;
  className: string;
  text: string;
};

const Button = (props: Props): JSX.Element => {
  const {type, onClickFunction, className, text} = props;

  return (
    <button type={type} className={className} onClick={onClickFunction}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
