import React, { useContext } from "react";
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { ChosenFileContext } from '../App'


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

function PDFFile() {
    const { chosenFile } = useContext(ChosenFileContext);

    return (
        <div className='chosen-pdf-cover'>
            {/* <Document className="pdf-document" file="/Daniel Maymon-Software_CV.pdf"> */}
            <Document className="pdf-document" file={chosenFile}>
                <Page className='react-pdf__Page' pageNumber={1} renderTextLayer={false}></Page>
                {/* <Page
                    scale={0.7}
                    pageNumber={1}
                /> */}
            </Document>
        </div>
    );
}

export default PDFFile;