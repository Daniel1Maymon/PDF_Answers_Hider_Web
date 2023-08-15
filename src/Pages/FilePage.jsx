import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ChosenFileContext } from '../App'
import RemoveAnswersBtn from '../RemoveAnswersBtn'
import PDFCover from '../PDFCover'
import PDFFile from "../components/PDFFile.jsx";


function ChosenFilePage() {
    let navigate = useNavigate();
    const { chosenFile } = useContext(ChosenFileContext);

    return (
        <>
            <div>
                {/* Inside FilePage */}
                {<p>File Name: {chosenFile?.name}</p>}
            </div>
            <PDFFile />
            <div>
                {/* Display the selected file's name if available */}
                {console.log(`::FilePage::  = `)}
                {console.log(chosenFile)}
                
                <PDFCover />
                
                <RemoveAnswersBtn/>
            </div>


        </>

    )
}

export default ChosenFilePage;