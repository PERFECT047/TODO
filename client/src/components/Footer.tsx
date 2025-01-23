import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {

    const navigate = useNavigate();

    return(
        <div className="h-16 bg-white p-4 pl-10 pr-10 flex justify-around items-center shadow-lg">
            <button className="flex flex-col items-center text-gray-500" onClick={() => navigate('/')}>
                <i className="material-icons">list</i>
                <span>All</span>
            </button>
            <button className="flex flex-col items-center text-gray-500" onClick={() => navigate('/complete')}>
                <i className="material-icons">done</i>
                <span>Completed</span>
            </button>
        </div>
    )
};

export default Footer;