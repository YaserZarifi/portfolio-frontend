
import React from "react";


const Section = React.forwardRef(({ id, title, children }, ref) => (
  <section
    ref={ref}
    id={id}
    className="scroll-spotlight-section py-20 sm:py-24"
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="font-heading text-gray-900 dark:text-white text-3xl sm:text-4xl font-bold text-center mb-12">
        {title}
      </h2>
      {children}
    </div>
  </section>
));

export default Section;
