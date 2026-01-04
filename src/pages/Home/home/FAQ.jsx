import React from "react";

const FAQ = () => {
  const faqs = [
    { q: "How do I adopt a pet from PawMart?", a: "Simply browse the 'Pets & Supplies' section, click on a pet, and use the 'See Details' button to contact the owner." },
    { q: "Can I list my own pet for adoption?", a: "Yes! Once you log in, use the 'Add Listing' feature in your dashboard to post your pet or product." },
    { q: "Is PawMart a pet store?", a: "No, PawMart is a community marketplace where different shops and individuals can list items." },
  ];

  return (
    <section className="py-10 px-4 md:px-16 my-12 w-11/12 mx-auto">
      <div className="text-center mb-12">
        <p className="text-primary font-medium mb-2">Common Inquiries 🙋‍♂️</p>
        <h2 className="text-3xl md:text-4xl font-bold text-secondary">Frequently Asked Questions</h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="collapse collapse-plus bg-base-300 rounded-2xl shadow-sm border border-base-200">
            <input type="radio" name="faq-accordion" defaultChecked={index === 0} /> 
            <div className="collapse-title text-xl font-semibold text-secondary">
              {faq.q}
            </div>
            <div className="collapse-content text-sm" style={{ color: "var(--color-text-primary)" }}> 
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;