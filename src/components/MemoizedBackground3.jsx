import React, { memo } from 'react';
import Plasma from './Plasma.jsx';

const Background2 = () => {
  return (
    <>
  <Plasma />
  </>);
};

export const MemoizedBackground3 = memo(Background2);
