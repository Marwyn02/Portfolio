import React from "react";

import ContactDetails from "./ContactDetails.jsx";
import Form from "./Form.jsx";

const Contact = () => {
  return (
    <div id="contact" className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
      <ContactDetails />
      <Form />
    </div>
  );
};

export default Contact;
