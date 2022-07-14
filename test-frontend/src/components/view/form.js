import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

import React from 'react'

const Form = () => {
    return (



        <div className='container' style={{ marginTop: '200px' }}>
            <div className="row justify-content-center text-center" >
                <div className="col-lg-4">
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField


                                label="Watt"

                            />
                            <TextField

                                id="outlined-error-helper-text"
                                label="Color"


                            />

                        </div>
                        <Link to="/">

                            <Button variant="contained" disableElevation>
                                Submit
                            </Button>
                        </Link>
                    </Box>
                </div>
            </div>
        </div>


    )
}

export default Form