import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
    headingText: string;
  }

const Header: React.FC<HeaderProps> = ({ headingText }) => {

  const navigate = useNavigate();

    return (
      <div className="pmclr text-white pt-8 pb-6 pl-4 pr-4 shadow-md flex items-center">
        <button onClick={() => navigate('/')}><ArrowBackIcon className="text-white text-4xl mr-4" /></button>
        <h1 className="text-xl font-bold">{headingText}</h1>
      </div>
    );
  };
  
  export default Header;