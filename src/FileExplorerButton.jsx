import React, { useRef, useContext, useEffect } from 'react';
import "./style.css"
// import { useFileContext } from "./FileContext";
import { ChosenFileContext } from './App'
import { useNavigate } from "react-router-dom";


// FileExplorerButton is a component return JSX
function FileExplorerButton() {

    //  useRef - The useRef hook returns a mutable object with a current property that holds the DOM element.
    const fileInputRef = useRef(null);
    const { chosenFile, setChosenFile } = useContext(ChosenFileContext);
    const navigate = useNavigate(); // Initialize useNavigate

 

    const handleButtonClick = () => {
        fileInputRef.current.click(); // It triggers the click event on that element
        console.log("Button clicked!");
    };

    async function handleFileChange(event) {
        const selectedFile = event.target.files[0];
        console.log(":: handleFileChange:: Selected file = ", selectedFile);

        await setChosenFile(selectedFile);
        // setChosenFile(true); // Mark file as selected
    }

    
    const handleNavigate = () => {
        console.log(":: FileExplorerButton :: useEffect::");
        console.log("chosenFile updated:", chosenFile);
        if (chosenFile) {
            navigate("/filePage");
        }
    };

    // useEffect(callback, dependencies);
    // useEffect - This hook is checking if the chosenFile state is 'true'.
    //  is called after the component renders and updates
    useEffect(handleNavigate, [chosenFile, navigate]);

    return (
        <div className='FileButton'>
            <button onClick={handleButtonClick}>Open File Explorer</button>
            <input
                type="file"
                ref={fileInputRef}
                style={{
                    display: 'none',
                    // borderRadius: '0.25em',
                    // borderColor: 'hsl(200, 100%, 50%)',
                    // borderStyle: 'solid'
                }}
                onChange={handleFileChange}
            />
        </div>
    );
}

export default FileExplorerButton

/* Class component -  It was the primary way of creating components in React before the introduction of functional components*/
// class FileExplorerButton extends React.Component {
//     handleButtonClick = () => {
//         console.log("Button Clicked!");
//     };

//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleButtonClick}>Open File Explorer</button>
//             </div>
//         );
//     }
// }

