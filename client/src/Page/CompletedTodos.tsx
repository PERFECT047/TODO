import Header from "../components/Header";
import TodoList from "../components/TodoList"

const CompletedTodos: React.FC = () => {
  return (
    <div className="flex justify-center bg-gray-300 h-screen w-screen">
      <div className="flex flex-col h-full min-w-xl rounded-md bg-white overflow-hidden relative">
        <Header headingText="Completed Task"/>
        <main className="flex-grow overflow-y-auto">
          <TodoList type="completed"/>
        </main>
      </div>
    </div>
  )
};

export default CompletedTodos;