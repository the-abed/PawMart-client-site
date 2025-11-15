import React from "react";
import PageTitle from "../common/PageTitle";

const Terms = () => {
  return (
    <>
      <PageTitle title="Terms & Conditions" />

      <div className="min-h-screen bg-base-100 dar py-16 px-5">
        <div className="max-w-4xl mx-auto bg-base-200  rounded-2xl shadow-md border border-neutral-200 dark:border-neutral-700 p-10 transition-colors" style={{ backgroundColor: "var(--color-base-100)", color: "var(--color-text-secondary)" }}>

          {/* Header */}
          <h1 className="text-4xl font-semibold text-secondary">
            <span className="text-primary">Terms</span> & Conditions
          </h1>

          <p className="  mb-8 leading-relaxed">
            Welcome to <strong>PawMart</strong>. By accessing or using our platform,
            you agree to comply with the following terms and conditions.  
            Please read them carefully.
          </p>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold   mb-3">
              1. Acceptance of Terms
            </h2>
            <p className=" leading-relaxed">
              By using PawMart, you acknowledge that you have read, understood,
              and agreed to these Terms & Conditions, as well as our Privacy Policy.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl   mb-3">
              2. User Responsibilities
            </h2>
            <ul className="list-disc ml-6  space-y-2 leading-relaxed">
              <li>Provide accurate information when creating or managing listings.</li>
              <li>Avoid posting misleading, harmful, or inappropriate content.</li>
              <li>Respect all users and follow community guidelines.</li>
              <li>Ensure that pets listed for adoption/sale are treated ethically.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl  mb-3">
              3. Listings & Transactions
            </h2>
            <p className="  leading-relaxed mb-3">
              PawMart acts as a **platform to connect pet owners, breeders, sellers, and buyers**.  
              We do not directly handle transactions between users.
            </p>

            <ul className="list-disc ml-6 space-y-2 leading-relaxed">
              <li>You are fully responsible for your listings and products.</li>
              <li>All communication between buyers and sellers happens externally.</li>
              <li>PawMart is not liable for disputes, payments, or deliveries.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold   mb-3">
              4. Prohibited Content
            </h2>
            <p className=" leading-relaxed mb-3">
              The following activities are strictly prohibited:
            </p>
            <ul className="list-disc ml-6 space-y-2 leading-relaxed">
              <li>Posting illegal or banned animal breeds.</li>
              <li>Selling animals without proper care or vaccinations.</li>
              <li>Spam, scams, or fraudulent listings.</li>
              <li>Using PawMart for harmful or unethical practices.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold   mb-3">
              5. Order & Payment Disclaimer
            </h2>
            <p className=" leading-relaxed">
              PawMart does not handle payments directly.  
              All payments, deliveries, and meet-ups must be arranged between the buyer and seller.  
              Please use caution and verify all information before proceeding.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold   mb-3">
              6. Termination of Access
            </h2>
            <p className=" leading-relaxed">
              PawMart reserves the right to remove any listing, block users, or suspend accounts
              that violate these Terms & Conditions.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold   mb-3">
              7. Updates to Terms
            </h2>
            <p className=" leading-relaxed">
              PawMart may update these terms at any time. Continued use of our platform
              indicates your acceptance of the updated terms.
            </p>
          </section>

          {/* Footer */}
          <div className="mt-12 pt-6 border-t border-neutral-300   text-sm">
            Last updated: November 2025  
            <br />
            © 2025 PawMart — All rights reserved.
          </div>

        </div>
      </div>
    </>
  );
};

export default Terms;
