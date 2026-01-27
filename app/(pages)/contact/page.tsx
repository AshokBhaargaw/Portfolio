import React from "react";
import Contact from "./Contact";

export default function page() {
  return (
    <div className="flex flex-col justify-center min-h-screen pt-30  ">
      <Contact />
      <div className="rounded-2xl mx-auto w-5/6 overflow-hidden bg-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d538.6518941128396!2d71.9172160100069!3d27.014328026337218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39473585302800e7%3A0x9ba45d479e3e5ae1!2sAshok%20Bhaargaw%20-%20Developer!5e0!3m2!1sen!2sin!4v1769495234147!5m2!1sen!2sin"
          className="overflow-hidden min-h-100 w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
