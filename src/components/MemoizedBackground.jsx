import React, { memo } from 'react';
import LiquidEther from './LiquidEther.jsx';

const Background = () => {
  return (
    <>
  <LiquidEther />
  </>);
};


export const MemoizedBackground = memo(Background);
