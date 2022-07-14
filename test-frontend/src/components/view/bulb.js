import React from 'react'
import LightbulbIcon from '@mui/icons-material/Lightbulb';
const LightBulb = () => {
    return (
        <div className='container'>
            <div className="row justify-content-center text-center">
                <div className="col-lg-1 m-1">
                    <LightbulbIcon style={{ width: "100px", height: "50px", color: "orange" }} />
                </div>
                <div className="col-lg-1 m-1">
                    <LightbulbIcon style={{ width: "100px", height: "50px", color: "blue" }} />
                </div>
                <div className="col-lg-1 m-1">
                    <LightbulbIcon style={{ width: "100px", height: "50px", color: "red" }} />
                </div>
            </div>
        </div>
    )
}
export default LightBulb