import React, { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [form, setForm] = useState(false);
  const [gender, setGender] = useState("");
  const [agree,setAgree] = useState(false);
  const firstname = useRef(null);
  const lastname = useRef(null);
  const message = useRef(null); 
  const handleChange = (e) => {
    const val = e.target.value;
    setGender(val);
  };

  const handleAgree = (e) =>{
    setAgree(e.target.checked);
  }

  const handleSubmit = () =>{
    const nameFirst = firstname.current.value 
    const nameLast = lastname.current.value
    const msg = message.current.value
    const formData = {
      FirstName : nameFirst,
      LastName  : nameLast,
      Message : msg,
      Gender : gender,
      Agree : agree
    }

    console.log(formData,'Form Data');
  }

  
  return (
    <div>
      <h1 className="text-center mx-auto my-3 py-3 font-semibold">
        Contact Us
      </h1>
      <div className="bg-gray-400 w-1/2 mx-auto bg-opacity-50 my-5">
        <form onSubmit={(e)=> e.preventDefault()} className="py-5 mx-auto flex flex-col justify-center items-center">
          <div className="flex justify-center flex-col w-1/2 my-5">
            <label className="my-2 text-lg font-semibold">FirstName</label>
            <input
            ref={firstname}
              type="text"
              placeholder="First name"
              className="p-3 rounded-lg outline-none"
            />
          </div>
          <div className="flex justify-center flex-col w-1/2 my-5">
            <label className="my-2 text-lg font-semibold">LastName</label>
            <input
            ref={lastname}
              type="text"
              placeholder="Last Name"
              className="p-3 rounded-lg outline-none"
            />
          </div>
          <div className="flex justify-center flex-col w-1/2 my-5">
            <label className="my-2 text-lg font-semibold">Your Message</label>
            <textarea
            ref={message}
              type="text"
              placeholder="Your Message"
              className="p-3 rounded-lg outline-none"
            />
          </div>
          <div className="flex justify-center flex-row w-1/2 my-5 items-center">
            <label className="text-center mx-2 text-lg font-semibold">
              Male
            </label>
            <input
              type="radio"
              name="option"
              placeholder="male"
              value="Male"
              checked={gender === "Male"}
              onChange={handleChange}
            />
            <label className="text-center mx-2 text-lg font-semibold">
              Female
            </label>
            <input
              type="radio"
              name="option"
              placeholder="female"
              value="Female"
              checked={gender === "Female"}
              onChange={handleChange}
            />
            <label className="text-center mx-2 text-lg font-semibold">
              other
            </label>
            <input
              type="radio"
              name="option"
              placeholder="other"
              value="Other"
              checked={gender === "Other"}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center flex-row items-center w-1/2">
            <input type="checkbox" name="agree"  checked={agree} 
              onChange={handleAgree}/>
            <p>Agree to terms and Condition</p>
          </div>
          <div className="flex justify-center flex-row items-center w-1/4">
          <button className="text-white bg-black text-lg p-2 rounded-lg" onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
