import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import ChosenFilePage from "./Pages/FilePage.jsx";
import Profile from "./Pages/Profile.jsx"
import MainPage from "./Pages/MainPage.jsx"
import React, { useState } from 'react'
// import { FileProvider } from "./FileContext";

export const ChosenFileContext = React.createContext()

function App() {
  const [chosenFile, setChosenFile] = useState()

  return (
    <BrowserRouter>
      <ChosenFileContext.Provider value={{ chosenFile, setChosenFile }}>
        <Routes>
          <Route exact path="/" Component={MainPage} />
          <Route exact path="/FilePage" Component={ChosenFilePage} />
          <Route exact path="/profile" Component={Profile} />
        </Routes>
      </ChosenFileContext.Provider>
    </BrowserRouter>

  )
}

export default App
