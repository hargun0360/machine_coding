import React, { useEffect, useState } from "react";

const faqData = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    question: "How long do cats live?",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
];

const FaqComp = ({ faq, index, isShow }) => {
  return (
      <div className="faq-box" data-index={index}>
          <div className="que">
              <button className={isShow ? 'arrow' : ''}></button>
              <div>{faq.question}</div>
          </div>
          {isShow && <div className='ans'>{faq.answer}</div>}
      </div>
  );
}

function App() {
  const [isShow, setIsShow] = useState({ 0: true });

  const handleClick = (event) => {
      const index = event.target.closest('.faq-box').dataset.index;
      setIsShow((prev) => ({
          ...prev,
          [index]: !prev[index],
      }));
  };

  return (
      <div onClick={handleClick}>
          {faqData.map((faq, index) => (
              <FaqComp key={index} faq={faq} index={index} isShow={!!isShow[index]} />
          ))}
      </div>
  );
}

export default App;
