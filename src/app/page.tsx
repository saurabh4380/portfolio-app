import { ContactDetails } from '../components/ContactDetails';
import { EducationDetails } from '../components/EducationDetails';
import { ExperienceDetails } from '../components/ExperienceDetails';
import { SkillsDetails } from '../components/SkillsDetails';
import { StrengthsDetails } from '../components/StrengthsDetails';

export default function Home() {
  return (
    <main className="container p-4">
      <ContactDetails />
      <div className='mb-7'>
        <h4 className='font-bold text-xl'>Summary</h4>
        <hr className="border-gray-900 mb-2"/>
        <p>
          Software Engineer with 4+ years of experience in Full Stack Web Development with ASP.NET Core, React JS and
          Cloud technologies like Azure.{' '}
        </p>
      </div>
      <ExperienceDetails />

      <SkillsDetails />

      <EducationDetails />

      <StrengthsDetails strengths={['Willingness to Learn ', 'Team Work', 'Optimistic', 'Active Listening']} />
    </main>
  );
}
