import React, { useEffect, useRef, useState } from "react";
import wrong from './assets/wrong.png';

const Todoitems = ({setTodos,no,text,display})=>{
    
    // const lineRef = useRef(null);
//    const [linecheck, setlineCheck] = useState("none")
//    const labelRef = useRef();
//    const [state, setState] = useState({ labelChecked: false });

//    const handleClick = (event) => {
//     labelRef.current = event.target;
//     if (state.labelChecked === false) {
//       labelRef.current.style.textDecorationLine = 'line-through';
//     } else {
//       labelRef.current.style.textDecorationLine = 'none';
//     }
//     setState({ labelChecked: !state.labelChecked });
//   };

    const toggle = (no)=>{
        let data = JSON.parse(localStorage.getItem("todos"));
        for(let i = 0;i< data.length;i++){
            if(data[i].no===no){
                if(data[i].display===""){
                    data[i].display="line-through"
                }
                else{ 
                    data[i].display=""
                 }
                break;
            }
        }
        setTodos(data);
    }

 const DeleteTO = (no)=>{
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no!==no);
    setTodos(data)
 }

    return(
        <>
        <div className="">
            <div className="flex flex-row justify-between border-solid border-black w-auto h-14 text-center bg-blue-300 text-wrap "
            
            >
            <input 
             onClick={()=>toggle(no)}
                className="w-6 ml-5"
                type="checkbox"
                // onChange={handleClick}
                ></input>
                <div id="todo_text" 
                
                // ref={labelRef}
                className={`w-[400px] font-semibold text-2xl inline-block overflow-x-clip ${display}`}>{text}</div>
               
            </div>
            <img src={wrong} className="w-5 h-5 mr-4 mt-4 hover:scale-150"
            onClick={()=>DeleteTO(no)}
            ></img>
        </div>
        </>
    )
}
export default Todoitems