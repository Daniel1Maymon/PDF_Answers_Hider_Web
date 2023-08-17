import { ChosenFileContext } from './App'
import React, { useContext } from "react";

function RemoveAnswersBtn() {
    const { chosenFile } = useContext(ChosenFileContext);

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
                window.open(url, "_blank");
                console.log("blob = ");
                console.log(blob);
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