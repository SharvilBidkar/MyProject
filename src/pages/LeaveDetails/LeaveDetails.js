
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { CardContent, Typography } from "@material-ui/core";
import React from "react";
import { Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import "./LeaveDetails.css";

export default function LeaveDetails() {
    let [data, setData] = useState([])

    let ShowData = () => {
        fetch("http://127.0.0.1:5000/lms/application", {
            method: "get", headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
            .then(data => data.json())
            .then(data =>{
                console.log(data)
                setData(data.data)
            })
    }

    useEffect(() => { ShowData() }, [])

    let ApproveLeave=()=>{
        fetch("http://127.0.0.1:5000/lms/approveLeave",{
            method:"post", headers:{
                "Authorization": localStorage.getItem("token")
            }
        })
    }
    return (
        <div>

            <Typography variant="h3" className="LDHeader">Leave Details</Typography>
            <div>
            <Link to="/home" className="LDHome">
                <Button  variant="contained">Home</Button>
            </Link>
            </div>
            
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{
                    width: "700",
                    minHeight: '100vh',
                    paddingBottom: "10%"
                }}>
                {
                    data.map((q) => {
                        return (
                            <div>
                                <Card >
                                    <CardContent className="LDCard">
                                        Application ID<Typography color="white" gutterBottom>{q.application_id}</Typography>
                                        Qci Id<Typography varient="h4" color="white" gutterBottom>{q.qci_id}</Typography>
                                        Apply Date<Typography color="white" gutterBottom>{q.date_of_apply}</Typography>
                                        Leave Type<Typography color="white" gutterBottom>{q.leave_type}</Typography>
                                        From<Typography color="white" gutterBottom>{q.date_from}</Typography>
                                        Till<Typography color="white" gutterBottom>{q.date_to}</Typography>
                                        Days<Typography color="white" gutterBottom>{q.days}</Typography>
                                        Leave Reason<Typography color="white" gutterBottom>{q.leave_reason}</Typography>

                                        <Link to="/approve">
                                            <Button variant="contained" color="white">Approve</Button>
                                        </Link>

                                        <Link to="/decline">
                                            <Button variant="contained" color="white">Decline</Button>
                                        </Link>

                                    </CardContent>
                                </Card>
                                <br />
                            </div>
                        )
                    })
                }
            </Grid>
        </div>
    )
}
