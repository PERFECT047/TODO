const TodoItem: React.FC = () => {
    return(
        <div className="mt-4 mb-4 bg-white shadow-md h-30 rounded-3xl p-4 flex flex-col w-full items-start justify-center overflow-hidden">
            <div className="mb-2 text-xl">TODO TITLE</div>
            <div>TODO SUB TITLE</div>
        </div>
    )
}

export default TodoItem