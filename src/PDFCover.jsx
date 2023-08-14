import React, { useContext } from "react";
import { Document, Page } from "react-pdf";
import { ChosenFileContext } from './App'

function PDFCover() {
    const { chosenFile, setChosenFile } = useContext(ChosenFileContext);

    if (!chosenFile) {
        return null;
    }

    return (
        <div className="pdf-cover">
            {console.log(`::PDFCover::  = `)}
            {console.log(chosenFile)}
            <Document file={URL.createObjectURL(chosenFile)}>
                <Page pageNumber={1} />
            </Document>
        </div>
    )
}

export default PDFCover;