import React, { useState } from "react";
import "../css/faq.css";

const faqData = [
  {
    question: "Can you work while studying in the United States?",
    answer:
      "Yes, international students on F-1 visas can work up to 20 hours per week on-campus. Off-campus employment may require authorization."
  },
  {
    question: "What are the English Language Proficiency requirements?",
    answer:
      "Most universities require TOEFL, IELTS, or Duolingo English Test scores. Requirements vary by university."
  },
  {
    question: "What are the other Standardized Tests for USA?",
    answer:
      "Common tests include SAT, ACT for undergrad; GRE, GMAT for grad programs; and LSAT, MCAT for law/medical schools."
  },
  {
    question: "What are the popular courses in the USA?",
    answer:
      "Popular fields include Computer Science, Business Administration, Engineering, Medicine, and Data Science."
  },
  {
    question:
      "Are any scholarships available for international students in USA?",
    answer:
      "Yes, many universities offer merit-based, need-based, or departmental scholarships for international students."
  }
];

export const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-heading">Frequently asked Questions</h2>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <span className="arrow">{activeIndex === index ? "▲" : "▼"}</span>
            </button>
            <div
              className="faq-answer"
              style={{ maxHeight: activeIndex === index ? "300px" : "0px" }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
