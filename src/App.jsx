import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import React, { useState } from 'react'

import ChosenFilePage from './Pages/ChosenFilePage.jsx';
import MainPage from './Pages/MainPage.jsx';
import DownloadFixFilePage from './Pages/DownloadFixFilePage.jsx';

export const ChosenFileContext = React.createContext()

function App() {
  console.log(":: App is render ::");

  const [chosenFile, setChosenFile] = useState()
  const [downloadBlob, setDownloadBlob] = useState(null);

  return (
    <BrowserRouter>
      <ChosenFileContext.Provider value={{
        chosenFile,
        setChosenFile,
        downloadBlob,
        setDownloadBlob
      }}>
        <Routes>
          {/* <Route exact path="/" Component={MainPage} /> */}
          <Route path="/" element={<MainPage />} />
          {/* <Route exact path="/FilePage" Component={ChosenFilePage} /> */}
          <Route path="/FilePage" element={<ChosenFilePage />} />
          {/* <Route exact path="/download" Component={DownloadFixFilePage}></Route> */}
          <Route
            path="/download"
            element={
              <DownloadFixFilePage
                downloadBlob={downloadBlob}
              />
            }
          />

        </Routes>
      </ChosenFileContext.Provider>
    </BrowserRouter>

  )
}

export default App
