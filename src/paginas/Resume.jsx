import { studies, experiences } from '../data/resume';

const Resume = () => {
  return (
    <div>
      <h1>Currículum</h1>
      
      <h2>Experiencia Laboral</h2>
      <ul>
        {experiences.map((exp) => (
          <li key={exp.id}>
            <h3>{exp.title} - {exp.company}</h3>
            <p>{exp.date}</p>
          </li>
        ))}
      </ul>
      
      <h2>Educación</h2>
      <ul>
        {studies.map((study) => (
          <li key={study.id}>
            <h3>{study.title} - {study.institution}</h3>
            <p>{study.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resume;

