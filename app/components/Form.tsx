import React from "react";
import styles from "../ui/button.module.css";
const Form = () => {
  return (
    <>
      <div className=" p-6 w-[100%]">
        <div>
          <label htmlFor="name" className="block pb-4 font-semibold">
            Full Name
          </label>
          <input
            className="block w-[100%] p-3 rounded outline-none"
            type="text"
            id="name"
          />
        </div>
        <div className="py-2">
          <label htmlFor="email" className="block pb-4 font-semibold">
            Email
          </label>
          <input
            className="block w-[100%] p-3 rounded outline-none"
            type="text"
            id="email"
          />
        </div>
        <div className="py-2">
          <label htmlFor="message" className="block pb-4 font-semibold">
            Message/Feedback
          </label>
          <input
            className="block w-[100%] p-3 rounded outline-none"
            type="text"
            id="message"
          />
        </div>

        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Form;
