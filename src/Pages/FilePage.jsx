import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ChosenFileContext } from '../App'
import RemoveAnswersBtn from '../RemoveAnswersBtn'


function ChosenFilePage() {
    let navigate = useNavigate();
    const { chosenFile } = useContext(ChosenFileContext);

    return (
        <>
            <div>
                Inside FilePage
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