import React from "react";

const Form = () => {
  return (
    <div className="rounded-xl p-6 md:p-8 border border-gray-300 shadow-sm backdrop-blur-sm">
      <form className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-white">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            className="w-full rounded-md border border-gray-300 border-input bg-background px-3 py-2 text-sm text-gray-300 placeholder:text-gray-400 ring-offset-background transition-all focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-white">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your email"
            className="w-full rounded-md border border-gray-300 border-input bg-background px-3 py-2 text-sm text-gray-300 placeholder:text-gray-400 ring-offset-background transition-all focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-white">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your message"
            rows={5}
            className="w-full rounded-md border border-gray-300 border-input bg-background px-3 py-2 text-sm text-gray-300 placeholder:text-gray-400 ring-offset-background transition-all focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-white inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 hover:bg-white/90"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default Form;
