import React from "react";
import ContactForm from "./ContactForm";
import Faq from "./Faq";

export default function ContactDetails() {
  return (
    <div
      className="col-span-2 bg-[var(--card)]
                border border-[var(--border)]
                text-[var(--text)] rounded-xl p-7 flex flex-col gap-10"
    >
      <div className="">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl lg:text-4xl font-semibold">
            Contactanos (Beta)
          </h2>
          <p className=" lg:text-xl">
           Estamos para ayudarte
          </p>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
