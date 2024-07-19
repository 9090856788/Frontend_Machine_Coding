/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./style.css";

const AccordionItem = ({ heading, description, isOpen, onClick }) => (
  <div className="accordion-item">
    <div className="accordion-title" onClick={onClick}>
      <h2>{heading}</h2>
      <span>{isOpen ? "-" : "+"}</span>
    </div>
    {isOpen && <div className="accordion-content"> {description} </div>}
  </div>
);

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      <div className="accordion">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            heading={item.heading}
            description={item.description}
            isOpen={openIndex === index}
            onClick={() => {
              setOpenIndex(openIndex === index ? null : index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
