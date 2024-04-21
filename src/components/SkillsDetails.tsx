export const SkillsDetails = () => {
  return (
    <div className="mb-7">
      <h4 className="font-bold text-xl">Skills</h4>
      <hr className="border-gray-900 mb-2" />
      <div className="flex flex-col gap-1">
        <p className="font-normal">
          <span className="font-semibold text-gray-800">Backend:</span> C#, ASP.NET Core, Entity Framework Core{" "}
        </p>
        <p className="font-normal">
          <span className="font-semibold text-gray-800">Frontend:</span> HTML, CSS, JavaScript, TypeScript, React JS,
          Next JS, Ember JS
        </p>
        <p className="font-normal">
          <span className="font-semibold text-gray-800">Database:</span> SQL Server, Familiarity with PostgreSQL
        </p>
        <p className="font-normal">
          <span className="font-semibold text-gray-800">Cloud:</span> Azure App Service, Azure Devops
        </p>
        <p className="font-normal">
          <span className="font-semibold text-gray-800">Utilities:</span> Postman, JIRA, Confluence, Git, SourceTree,
          Winmerge
        </p>
      </div>
    </div>
  );
};
