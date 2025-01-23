import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Todos from './Page/Todos';
import CompletedTodos from './Page/CompletedTodos';
import AddTask from './Page/AddTask';
import EditTask from './Page/EditTask';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Todos/>}/>
        <Route path={"/complete"} element={<CompletedTodos/>}/>
        <Route path={"/add"} element={<AddTask/>}/>
        <Route path={"/edit"} element={<EditTask/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;