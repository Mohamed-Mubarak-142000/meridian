"use client";
import React, { useState } from "react";

const Frequently = () => {
  const [contentQuestion, setContentQuestion] = useState(1);

  const dataFrq = [
    {
      id: 1,
      question: "Can I return my furniture?",
      answer:
        "In the unlikely event that you wish to return your furniture, Sabai Living offer a 30-day returns policy. However, you will be charged an administrative fee to cover this. Your refund will be processed as soon as the product has been returned to our warehouse and has been thoroughly checked for any damage or quality issues. Sabai Living can only issue refunds for items that are not damaged. What do I do if my item arrives damaged, or if I have received the wrong item? In the unlikely event that you receive a damaged item, please contact us within 24 hours of receiving your order. You can contact us via telephone or email. We will ask you to send photographs and a description of the damage and will then thoroughly investigate. If required, we will repair, replace, or refund your damaged item.If you receive an incorrect item, please report it to us as soon as possible and we will make arrangements for this to be returned and the correct item sent to you.",
    },
    {
      id: 2,
      question: "Can your furniture be left outside?",
      answer:
        "In the unlikely event that you wish to return your furniture, Sabai Living offer a 30-day returns policy. However, you will be charged an administrative fee to cover this. Your refund will be processed as soon as the product has been returned to our warehouse and has been thoroughly checked for any damage or quality issues. Sabai Living can only issue refunds for items that are not damaged. What do I do if my item arrives damaged, or if I have received the wrong item? In the unlikely event that you receive a damaged item, please contact us within 24 hours of receiving your order. You can contact us via telephone or email. We will ask you to send photographs and a description of the damage and will then thoroughly investigate. If required, we will repair, replace, or refund your damaged item.If you receive an incorrect item, please report it to us as soon as possible and we will make arrangements for this to be returned and the correct item sent to you.",
    },
    {
      id: 3,
      question: "What does powder coated mean?",
      answer:
        "In the unlikely event that you wish to return your furniture, Sabai Living offer a 30-day returns policy. However, you will be charged an administrative fee to cover this. Your refund will be processed as soon as the product has been returned to our warehouse and has been thoroughly checked for any damage or quality issues. Sabai Living can only issue refunds for items that are not damaged. What do I do if my item arrives damaged, or if I have received the wrong item? In the unlikely event that you receive a damaged item, please contact us within 24 hours of receiving your order. You can contact us via telephone or email. We will ask you to send photographs and a description of the damage and will then thoroughly investigate. If required, we will repair, replace, or refund your damaged item.If you receive an incorrect item, please report it to us as soon as possible and we will make arrangements for this to be returned and the correct item sent to you.",
    },
    {
      id: 4,
      question: "What is thermosetting polymer?",
      answer:
        "In the unlikely event that you wish to return your furniture, Sabai Living offer a 30-day returns policy. However, you will be charged an administrative fee to cover this. Your refund will be processed as soon as the product has been returned to our warehouse and has been thoroughly checked for any damage or quality issues. Sabai Living can only issue refunds for items that are not damaged. What do I do if my item arrives damaged, or if I have received the wrong item? In the unlikely event that you receive a damaged item, please contact us within 24 hours of receiving your order. You can contact us via telephone or email. We will ask you to send photographs and a description of the damage and will then thoroughly investigate. If required, we will repair, replace, or refund your damaged item.If you receive an incorrect item, please report it to us as soon as possible and we will make arrangements for this to be returned and the correct item sent to you.",
    },
    {
      id: 5,
      question: "Are your cushions machine washable?",
      answer:
        "In the unlikely event that you wish to return your furniture, Sabai Living offer a 30-day returns policy. However, you will be charged an administrative fee to cover this. Your refund will be processed as soon as the product has been returned to our warehouse and has been thoroughly checked for any damage or quality issues. Sabai Living can only issue refunds for items that are not damaged. What do I do if my item arrives damaged, or if I have received the wrong item? In the unlikely event that you receive a damaged item, please contact us within 24 hours of receiving your order. You can contact us via telephone or email. We will ask you to send photographs and a description of the damage and will then thoroughly investigate. If required, we will repair, replace, or refund your damaged item.If you receive an incorrect item, please report it to us as soon as possible and we will make arrangements for this to be returned and the correct item sent to you.",
    },
    {
      id: 6,
      question: "Do the products fade in sunlight?",
      answer:
        "In the unlikely event that you wish to return your furniture, Sabai Living offer a 30-day returns policy. However, you will be charged an administrative fee to cover this. Your refund will be processed as soon as the product has been returned to our warehouse and has been thoroughly checked for any damage or quality issues. Sabai Living can only issue refunds for items that are not damaged. What do I do if my item arrives damaged, or if I have received the wrong item? In the unlikely event that you receive a damaged item, please contact us within 24 hours of receiving your order. You can contact us via telephone or email. We will ask you to send photographs and a description of the damage and will then thoroughly investigate. If required, we will repair, replace, or refund your damaged item.If you receive an incorrect item, please report it to us as soon as possible and we will make arrangements for this to be returned and the correct item sent to you.",
    },
    {
      id: 7,
      question: "How do I care for my furniture?",
      answer:
        "In the unlikely event that you wish to return your furniture, Sabai Living offer a 30-day returns policy. However, you will be charged an administrative fee to cover this. Your refund will be processed as soon as the product has been returned to our warehouse and has been thoroughly checked for any damage or quality issues. Sabai Living can only issue refunds for items that are not damaged. What do I do if my item arrives damaged, or if I have received the wrong item? In the unlikely event that you receive a damaged item, please contact us within 24 hours of receiving your order. You can contact us via telephone or email. We will ask you to send photographs and a description of the damage and will then thoroughly investigate. If required, we will repair, replace, or refund your damaged item.If you receive an incorrect item, please report it to us as soon as possible and we will make arrangements for this to be returned and the correct item sent to you.",
    },
    {
      id: 8,
      question: "Is the furniture ‘flat packed’ or ‘fully assembled’?",
      answer:
        "In the unlikely event that you wish to return your furniture, Sabai Living offer a 30-day returns policy. However, you will be charged an administrative fee to cover this. Your refund will be processed as soon as the product has been returned to our warehouse and has been thoroughly checked for any damage or quality issues. Sabai Living can only issue refunds for items that are not damaged. What do I do if my item arrives damaged, or if I have received the wrong item? In the unlikely event that you receive a damaged item, please contact us within 24 hours of receiving your order. You can contact us via telephone or email. We will ask you to send photographs and a description of the damage and will then thoroughly investigate. If required, we will repair, replace, or refund your damaged item.If you receive an incorrect item, please report it to us as soon as possible and we will make arrangements for this to be returned and the correct item sent to you.",
    },
    {
      id: 9,
      question: "When can I expect my item to be delivered?",
      answer:
        "In the unlikely event that you wish to return your furniture, Sabai Living offer a 30-day returns policy. However, you will be charged an administrative fee to cover this. Your refund will be processed as soon as the product has been returned to our warehouse and has been thoroughly checked for any damage or quality issues. Sabai Living can only issue refunds for items that are not damaged. What do I do if my item arrives damaged, or if I have received the wrong item? In the unlikely event that you receive a damaged item, please contact us within 24 hours of receiving your order. You can contact us via telephone or email. We will ask you to send photographs and a description of the damage and will then thoroughly investigate. If required, we will repair, replace, or refund your damaged item.If you receive an incorrect item, please report it to us as soon as possible and we will make arrangements for this to be returned and the correct item sent to you.",
    },
  ];

  const renderQuestion = () => {
    return dataFrq.map((item) => (
      <div key={item.id} className="w-full">
        <button
          type="button"
          className={` text-[20px] text-text_black ${
            contentQuestion === item.id
              ? "transition duration-150 border-b border-b-text_link_dark text-text_link_dark"
              : ""
          }`}
          onClick={() => setContentQuestion(item.id)}
        >
          {item.question}
        </button>

        <div
          className={`text-sm tracking-[2px] ${
            contentQuestion === item.id
              ? "h-fit border border-[#eee] mt-5 p-5 text-text_black rounded-md shadow-md"
              : "h-[0px] overflow-hidden"
          }`}
        >
          {renderContent()}
        </div>
      </div>
    ));
  };

  const renderContent = () => {
    const itemContent = dataFrq.find((item) => item.id === contentQuestion);
    return itemContent ? <p>{itemContent.answer}</p> : null;
  };
  return (
    <div className=" my-10 px-10">
      <h1 className="text-[30px] font-bold">Frequently Asked Questions</h1>

      <div className=" my-5 p-2 w-full flex flex-col items-center text-text_link_light gap-5">
        {renderQuestion()}
      </div>
    </div>
  );
};

export default Frequently;
