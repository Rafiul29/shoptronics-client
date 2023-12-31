import SectionTitle from "../components/SectionTitle";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import emailjs from "@emailjs/browser"
import { useRef } from "react";
import { toast } from "react-toastify";
import {useTitle} from "../hooks/useTitle";

const Contact = () => {

  const formRef=useRef(null)

  useTitle("Contact");

  const sendEmail=(e)=>{
    e.preventDefault();
 
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_PUBLIC_ID
      ).then(()=>{
        toast.success('🦄 Message Send successfuly', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      },()=>{
        toast.error('🦄 Message Not Send ', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      })

      // reset
      e.target.name.value="";
      e.target.email.value="";
      e.target.message.value=""

}


  return (
    <div className="section-padding mt-20 md:h-[calc(100vh-9rem)] ">
      <div className="md:mx-auto md:w-[70%] wrapper">
    
        {/* section title */}
        <SectionTitle title={"Contact Us"} />

        <div className="md:mt-20 -mt-5 grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-10">
          {/* contact form */}
          <form className="flex flex-col gap-4" onSubmit={sendEmail} ref={formRef}>
            {/* name */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className=" text-gray-700 text-xl font-bold"
              >
                Name
              </label>
              <input
                type="name"
                id="name"
                required
                name="from_name"
                className="w-full border rounded-md py-4 px-5 focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>

            {/* email */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className=" text-gray-700 text-xl font-bold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                name="from_email"
                className="w-full border rounded-md py-4 px-5 focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="address"
                className="text-gray-700 text-xl font-bold"
              >
                Message
              </label>
              <textarea
                id="address"
                name="message"
                rows="3"
                required
                className="w-full border rounded-md py-4 px-5 focus:outline-none focus:border-blue-500"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Submit
            </button>
          </form>

            {/* details */}
          <div className="md:mt-5 flex flex-col  gap-5 ">
            <h4 className="text-2xl font-medium">Location</h4>
            <p className="text-xl tracking-wider ">Kushtia, Bangladesh</p>
            <p className="text-xl tracking-wider "> Phn: <span className="font-bold">0179XXXXXXX</span> </p>
            <p className="text-xl tracking-wider ">10:00 AM - 6:00 PM</p>
            <p className="text-xl tracking-wider ">
              {" "}
              Email:<span className="font-bold"> info@shoptronics.com{" "}</span>
            </p>
            <div className="flex flex-col gap-5">
              <h4 className="text-2xl font-medium ">follow us</h4>
              <div className="socials flex gap-5">
                <span
                  className=" cursor-pointer rounded-lg 
                text-3xl text-blue-600"
                >
                  <FaFacebook />
                </span>
                <span
                  className=" cursor-pointer rounded-lg 
                text-3xl text-red-600"
                >
                  <FaInstagram />
                </span>
                <span
                  className=" cursor-pointer rounded-lg 
                text-3xl text-blue-600"
                >
                  <FaTwitter />
                </span>
                <span
                  className=" cursor-pointer rounded-lg 
                text-3xl text-red-600"
                >
                  <FaYoutube />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
