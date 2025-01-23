import TodoItem from "./TodoItem"

const TodoList: React.FC = () => {
    return(
        <div className="pmbgclr h-full w-full flex">
            <div className="p-4 flex flex-col w-full h-auto overflow-y-auto">

                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>

            </div>
        </div>
    )
}

export default TodoList