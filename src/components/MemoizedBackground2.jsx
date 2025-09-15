import React, { memo } from 'react';
import Aurora from './Aurora.jsx';

const Background1 = () => {
  return (
    <>
  <Aurora />
  </>);
};


export const MemoizedBackground2 = memo(Background1);
