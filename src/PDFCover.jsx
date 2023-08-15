import React, { useContext } from "react";
import { Page, Text, Image,Document, StyleSheet } from "@react-pdf/renderer";
import { ChosenFileContext } from './App'




function PDFCover() {
    const { chosenFile, setChosenFile } = useContext(ChosenFileContext);

    if (!chosenFile) {
        return null;
    }

    return (
        <div className="pdf-cover">
            {/* {console.log(`::PDFCover::  = `)}
            {console.log(chosenFile)}
            <Document file={URL.createObjectURL(chosenFile)}>
                <Page pageNumber={1} />
            </Document> */}
        
        
        </div>
    )
}

export default PDFCover;