import { ContactDetails } from "../components/ContactDetails";
import { EducationDetails } from "../components/EducationDetails";
import { ExperienceDetails } from "../components/ExperienceDetails";
import { SkillsDetails } from "../components/SkillsDetails";
import { StrengthsDetails } from "../components/StrengthsDetails";
import { TfiDownload } from "react-icons/tfi";

export default function Home() {
  return (
    <main className="container p-4">
      <ContactDetails />
      <div className="mb-7">
        <h4 className="font-bold text-xl">Summary</h4>
        <hr className="border-gray-900 mb-2" />
        <p className="mb-2">
          Software Engineer with 4+ years of experience in Full Stack Web Development with ASP.NET Core, React JS and
          Cloud technologies like Azure.
        </p>

        <button className="noprint text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
        <a href="cv.pdf" download="cv" className="flex items-center gap-1"><TfiDownload/> <span>Resume</span></a>
        </button>
      </div>

      <ExperienceDetails />

      <SkillsDetails />

      <EducationDetails />

      <StrengthsDetails strengths={["Willingness to Learn ", "Team Work", "Optimistic", "Active Listening"]} />
    </main>
  );
}
