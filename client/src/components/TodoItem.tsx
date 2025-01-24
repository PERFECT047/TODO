import { useNavigate } from 'react-router-dom';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { TodoItems } from '../models/models';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { completeTodo, deleteTodo } from '../features/todo/todoSlice';



const TodoItem: React.FC<TodoItems> = ({ title, description, key, completed }) => {
  console.log(key, completed);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL; 

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const deleteHandler = async() => {
    try{
      await axios.delete(`${BACKEND_URL}${key}`);
      dispatch(deleteTodo(key));
    }
    catch(err){
      console.log(err);
    }
    
  }

  const completeHandler = async() => {
    try{
      const todo = {
        _id: key,
        title: title,
        description: description,
        completed: true
      }
      await axios.put(`${BACKEND_URL}${key}`);
      dispatch(completeTodo(todo));
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div className="mt-4 mb-4 bg-white shadow-md h-auto rounded-3xl p-4 flex items-center justify-between w-full overflow-hidden">

      <div className="flex flex-col justify-center">
        <div className="pmhclr text-xl font-semibold mb-1">{title}</div>
        <div className="text-gray-500">{description}</div>
      </div>

      <div className="flex items-center space-x-8">
        <button onClick={() => navigate('/edit')}><ModeEditIcon className="pmhclr cursor-pointer hover:scale-110 transition-transform" /></button>
        <button onClick={deleteHandler}><DeleteIcon className="pmhclr cursor-pointer hover:scale-110 transition-transform" /></button>
        <button onClick={completeHandler}><CheckCircleOutlineIcon className={"pmhclr cursor-pointer hover:scale-110 transition-transform" + (completed ? " cursor-not-allowed" : " ")} /></button>
      </div>
    </div>
  );
};

export default TodoItem;
