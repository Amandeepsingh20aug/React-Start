import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-center mx-auto my-3 py-3 font-semibold">
        Contact Us
      </h1>
      <div className="w-6/12 bg-gray-200 h-2/4 mx-auto">
        <form className="flex flex-col my-2">
          <div className="w-full flex justify-center">
            <input
              type="text"
              className="border border-black p-2 mt-8 w-6/12 mx-auto"
              placeholder="name"
            />
          </div>
          <div className="w-full flex justify-center">
            <input
              type="text"
              className="border border-black p-2 mt-8 mb-8 w-6/12 mx-auto"
              placeholder="message"
            />
          </div>
          <div className="w-full flex justify-center">
           <button type="submit" className="mb-8 border border-black text-white bg-black p-3 rounded-lg font-semibold hover:bg-white hover:text-black">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
