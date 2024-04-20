export const StrengthsDetails = ({ strengths }: { strengths: string[] }) => {
  return (
    <div className="mb-7">
      <h4 className="font-bold text-xl">Strengths</h4>
      <hr className="border-gray-900 mb-2" />

      <ul className="mt-3 mb-2 list-disc  flex flex-col gap-0.5 pl-8">
        {strengths.map((strength) => (
          <li key={strength}>{strength}</li>
        ))}
      </ul>
    </div>
  );
};
