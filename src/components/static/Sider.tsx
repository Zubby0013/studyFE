import { useState } from 'react';
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";

const Sider = () => {
    const [state,setState]= useState(false);

    const toggle =()=>{
        setState(!state);
    };
  return (
        <div className=' hidden md:block h-screen fixed'>
        {state? 
        <div className=' w-[250px]'>
            <div className=' transition-all duration-500'
            onClick={()=>{
                toggle();
            }}
            >
                <FaAngleLeft/> 
            </div>
        </div>
        : 
        <div className=' w-[70px]'
        onClick={()=>{
            toggle();
        }}
        >
             <FaAngleRight/>
        </div>
        }
        </div>
  )
}

export default Sider;