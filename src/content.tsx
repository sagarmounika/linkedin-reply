import React, { useEffect, useState } from 'react';
import { FaMagic } from 'react-icons/fa'; 
import ReactDOM from 'react-dom'; 
import Modal from './Modal';
import cssText from "data-text:~style.css"
export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}
const PlasmoOverlay: React.FC = () => {
  const [iconAdded, setIconAdded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showBtnGrp, setShowBtnGrp] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
const dummyResponse = `Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.`;
  useEffect(() => {
    const iconClickHandler=()=>{
         setSuggestions([]);
    setShowBtnGrp(false)
    setShowModal(true)
    }
    const addIconToInputField = () => {
      const inputField = document.querySelector('.msg-form__contenteditable[role="textbox"]');
      if (inputField && !iconAdded) {
        const inputFieldElement = inputField as HTMLElement;
        inputFieldElement.style.position = 'relative';
        const icon = document.createElement('div');
        icon.style.position = 'absolute';
        icon.style.right = '5px';
        icon.style.bottom = '5px';
        icon.style.cursor = 'pointer';
        icon.style.zIndex = '9999';

        const magicIcon = document.createElement('div');
        magicIcon.style.borderRadius = '50%';
        magicIcon.style.width = '32px';
        magicIcon.style.height = '32px';
        magicIcon.style.backgroundColor = 'white';
        magicIcon.style.color="rgba(37, 99, 235, 1)"
        magicIcon.style.display="flex"
        magicIcon.style.justifyContent="center"
        magicIcon.style.alignItems="center"
        magicIcon.addEventListener("click",iconClickHandler)
        ReactDOM.render(<FaMagic  />, magicIcon);
        icon.appendChild(magicIcon);
        inputFieldElement.appendChild(icon);
        setIconAdded(true);

        inputFieldElement.addEventListener('focusout', () => {
          ReactDOM.unmountComponentAtNode(magicIcon);
          icon.remove();
          setIconAdded(false);
        });
      }
    };

    document.addEventListener('focusin', addIconToInputField);

    return () => {
      document.removeEventListener('focusin', addIconToInputField);
    };
  }, [iconAdded]);

  const handleGenerate = () => {
 
    
    setSuggestions([prompt, dummyResponse]);
    setShowBtnGrp(true)
    setPrompt("")
  };
const modifyPlaceholder = () => {
    const placeholder = document.querySelector('.msg-form__placeholder[data-placeholder="Write a message…"]');
    console.log(placeholder,"placeholder");
    
    if (placeholder) {
      const placeholderElement = placeholder as HTMLElement;
      placeholderElement.classList.remove('msg-form__placeholder');
    }
  };
const handleInsert = () => {
   const textBox = document.querySelector('.msg-form__contenteditable[role="textbox"] p');
  if (textBox) {
     modifyPlaceholder();
    const pElement = textBox as HTMLParagraphElement;
    pElement.innerText = dummyResponse;
    
  }
  setShowModal(false);
};


  return (
    <>

        <Modal open={showModal} setShowModal={setShowModal} setPrompt={setPrompt} prompt={prompt} handleGenerate={handleGenerate} suggestions={suggestions} handleInsert={handleInsert} showBtnGrp={showBtnGrp}/>
     
    </>
  );
};

export default PlasmoOverlay;
