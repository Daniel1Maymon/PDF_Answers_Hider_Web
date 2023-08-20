import { useContext, useEffect } from "react"
import { ChosenFileContext } from "../App"

function DownloadFixFilePage() {
    console.log(":: DownloadFixFilePage is render ::");
    const { downloadBlob, chosenFile } = useContext(ChosenFileContext)

    const createDownloadBtn = () => {
        console.log(":: Execute createDownloadBtn() :: ");
        // Create a URL for the Blob
        const url = URL.createObjectURL(downloadBlob);

        // Set the filename to chosenFile's name
        const downloadName = chosenFile.name + '_FIXED.pdf';

        // Create a button to download the Blob
        const downloadButton = document.createElement("a");
        downloadButton.href = url;
        downloadButton.download = downloadName;
        downloadButton.textContent = "Download PDF";

        // Append the button to the DOM
        const downloadBtnElement = document.getElementById("download-container")
        downloadBtnElement.appendChild(downloadButton);
    }

    console.log("::Execute useEffect(createDownloadBtn, []) :: ");
    useEffect(createDownloadBtn, []);

    return (
        <>
            <div id="download-container"></div>
        </>
    )
}

export default DownloadFixFilePage