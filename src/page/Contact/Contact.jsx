import { Helmet } from "react-helmet";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("jhjj");
    const formData = e.target;
    if (
      !formData.user_email.value ||
      !formData.user_name.value ||
      !formData.Subject.value ||
      !formData.message.value
    ) {
      Swal.fire({
        icon: "warning",
        title: "Please give enough information ",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    emailjs
      .sendForm(
        "service_8r2tfnk",
        "template_mhhae9h",
        form.current,
        "zpCeyTgafwDsRX80T"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Thanks for your messeage",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <Helmet>
        <title>Contact | Eshaal Public School</title>
      </Helmet>
      <SectionTitle subHeading="------" heading="Contact US"></SectionTitle>
      <div className="max-w-[1280px] md:flex  justify-start gap-5 items-center my-16">
        <div className="rounded-xl w-full   border border-green-600 h-[600px]">
          <form ref={form} className="w-full" onSubmit={sendEmail}>
            <div className="flex w-full relative items-center">
              <div className="gap-2 flex absolute -left-2">
                <img src="/Contact/Ellipse 16.svg" alt="" />
                <img src="/Contact/Ellipse 17.svg" alt="" />
                <img src="/Contact/Ellipse 18.svg" alt="" />
              </div>
              <div className="gap-2 mx-auto text-center font-medium ">
                New Messeage
              </div>
            </div>
            <div className="flex mt-7 gap-2 border-b-[#80808080] border-b-2 pb-3">
              Email :
              <input
                name="user_email"
                placeholder="Enter Your Email "
                type="text"
                className=" focus:outline-none placeholder:text-[#80808080]"
              />
            </div>
            <div className="flex mt-4 gap-2 border-b-[#80808080] border-b-2 pb-3">
              Name :
              <input
                name="user_name"
                placeholder="Enter Your Name "
                type="text"
                className=" focus:outline-none placeholder:text-[#80808080]"
              />
            </div>
            <div className="flex mt-4 gap-2 border-b-[#80808080] border-b-2 pb-3">
              Subject :
              <input
                name="Subject"
                placeholder="Enter Your Subject "
                type="text"
                className=" focus:outline-none placeholder:text-[#80808080]"
              />
            </div>
            <div>
              <textarea
                name="message"
                cols="60"
                rows="7"
                placeholder="Write Your Messeage"
                className=" focus:outline-none w-full placeholder:text-[#80808080] rounded-xl p-[20px] mt-4"
              ></textarea>
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="btn Contact-button  border-0"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="rounded-xl w-full   border md:border-green-600 h-[600px]">
          <div className="my-14 ">
            <table className="table  border text-xs md:text-xl">
              <thead className="text-center">
                <tr className="text-center text-light-blue-300">
                  Personal contact
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Phone Number:</td>
                  <td>+92 301 4126824</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>rehmantariq8929@gmail.com</td>
                </tr>
                <tr>
                  <td>Location:</td>
                  <td>
                    Meli Burji, Punjab, Pakistan · Sangla Hill, Punjab, Pakistan
                  </td>
                </tr>
                <tr>
                  <td>Address:</td>
                  <td>
                    Chak 17 Meli Burji Tehsil Sangla Hill District Nakana Shab
                    Punjab Pakistan , Sangla Hill, Pakistan, Chak no 17 Meli
                    Burji Tehsil Sangla Hill District Nakana Shab Punjab
                    Pakistan
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="https://www.facebook.com/eshaalpublicschool">
                      Facebook Page
                    </Link>
                  </td>
                  <td>
                    <Link to="https://www.instagram.com/eshaal_public_school?igsh=YWYwM2I1ZDdmOQ==">
                      Instagram
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
