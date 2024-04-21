import { IoSchoolSharp } from "react-icons/io5";

export const EducationDetails = () => {
  const educationData = [
    {
      education: "B.E. EXTC",
      collegeName: "A. C. Patil College of Engineering, Kharghar",
      yearOfPassing: "2019",
    },
    {
      education: "HSC",
      collegeName: "Karmaveer Bhaurao Patil College, Vashi",
      yearOfPassing: "2015",
    },
    {
      education: "SSC",
      collegeName: "Navi Mumbai High School, Vashi",
      yearOfPassing: "2013",
    },
  ];
  return (
    <div className="mb-7">
      <h4 className="font-bold text-xl">Education</h4>
      <hr className="border-gray-900 mb-2" />{" "}
      <div className="flex flex-col gap-2">
        {educationData.map((edu) => {
          return (
            <div key={edu.education}>
              <p className="font-semibold">{edu.education}</p>
              <p className="flex items-center gap-1">
                <IoSchoolSharp />
                <span>{edu.collegeName}</span>
              </p>
              <p>{edu.yearOfPassing}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
