"use client";
import { useState } from "react";

interface Todo{
    id:number;
    text:string;
    complete:boolean;
}
const Todolist = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState<Todo[]>([]);
    //add items
    const addTodo = () => {
        if(inputValue.trim()=== "") return;
        setTodos([
            ...todos,
            {
                id: Date.now(),
                text:inputValue,
                complete:false
            }
        ]);
        setInputValue("");
    };
    //add values
    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) => 
                todo.id === id ? {...todo, complete: !todo.complete} : todo
            )
        );    
        
    }
    //delete item
    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-gray-800 text-white py-4">
            <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold underline text-center">Todo List made by Rizwana</h1>
        
            <p>{" "}Manage your tasks</p>
            </div>
            </header>

            <main className="flex-grow flex items-center justify-center"> 
                <div className="max-w-fit mx-auto p-4 bg-sky-300 rounded-lg selection:shadow-md">
                    <div className="mb-4">
                        <div className="flex">
             <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
               className="p-2 border border-gray-300 rounded-md text-black w-1/2 mx-auto mt-4"
               placeholder="Add a new task ..."/>
                <button onClick={addTodo} className=" h-8 w-24 mt-6 rounded font-bold bg-red-400 items-right border-2 border-red-950"> Add Task</button>
                </div>
                </div>
              <ul className="space-y-2">
                {todos.map((todo) => (
                    <li key={todo.id}
                    className={`flex items-center justify-between p-2 border border-slate-400 rounded-lg ${todo.complete ? "bg-lime-400" : "backdrop:bg-sky-300"}`}>
                    <span>{todo.text}</span>
                    <div>
                    <button onClick={() => toggleTodo(todo.id)} className=" mt-6 px-2 py-1 text-sm bg-yellow-400 rounded-lg border-2 border-red-950"> {todo.complete ? "Undo" : "Complete"}</button>
                    <button onClick={() => deleteTodo(todo.id)} className="px-2 py-1 mt-6 rounded-lg text-sm bg-red-400 items-right border-2 border-red-950"> Delete</button>
                    </div>
                    </li>
                ))}
              </ul>
              </div>
            </main>
            </div>
    )
}
    export default Todolist;
    
