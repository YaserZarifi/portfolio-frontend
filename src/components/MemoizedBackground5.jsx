import React, { memo } from 'react';
import Squares from './Squares.jsx';

const Background4 = () => {
  return (
    <Squares
speed={0.5}
squareSize={40}
direction='diagonal' // up, down, left, right, diagonal
borderColor='#fff'
hoverFillColor='#222'
/>);
};

export const MemoizedBackground5 = memo(Background4);
