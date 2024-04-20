import { IoSchoolSharp } from "react-icons/io5";

export const EducationDetails = () => {
  return (
    <div className="mb-7">
      <h4 className="font-bold text-xl">Education</h4>
      <hr className="border-gray-900 mb-2" />{' '}
      <div className="flex flex-col gap-2">
        <div>
          <p className="font-semibold">B.E. (EXTC)</p>
          <p className="flex items-center gap-1"><IoSchoolSharp /><span>A. C. Patil College of Engineering, Kharghar</span></p>
          <p>2015 - 2019</p>
        </div>
        <div>
          <p className="font-semibold">HSC</p>
          <p className="flex items-center gap-1"><IoSchoolSharp /><span>Karmaveer Bhaurao Patil College, Vashi</span></p>
          <p>2015</p>
        </div>
        <div>
          <p className="font-semibold">SSC</p>
          <p className="flex items-center gap-1"><IoSchoolSharp /><span>Navi Mumbai High School, Vashi</span></p>
          <p>2013</p>
        </div>
      </div>
    </div>
  );
};
