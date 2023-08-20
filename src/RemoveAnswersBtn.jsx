import { ChosenFileContext } from './App'
import React, { useContext, useEffect } from "react";
import ReactDOM from 'react-dom/client'
import { useNavigate } from "react-router-dom";

export const FileToDownloadContext = React.createContext()

function RemoveAnswersBtn() {
    console.log(":: RemoveAnswersBtn is render ::");
    
    const navigate = useNavigate();
    const { chosenFile, setDownloadBlob } = useContext(ChosenFileContext);

    

    const handleRemoveAnswers = async () => {
        const formData = new FormData();


        var dataKey = "pdfFile"
        var dataValue = chosenFile
        formData.append(dataKey, dataValue);

        fetch("http://127.0.0.1:3001/getPdf",
            {
                method: "POST",
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                return response.blob(); // Get the response as a Blob
            })
            .then(blob => {
                // Create a URL for the Blob and open it in a new window
                const url = URL.createObjectURL(blob);
                // window.open(url, "_blank");
                console.log("blob = ");
                console.log(blob);


                // Set the filename to chosenFile's name
                // const downloadName = chosenFile.name + '_FIXED.pdf';

                // Set the downloadBlob state
                setDownloadBlob(blob);

                navigate("/download");
                // Create a button to download the Blob
                // const downloadButton = document.createElement("a");
                // downloadButton.href = url;
                // downloadButton.download = downloadName;
                // downloadButton.textContent = "Download PDF";
                
                // Append the button to the DOM
                // const downloadBtnElement = document.getElementById("download-container")

                // downloadBtnElement.appendChild(downloadButton);
            })
            .catch(error => {
                console.error('An error occurred:', error.message);
            })
    };



    return (
        <>
            <button
                onClick={handleRemoveAnswers}>
                Delete Marked Answers From The File
            </button>

        </>
    )
}

export default RemoveAnswersBtn;