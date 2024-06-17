import React from "react";
import { Link } from 'react-router-dom'

function Home() {
    
    return (
        <div>
           <Link to ="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Form A</Link>
           <Link to ="/signup1" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Form B</Link>
        </div>
    )
}

export default Home