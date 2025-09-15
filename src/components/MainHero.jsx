
import React from "react";



const MainHero = React.forwardRef(({ heroStyle, ...props }, ref) => {
  switch (heroStyle) {
    case "split":
      return <HeroSplit ref={ref} {...props} />;
    case "terminal":
      return <HeroTerminal ref={ref} {...props} />;
    default: 
      return <HeroOriginal ref={ref} {...props} />;
  }
});


export default MainHero;
