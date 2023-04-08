import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "../components/NavBar";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="bg-black w-screen h-screen flex flex-col justify-center px-5 py-2 pt-48 sm:pt-36 sm:h-fit md:pt-36 md:h-fit lg:pt-36 lg:h-fit xl:pt-36 xl:h-fit overflow-hidden">
        <div className="text-white text-9xl sm:text-7xl md:text-7xl lg:text-8xl">
          Contact me
          <span className="ct-animate-blink text-inherit">_</span>
        </div>
        <div className=" w-full h-full text-4xl mt-8">
          <form
            id="contact-form"
            method="post"
            className="h-96 w-full sm:h-full md:h-full lg:h-full xl:h-full">
            <div className="my-form-content w-full flex items-center gap-4 h-full sm:scale-95 sm:flex-col md:scale-75 md:flex-col lg:scale-75 lg:flex-col xl:scale-75 xl:flex-col">
              <div className="my-form-col w-full flex flex-col gap-4">
                <div className="my-form-row flex gap-4 sm:flex-col md:flex-col lg:flex-col">
                  <div>
                    <input
                      className="rad p-5 bg-slate-900 text-white outline-none border border-slate-900 focus:border-white focus:placeholder:opacity-0 w-full"
                      required
                      placeholder="Name"
                      type="text"
                      id="fromName"
                      name="fromName"
                    />
                  </div>
                  <div>
                    <input
                      className="rad p-5 bg-slate-900 text-white outline-none border border-slate-900 focus:border-white focus:placeholder:opacity-0  w-full"
                      required
                      placeholder="E-mail"
                      type="email"
                      id="fromEmail"
                      name="fromEmail"
                    />
                  </div>
                  <div>
                    <input
                      className="rad p-5 bg-slate-900 text-white outline-none border border-slate-900 focus:border-white focus:placeholder:opacity-0 w-full"
                      required
                      placeholder="Subject"
                      type="text"
                      id="subject"
                      name="subject"
                    />
                  </div>
                </div>

                <div className="my-form-row">
                  <div>
                    <textarea
                      className="w-full h-72 rad p-10 resize-none bg-slate-900 text-white outline-none border border-slate-900 focus:border-white focus:placeholder:opacity-0"
                      required
                      placeholder="Message"
                      type="text"
                      id="message"
                      name="message"
                    />
                  </div>
                </div>
              </div>

              <div className="my-form-col bg-slate-600 rad h-full w-96 flex justify-center items-center hover:scale-95 overflow-hidden sm:w-full md:w-full lg:w-full xl:w-full sm:h-48 md:h-48 lg:h-48 xl:h-48">
                <button
                  id="sendButton"
                  type="submit"
                  className="w-full h-full send-btn">
                  <span>Send</span>
                  <div className="-translate-x-36 translate-y-48">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
