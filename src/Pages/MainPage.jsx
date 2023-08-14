import React from "react";
import DescriptionComponent from '../DescriptionComponent.jsx'
import FileExplorerButton from '../FileExplorerButton.jsx'
import HeaderComponent from '../HeaderComponent.jsx'
import { useNavigate } from "react-router-dom";


function MainPage(){
    let navigate = useNavigate();


    return (
        <div className="app-container">
            <HeaderComponent />
            <DescriptionComponent />
            <FileExplorerButton />

            {
            /* <button onClick={() => {
                navigate("/FilePage")
            }}>Click for Login Page</button> */
            }
        </div>
    )
}

export default MainPage;