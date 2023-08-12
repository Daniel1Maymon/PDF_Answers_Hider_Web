import React, { useRef } from 'react';
import "./style.css"

// FileExplorerButton is a component return JSX
function FileExplorerButton() {
    console.log("Component function executed");

    //  The useRef hook returns a mutable object with a current property that holds the DOM element.
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click(); // It triggers the click event on that element
        console.log("Button clicked!");
    };

    /* An equivalent writing format*/
    // function handleButtonClick() {
    //     fileInputRef.current.click();
    //     console.log("Button clicked!");
    // }

    function handleFileChange(event) {
        console.log("Inside handleFileChange");
        const selectedFile = event.target.files[0];
        console.log('Selected file:', selectedFile);
        // You can perform actions with the selected file here

      
    }

    return (
        <div className='FileButton'>
            <button onClick={handleButtonClick}>Open File Explorer</button>
            <input
                type="file"
                ref={fileInputRef}
                // style={{ display: 'none' }}
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

export default FileExplorerButton