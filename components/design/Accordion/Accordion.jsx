import { FaChevronRight } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import React, { useState } from "react";

function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion shadow-md rounded-lg mt-4">
      <div className="accordion-item">
        <div
          className="accordion-title cursor-pointer p-4"
          onClick={() => setIsActive(!isActive)}
        >
          <div className="grid grid-cols-11 gap-4 justify-between">
            <h5 className="text-title-800 col-span-10 font-semibold">
              {title}
            </h5>
            {isActive ? (
              <FaChevronUp className="ml-auto text-title-800 w-6 h-6" />
            ) : (
              <FaChevronRight className="ml-auto text-title-800 w-6 h-6" />
            )}
          </div>
        </div>
        {isActive && <div className="accordion-content p-4">{content}</div>}
      </div>
    </div>
  );
}

export default Accordion;
