// import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';


const Logs = () => {

    const [wattsArr, setwattsArr] = useState("");

    const getUserData = async () => {
        try {
            const res = await axios.get("http://localhost:9090/route/");
            // console.log(res);
            setwattsArr(res)
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserData()
    }, []);
    console.log(wattsArr)
    return (


        wattsArr.data?.map((data) => (
            <p>{data.watts}</p>
        ))
    )
}

export default Logs