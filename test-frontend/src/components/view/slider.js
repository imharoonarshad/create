import * as React from 'react';
import Slider from '@mui/material/Slider';
import { useState } from "react";
import BasicTable from "./table";
import axios from 'axios';




const Discretelider = () => {
    let watts = [5, 10, 20]
    const [logsArray, setLogsArray] = useState([])
    const [watt, setWatt] = useState("");
    const getValue = (e) => {
        setWatt(e.target.value);
        setFrequency(watt);
    };
    const setFrequency = (watt) => {
        let minValue = 5;
        let logs = watts.map((i) => {
            return ((watt - minValue) / 10) * i
        })
        setLogsArray(logs)
        componentMount();

    };
    const componentMount = async () => {

        await axios.post('http://localhost:9090/route/', { logsArray })
    }

    
    return (
        <div className="container">
            <div className="row justify-content-center text-center">
                <div className="col-lg-4 card m-2">
                    <Slider
                        aria-label="Temperature"
                        defaultValue={5}
                        // getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={5}
                        marks
                        min={5}
                        max={20}
                        onChange={getValue}
                    />
                </div>
            </div>
            <div className="row justify-content-center text-center">

            </div>
            <div className="row justify-content-center text-center p-2">
                {/* <div className="col-lg-1 m-5">
          <DropDown/>
        </div> */}
                <div className="col-lg-4 m-3">
                    <BasicTable
                        watts={watts}
                        logsArray={logsArray}
                    />
                </div>
            </div>
        </div>
    );
};
export default Discretelider;
