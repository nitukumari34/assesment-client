// import React, { useEffect } from "react";
// import { Outlet } from "react-router";
// import Navbar from "../../components/navbar/Navbar";



// function Home() {

//     return (
//         <>
//             <Navbar />
//               <div className="outlet" style={{ marginTop: "60px" }}>
//                 <Outlet />
//             </div>
//         </>
//     );
// }

// export default Home;



import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Brewery Review App</h1>
            <Link to="/search">Search Breweries</Link>
        </div>
    );
};

export default Home;





