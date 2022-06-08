import React from "react"
import { Button, Grid } from "@mui/material"
import "./unauthorisedPage.css"

export default function UnauthorisedPage(){
return(
    <Grid className="gridUn"
    style={{minHeight:"100vh",color:"white",background:"black"}}
    >
        <div style={{paddingLeft:"35%",
        paddingTop:"10%"
        }}>
    <h1>Unauthorised page</h1>
    <h3>Error 401</h3>
    <Button variant="contained" href="/" >Cancel</Button>
    </div>
    </Grid>
)
}