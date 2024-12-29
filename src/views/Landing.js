
import { Link } from 'react-router-dom';
import '../styles/Landing.css';
import useRedirection from '../hooks/useRedirection'

const Landing = () => {

  useRedirection("/books", 3000);
 
  return (
    <div className="landing">
       <Link to={"/"}>
      <h1>Bienvenidos a Relatos de Papel</h1>
      <p>Donde encontraras un universo de posibilidades.</p>
      </Link>
    </div>
  );
};

export default Landing;