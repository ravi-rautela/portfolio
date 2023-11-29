import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Home() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6h6nki6",
        "template_gta05h9",
        form.current,
        "cjK1Zu6WRxAJ5LJZI"
      )
      .then(
        (result) => {
          alert("Message send successfully!!");
        },
        (error) => {
          alert("Something went wrong!!");
          console.log(error.message);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <div>
        <div className="mx-auto max-w-7xl ">
          <div className="mx-auto max-w-7xl py-6 md:py-20 dark:bg-black ">
            <div className="justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
              <div className="flex items-center justify-center">
                <div className="px-2 md:px-12 ">
                  <p className="text-2xl font-bold text-gray-900 md:text-4xl dark:text-white">
                    Get in touch
                  </p>
                  <p className="mt-4 text-lg text-gray-600 dark:text-white">
                    Our friendly team would love to hear from you.
                  </p>
                  <form
                    className="mt-8 space-y-4 "
                    ref={form}
                    onSubmit={sendEmail}
                  >
                    <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2 ">
                      <div className="grid w-full  items-center gap-1.5">
                        <label
                          className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white"
                          htmlFor="first_name"
                        >
                          First Name
                        </label>
                        <input
                          className="text-black flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-800 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 dark:text-white"
                          type="text"
                          id="first_name"
                          placeholder="First Name"
                          name="first_name"
                        />
                      </div>
                      <div className="grid w-full  items-center gap-1.5">
                        <label
                          className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white"
                          htmlFor="last_name"
                        >
                          Last Name
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 dark:text-white"
                          type="text"
                          id="last_name"
                          placeholder="Last Name"
                          name="last_name"
                        />
                      </div>
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="email"
                        placeholder="Email"
                        name="user_email"
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white"
                        htmlFor="phone_number"
                      >
                        Phone number
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="tel"
                        id="phone_number"
                        placeholder="Phone number"
                        name="user_phone"
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        id="message"
                        placeholder="Leave us a message"
                        name="message"
                        cols="3"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:bg-white dark:text-black
                      hover:bg-sky-100
                      "
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
