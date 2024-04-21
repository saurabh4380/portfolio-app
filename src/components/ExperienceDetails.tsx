import { GoOrganization } from "react-icons/go";
import { MdOutlineCalendarMonth } from "react-icons/md";

export const ExperienceDetails = () => {
  return (
    <div className="mb-7">
      <h4 className="font-bold text-xl">Work Experience</h4>
      <hr className="border-gray-900 mb-2" />
      <div className="mb-5">
        {/* Team Lead */}
        <div className="flex justify-between">
          <h5 className="font-bold text-lg">Team Lead</h5>
          <div className="flex items-center gap-1">
            <MdOutlineCalendarMonth />
            <p>April 2023 - Present</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <GoOrganization />
          <p>InfoZest Digital Solutions, Navi Mumbai </p>
        </div>

        <ul className="mt-3 mb-2 list-disc  flex flex-col gap-0.5 pl-8">
          <li>
            Leading a team of developers to create and apply a scalable architecture using ASP.NET Core and Next JS
          </li>
          <li>
            Offering technical guidance and mentoring to junior developers, conducting regular code reviews, and
            implementing best practices to uphold code quality and sustainability.
          </li>
          <li>
            Working closely with product managers and business analysts to collect requirements and translate them into
            technical specifications that align with project goals.
          </li>
          <li>
            Developed RESTful APIs for third-party system integration, utilizing frameworks like ASP.NET Core and Entity
            Framework.
          </li>
          <li>
            Developed and maintained a CI/CD pipeline using Azure Devops for the ASP.NET Core and Next JS applications.
          </li>
          <li>Helped in migrating ASP.NET APIs from the legacy ASP.NET Framework (v4.7.2) to ASP.NET Core (v8.0)</li>
        </ul>
        <p>
          <span className="font-semibold">Tech Used:</span> ASP.NET Core, React JS, Next JS, Redux, Tailwind CSS, SQL
          Server, Azure CI/CD, Azure AD B2C{" "}
        </p>
      </div>

      <div className="mb-5">
        {/* Module Lead */}
        <div className="flex justify-between">
          <h5 className="font-bold text-lg">Module Lead</h5>
          <div className="flex items-center gap-1">
            <MdOutlineCalendarMonth />
            <p>April 2022 - May 2023</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <GoOrganization />
          <p>InfoZest Digital Solutions, Navi Mumbai </p>
        </div>

        <ul className="mt-3 mb-2 list-disc  flex flex-col gap-0.5 pl-8">
          <li>
            Led a project to migrate Internal Business Process Tool from Jira Service Desk to HubSpot Service Hub.
            Worked with HubSpot CRM Tool to create Workflows and HubSpot Custom Code using JavaScript as programming
            language
          </li>
          <li>
            {" "}
            Designed and developed a WEB API application to integrate the existing suite of applications with HubSpot
            CRM.
          </li>
          <li>
            {" "}
            Developed standalone API applications to integrate with third party APIs to facilitate the business process
            by minimizing the manual steps/efforts.
          </li>
          <li>
            {" "}
            Rewrote an existing ASP.NET Core app using best practices and reduced the performance bottlenecks. This
            rewrite helped to increase the API response speed by 33%.
          </li>
        </ul>
        <p>
          <span className="font-semibold">Tech Used:</span> ASP.NET Core, HubSpot, Node JS, SQL Server{" "}
        </p>
      </div>
      <div className="mb-5">
        {/* Junior Software Engineer */}
        <div className="flex justify-between">
          <h5 className="font-bold text-lg">Junior Software Engineer</h5>
          <div className="flex items-center gap-1">
            <MdOutlineCalendarMonth />
            <p>March 2020 - April 2022</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <GoOrganization />
          <p>InfoZest Digital Solutions, Navi Mumbai </p>
        </div>

        <ul className="mt-3 mb-2 list-disc  flex flex-col gap-0.5 pl-8">
          <li>Worked on revamping the Billing Section of the Web App and integrated with a new Payment Provider.</li>
          <li>
            Worked on API changes to improve the calculation of the Sales Tax on the website by integrating with a
            third-party Tax Info provider.
          </li>
          <li>
            Worked on changes in the Jira Plugins (ScriptRunner) to facilitate the Internal Service Tickets using Groovy
            as the programming language.
          </li>
          <li>Worked on fixing the bugs in the production Web App by using Error Monitoringtools.</li>
          <li>
            Assisted on a project to transition from Telerik DataAccess to Entity Framework Core as an ORM in the
            application.
          </li>
          <li>
            Designed and developed Responsive User Interfaces using HTML, CSS and Ember JS as the frontend framework.
          </li>
          <li>Worked alongside senior engineers to analyze and address the SEO issues on the website.</li>
          <li>
            Involved in writing Unit tests and E2E Integration tests (server side). Also assisted in Testing of the apps
            till the JIRA closure.
          </li>
        </ul>
        <p>
          <span className="font-semibold">Tech Used:</span> ASP.NET Web API2, EF Core, SQL Server, Ember JS, HTML, CSS,
          jQuery, Jira ScriptRunner{" "}
        </p>
      </div>
    </div>
  );
};
