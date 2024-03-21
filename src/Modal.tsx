import React from 'react';
import { PiPaperPlaneRight } from "react-icons/pi";
import { FaArrowDown } from "react-icons/fa";
import { HiOutlineRefresh } from "react-icons/hi";
interface ModalProps {
   open: boolean;
   showBtnGrp: boolean;
  setShowModal: (show: boolean) => void;
  setPrompt: (prompt: string) => void; 
  handleInsert: () => void; 
  prompt: string;
  handleGenerate: () => void;
  suggestions:string[]
}
 


const Modal: React.FC<ModalProps> = ({ open ,setShowModal, setPrompt, prompt,handleGenerate,suggestions,handleInsert,showBtnGrp}) => {
  return (
    <>
      {open ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-xl">
           
            <div className="w-full  mx-auto max-w-3xl relative  rounded-lg bg-gray-50 shadow-[0px_4px_6px_-4px_rgba(0,_0,_0,_0.1),_0px_10px_15px_-3px_rgba(0,_0,_0,_0.1)] flex flex-col items-end justify-start p-4 box-border tracking-[normal]">
                 {suggestions.map((suggestion, index) => (
        <div key={index} className="chat-display">
          <div className={index? "reply":"prompt"}>{suggestion}</div>
      
        
        </div>
      ))}
      <div className="self-stretch rounded-numbers-12 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.06)_inset] flex flex-row items-start justify-start gap-[4px] max-w-full">
    
        <div className="flex-1 rounded-lg bg-white box-border overflow-hidden flex flex-row items-start justify-start p-2 max-w-full border-[1px] border-solid border-colors-gray-200">
          <input
            className="w-full [border:none] [outline:none] font-medium   bg-[transparent] p-2 flex-1 relative text-colors-gray-300 text-left flex items-center min-w-[250px] max-w-full p-0 "
            placeholder="Your prompt"
            value={prompt} onChange={(e)=>setPrompt(e.target.value)}
            type="text"
          />
        </div>
      </div>
         <div className="flex items-center ">{showBtnGrp? 
                  <>
                  
      <button onClick={() => handleInsert()} className="cursor-pointer  p-3 mt-4 border-2 border-colors-gray-500 rounded-lg overflow-hidden flex flex-row items-center justify-center gap-[5px]  font-semibold text-xl  mr-2">
         <div className=" flex flex-col items-center justify-center box-border  font-semibold ">
        <FaArrowDown className="font-semibold "/>
        </div>
        <div className=" font-semibold " >
          Insert
        </div>
     
        </button>
      <button className="cursor-pointer border-2 border-bg-blue-500 p-3 mt-4 bg-blue-500 rounded-lg overflow-hidden flex flex-row items-center justify-center gap-[5px] text-xl" >
        <div className=" flex flex-col items-center justify-center box-border text-white font-semibold ">
       <HiOutlineRefresh className="font-semibold "/>
        </div>
        <div className=" font-semibold  text-white " >
          Regenerate
        </div>
      </button>
      
      </>:
          <button className="cursor-pointer [border:none] p-3 mt-4 bg-blue-500 rounded-lg overflow-hidden flex flex-row items-center justify-center gap-[5px]" onClick={() => handleGenerate()}>
        <div className=" flex flex-col items-center justify-center box-border text-white font-semibold ">
       <PiPaperPlaneRight className="font-semibold "/>
        </div>
        <div className=" font-semibold  text-white " >
          Generate
        </div>
      </button>}
          </div>
 
    </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;