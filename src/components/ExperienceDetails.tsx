import { GoOrganization } from "react-icons/go";
import { MdOutlineCalendarMonth } from "react-icons/md";

export const ExperienceDetails = () => {
  const teamLeadExpData = {
    role: "Team Lead",
    company: "InfoZest Digital Solutions, Navi Mumbai",
    startDate: "April 2023",
    responsibilties: [
      "Leading a team of developers to create and apply a scalable architecture using ASP.NET Core and Next JS.",
      "Offering technical guidance and mentoring to junior developers, conducting regular code reviews, and implementing best practices to uphold code quality and sustainability.",
      "Working closely with product managers and business analysts to collect requirements and translate them into technical specifications that align with project goals.",
      "Developed RESTful APIs for third-party system integration, utilizing frameworks like ASP.NET Core and Entity Framework.",
      "Developed and maintained a CI/CD pipeline using Azure Devops for the ASP.NET Core and Next JS applications.",
      "Helped in migrating Web APIs from the legacy ASP.NET Framework (v4.7.2) to ASP.NET Core (v8.0).",
    ],
    techUsed: "ASP.NET Core, Next JS, Redux, Tailwind CSS, SQL Server, Azure CI/CD, Azure AD B2C",
  };

  const moduleLeadExpData = {
    role: "Module Lead",
    company: "InfoZest Digital Solutions, Navi Mumbai",
    startDate: "April 2022",
    endDate: "March 2023",
    responsibilties: [
      "Worked alognside Project Managers to migrate Internal Business Process Tool from Jira Service Desk to HubSpot Service Hub.",
      "Worked with HubSpot CRM Tool to create Workflows and HubSpot Custom Code using JavaScript as programming language.",
      "Designed and developed a WEB API application to integrate the existing suite of applications with HubSpot CRM.",
      "Developed standalone API applications to integrate with third party APIs to facilitate the business process.",
      "Rewrote an existing ASP.NET Core app using best practices and reduced the performance bottlenecks which helped to increase the API response speed by 33%.",
    ],
    techUsed: "ASP.NET Core, HubSpot, Node JS, SQL Server",
  };

  const jrSoftwareEngExpData = {
    role: "Junior Software Engineer",
    company: "InfoZest Digital Solutions, Navi Mumbai",
    startDate: "March 2020",
    endDate: "March 2022",
    responsibilties: [
      "Worked on revamping the Billing Section of the Web App and integrating with a Payment Provider.",
      "Worked on API changes to improve the calculation of the Sales Tax on the website by integrating with a third-party Tax Info provider.",
      "Worked on changes in the Jira Plugins (ScriptRunner) to facilitate the Internal Service Tickets using Groovy " +
        "as the programming language.",
      "Worked on fixing the bugs in the production Web App by using Error Monitoring Tools.",
      "Assisted on a project to transition from Telerik DataAccess to Entity Framework Core as an ORM in the application.",
      "Designed and developed Responsive User Interfaces using HTML, CSS and Ember JS.",
      "Worked alongside senior engineers to analyze and address the SEO issues on the website.",
      "Involved in writing Unit tests and E2E Integration tests (server side). Also assisted in Testing of the apps " +
        "till the JIRA closure.",
    ],
    techUsed: "ASP.NET Web API 2, EF Core, SQL Server, Ember JS, HTML, CSS, jQuery, Jira ScriptRunner",
  };

  return (
    <div className="mb-7">
      <h4 className="font-bold text-xl">Work Experience</h4>
      <hr className="border-gray-900 mb-2" />

      <ExperienceItem {...teamLeadExpData} />

      <ExperienceItem {...moduleLeadExpData} />

      <ExperienceItem {...jrSoftwareEngExpData} />
    </div>
  );
};

type ExperienceItemProp = {
  role: string;
  company: string;
  startDate: string;
  endDate?: string;
  responsibilties: string[];
  techUsed?: string;
};

const ExperienceItem = ({ role, company, startDate, endDate, responsibilties, techUsed }: ExperienceItemProp) => {
  const CURRENT_WORKING_TEXT = "Present";

  return (
    <div className="mb-5">
      {/* Junior Software Engineer */}
      <div className="flex justify-between">
        <h5 className="font-bold text-lg">{role}</h5>
        <div className="flex items-center gap-1">
          <MdOutlineCalendarMonth />
          <p>
            {startDate} - {endDate ? endDate : CURRENT_WORKING_TEXT}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <GoOrganization />
        <p>{company}</p>
      </div>

      <ul className="mt-3 mb-2 list-disc  flex flex-col gap-0.5 pl-8">
        {responsibilties.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
      <p>
        <span className="font-semibold">Tech Used:</span> {techUsed}
      </p>
    </div>
  );
};
