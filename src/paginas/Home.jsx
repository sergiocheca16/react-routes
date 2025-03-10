import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a mi Portafolio</h1>
      <p>Explora mis <Link to="/projects">proyectos</Link> y mi <Link to="/resume">currículum</Link>.</p>
    </div>
  );
};

export default Home;
