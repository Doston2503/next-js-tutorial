"use client";
import React, {useEffect} from 'react';
import {useRouter} from 'next/navigation'

function NotFound(props) {
    const router=useRouter();
    console.log(router);

    function handleClick() {
        router.push('/')
    }

   /* useEffect(()=>{
       setInterval(()=>{
           router.push('/')
       },2000)
    },[]);*/

    return (
        <div className="container mt-5">
            <h1>404 | Page Not Found</h1>

            <button onClick={handleClick} className="btn btn-danger">
                Back to main page
            </button>
        </div>
    );
}

export default NotFound;