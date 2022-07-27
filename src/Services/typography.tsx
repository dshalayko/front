import React from 'react';
import {Typography} from '@material-ui/core';

type Props = {
  firstText: string;
  secondText: string;
  onClickFunction: () => void;
};

const TypographyComponent = (props: Props): JSX.Element => {
  const {firstText, secondText, onClickFunction} = props;

  return (
    <Typography className='main-page-text'>
      {firstText}
      <span className='main-page-underline-text' onClick={onClickFunction}>{secondText}</span>
    </Typography>
  );
};

export default TypographyComponent;
