export interface Todo {
    title: string,
    description: string,
    completed: boolean,
    _id: string,
    __v?: number
}

export interface TodoItems {
    title: string,
    description: string,
    completed: boolean,
    key: string
}

export interface TodoListProps {
    type: string;
}