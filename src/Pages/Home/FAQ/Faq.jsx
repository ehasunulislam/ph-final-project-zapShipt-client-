import React from "react";
import { faqData } from "../../../assets/assets";

const Faq = () => {
  return (
    <div>
      <div className="heading text-center space-y-3">
        <h3 className="text-2xl md:text-3xl font-bold">
          Frequently Asked Question (FAQ)
        </h3>
        <p>
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your
          body with ease!
        </p>
      </div>

      <div className="faq-section px-9 py-5">
        {faqData.map((i) => {
          return (
            <div
              className="collapse collapse-arrow bg-base-100 border border-base-300 space-y-3"
              key={i.id}
            >
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title font-semibold">{i.question}</div>
              <div className="collapse-content text-sm">{i.answer}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
