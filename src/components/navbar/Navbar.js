import React from 'react'
import './Navbar.scss';

import { useNavigate } from 'react-router-dom';
import { AiOutlineLogout } from "react-icons/ai";
import SearchComponent from '../search/SearchComponent';





function Navbar() {
    const navigate = useNavigate();


    function handleLogoutClicked() {

    }

    return (

        <div className='Navbar' >

            <div className="container">
                <h2 className="banner hover-link" onClick={() => navigate('/')}> Assignment</h2>
                <div className="right-side">
                    <div className="profile hover-link" >
                        <SearchComponent/>
                        
                    </div>

                    <div className="logout hover-link">
                        <AiOutlineLogout onClick={handleLogoutClicked} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar