import { useNavigate } from 'react-router-dom';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const TodoItem: React.FC = () => {
  const navigate = useNavigate();

  const deleteHandler = () => {

  }

  const completeHandler = () => {
    
  }

  return (
    <div className="mt-4 mb-4 bg-white shadow-md h-auto rounded-3xl p-4 flex items-center justify-between w-full overflow-hidden">

      <div className="flex flex-col justify-center">
        <div className="pmhclr text-xl font-semibold mb-1">TODO TITLE</div>
        <div className="text-gray-500">TODO SUB TITLE</div>
      </div>

      <div className="flex items-center space-x-8">
        <button onClick={() => navigate('/edit')}><ModeEditIcon className="pmhclr cursor-pointer hover:scale-110 transition-transform" /></button>
        <button onClick={deleteHandler}><DeleteIcon className="pmhclr cursor-pointer hover:scale-110 transition-transform" /></button>
        <button onClick={completeHandler}><CheckCircleOutlineIcon className="pmhclr cursor-pointer hover:scale-110 transition-transform" /></button>
      </div>
    </div>
  );
};

export default TodoItem;
