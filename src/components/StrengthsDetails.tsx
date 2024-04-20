export const StrengthsDetails = ({ strengths }: { strengths: string[] }) => {
  return (
    <>
      <h3>Strengths</h3>
      <ul>
        {strengths.map((strength) => (
          <li key={strength}>{strength}</li>
        ))}
      </ul>
    </>
  );
};
