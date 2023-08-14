import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ChosenFileContext } from '../App'
import RemoveAnswersBtn from '../RemoveAnswersBtn'
import PDFCover from '../PDFCover'


function ChosenFilePage() {
    let navigate = useNavigate();
    const { chosenFile } = useContext(ChosenFileContext);

    return (
        <>
            <div>
                Inside FilePage
            </div>

            <div>
                <PDFCover/>
            </div>
            <div>
                {/* Display the selected file's name if available */}
                {console.log(`::FilePage::  = `)}
                {console.log(chosenFile)}
                {<p>Selected File: {chosenFile?.name}</p>}
                <RemoveAnswersBtn/>
            </div>


        </>

    )
}

export default ChosenFilePage;