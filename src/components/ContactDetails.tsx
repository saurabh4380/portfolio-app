import { MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const ContactDetails = () => {
  return (
    <div className="mb-7">
      <h3 className="font-bold text-2xl mb-3">Saurabh Umadikar</h3>
      <div className="flex flex-col gap-0.5">
        <div>
          <a
            href="https://maps.app.goo.gl/RucWD3fk3Ytc846CA"
            target="_blank"
            className="flex items-center hover:underline hover:text-blue-500"
          >
            <MdLocationOn />
            <span>Vashi, Navi Mumbai</span>
          </a>
        </div>
        <div>
          <a
            href="tel:+919930359060"
            target="_blank"
            className="flex items-center gap-1 hover:underline hover:text-blue-500"
          >
            <BsTelephoneFill />
            <span>9930359060</span>
          </a>
        </div>
        <div>
          <a
            href="mailto:saurabhumadikar@gmail.com"
            target="_blank"
            className="flex items-center gap-1 hover:underline hover:text-blue-500"
          >
            <MdMail />
            <span>saurabhumadikar@gmail.com</span>
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/saurabh-umadikar-694341244"
            target="_blank"
            className="flex items-center gap-1 hover:underline hover:text-blue-500"
          >
            <FaLinkedin /> <span>saurabh-umadikar-694341244</span>
          </a>
        </div>
        <div>
          <a
            href="https://github.com/saurabh4380"
            target="_blank"
            className="flex items-center gap-1 hover:underline hover:text-blue-500"
          >
            {" "}
            <FaGithub />
            <span>saurabh4380</span>
          </a>
        </div>
      </div>
    </div>
  );
};
