import React from "react";

export function MainHeading(props) {
  return (
    <div className="headings flex justify-center underline underline-offset-6 decoration-red-900">
      <h1 className="text-9xl font-mono bold text-center mt-32">
        {props.heading}
      </h1>
    </div>
  );
}

export function SubHeadings(props) {
  return (
    <div className="subheadings flex justify-center pt-20 pd-7 underline underline-offset-8 decoration-red-900">
      <h1 className="text-4xl font-mono bold text-center">
        {props.subheading}
      </h1>
    </div>
  );
}
