
import React from "react";
import Button from '@mui/material/Button';
import { Outlet, Link } from "react-router-dom";
import "./Home.css";
import { Typography } from "@material-ui/core";
export default function Home() {
        return (
        <div>

                <Typography variant="h3" className="DLHome">Home page</Typography>

                <br/>
                <div><Link to='/add' className="HButton">
                        <Button className="Hbgbutton"  sx={{ fontSize: 20, }}
                                variant="contained">Add Employee</Button>
                </Link></div>
                
                <br/>
                <br/>
                <div><Link to='/details' className="HButton">
                        <Button className="Hbgbutton"  sx={{ fontSize: 20, }}
                                variant="contained">Employee Details</Button>
                </Link></div>
                
                <br/>
                <br/>
                <div><Link to='/leave' className="HButton">
                        <Button className="Hbgbutton"  sx={{ fontSize: 20, }}
                                variant="contained">Apply Leave</Button>
                </Link></div>
                
                <br/>
                <br/>
                <div><Link to='/leavedetails' className="HButton" >
                        <Button className="Hbgbutton"  sx={{ fontSize: 20, }}
                                variant="contained">Leave Details</Button>
                </Link></div>
                
                <Outlet/>
                
        </div>
        )
}