import { useState, useRef, useEffect } from "react";
import './index.css'
import React from "react";
import Todoitems from "./todoList";

function Todo(){
    let count = 0;
    const [todos, setTodos] = useState([])
    const InputRef = useRef(null)

    const AddBtn = ()=>{
        setTodos([...todos, {
            no : count++,
            text : InputRef.current.value,
            display : ""
        }])
        InputRef.current.value = "";
        localStorage.setItem("todos_count",count);
    }
   useEffect(()=>{
    setTodos(JSON.parse(localStorage.getItem("todos")));
    count = localStorage.getItem("todos_count");
   },[])

    useEffect(()=>{
    setTimeout(()=>{
        console.log(todos);
        localStorage.setItem("todos",JSON.stringify(todos))
    },100)
    },[todos])
    return(
        <>
 <div className="mt-16 w-[700px] min-h-[732px] bg-white m-auto flex flex-col rounded-2xl text-black px-0 border-solid border-2 border-black overflow-scroll">
    <div className="mt-0 p-0 bg-neutral-500 rounded-2xl">
    <div className="sticky text-blue-950 text-5xl pt-10 font-mono font-semibold inline-block ml-48">Todo-Lists</div>
        <div className="font-bold text-lg py-20 text-center flex justify-center align-middle mt-5">
          <input type="text" className=" sticky rounded-full border-none outline-none w-96 h-12 bg-gray-300 pl-5" placeholder="Add Your Task"
          ref={InputRef}
          ></input>
            <div className="sticky bg-orange-400 rounded-full -ml-12 w-24 h-12 pt-2 cursor-pointer" 
                onClick={()=>{AddBtn()}}
                >ADD</div>
                </div>
            </div>
            <div>
              {
                todos.map((item,index)=>{
              return <Todoitems key={index}
              setTodos={setTodos} no={item.no} text={item.text} display={item.display}  />
                })
              }
            </div>
        </div>
        </>
    )
}
export default Todo;