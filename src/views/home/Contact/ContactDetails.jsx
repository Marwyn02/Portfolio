import React from "react";

// Third-party libraries
import { Mail, Phone, MapPin } from "lucide-react";

// Component Imports
import Subtitle from "../../../components/ui/Subtitle";
import Subtext from "../../../components/ui/Subtext";

const ContactDetails = () => {
  return (
    <div>
      <div className="inline-flex items-center justify-center mb-2">
        <span className="w-auto text-xs font-semibold bg-gray-300 rounded-full px-2.5 py-0.5">
          Contact
        </span>
      </div>

      <div className="space-y-5 py-5">
        <Subtitle align="left">Get in touch</Subtitle>
        <Subtext>
          Have a question, collaboration in mind, or just want to say hi? <br />
          I'd love to hear from you!
        </Subtext>
      </div>

      <section className="space-y-6 mt-5">
        <div className="flex items-start space-x-4">
          <div className="col-span-1 p-3 w-fit text-white bg-gray-700 rounded-full">
            <Mail />
          </div>

          <div>
            <h3 className="font-medium text-white">Email</h3>
            <p className="text-white/60">jhunmarwyn.sumargo@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="col-span-1 p-3 w-fit text-white bg-gray-700 rounded-full">
            <Phone />
          </div>

          <div>
            <h3 className="font-medium text-white">Phone</h3>
            <p className="text-white/60">(+63) 919-231-9278</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="col-span-1 p-3 w-fit text-white bg-gray-700 rounded-full">
            <MapPin />
          </div>

          <div>
            <h3 className="font-medium text-white">Location</h3>
            <p className="text-white/60">Cavite, Philippines</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactDetails;
