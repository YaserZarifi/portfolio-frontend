import React, { memo } from 'react';
import Galaxy from './Galaxy.jsx';

const Background3 = () => {
  return (
    <>
  <Galaxy />
  </>);
};

export const MemoizedBackground4 = memo(Background3);
