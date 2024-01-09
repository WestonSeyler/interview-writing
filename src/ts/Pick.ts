interface Todo {
    title: string
    description: string
    completed: boolean
}
type MappedType<T, Keys extends keyof T> = {
    [Key in Keys]: T[Key];
}

type TodoPreview = MappedType<Todo, 'title' | 'completed'>

