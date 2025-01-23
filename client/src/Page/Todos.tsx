import AddButton from "../components/AddButton";
import Footer from "../components/Footer"
import TodoList from "../components/TodoList"
import TopBar from "../components/TopBar"

const Todos: React.FC = () => {
  return (
    <div className="flex justify-center bg-gray-300 h-screen w-screen">
      <div className="flex flex-col h-full min-w-xl rounded-md bg-white overflow-hidden relative">
        <TopBar />
        <main className="flex-grow overflow-y-auto">
          <TodoList />
        </main>
        <Footer />

        <AddButton/>
      </div>
    </div>
  )
};

export default Todos;