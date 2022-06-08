import React from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import "./ApplyLeave.css"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ApplyLeave(){
    let [errorMessage,setErrorMessage]=useState("")
   
    let[date_of_apply,setDate_of_apply]=useState("")
    let[qci_id,setQci_id]=useState("")
    let[leave_type,setLeave_type]=useState("")
    let[date_from,setDate_from]=useState("")
    let[date_to,setDate_to]=useState("")
    let[days,setDays]=useState("")
    let[leave_reason,setLeave_reason]=useState("")

    let HandleChangeDate_of_apply=(b)=>{
        setDate_of_apply(b.target.value)
    }
    let HandleChangeQci_id=(c)=>{
        setQci_id(c.target.value)
    }
    let HandleChangeLeave_type=(d)=>{
        setLeave_type(d.target.value)
    }
    let HandleChangeDate_from=(e)=>{
        setDate_from(e.target.value)
    }
    let HandleChangeDate_to=(f)=>{
        setDate_to(f.target.value)
    }
    let HandleChangeDays=(g)=>{
        setDays(g.target.value)
    }
    let HandleChangeLeave_reason=(h)=>{
        setLeave_reason(h.target.value)
    }


    let SaveData=()=>{
var arr=date_of_apply.split("-")
var apply_date=arr[2]+"/"+arr[1]+"/"+arr[0]

 arr=date_from.split("-")
var from_date=arr[2]+"/"+arr[1]+"/"+arr[0]

 arr=date_to.split("-")
var to_date=arr[2]+"/"+arr[1]+"/"+arr[0]

        fetch("http://127.0.0.1:5000/lms/applyLeave",{
            method:"post", headers:{
                "authorization":localStorage.getItem("token")
            },
            body:JSON.stringify({
                'date_of_apply' : apply_date,
                'qci_id' : qci_id,
                'leave_type' : leave_type,
                'date_from' : from_date,    
                'date_to': to_date ,
                'days' : days,
                'leave_reason' : leave_reason
            })
        })
        .then(data=>data.json())
         .then(data1=>{
             console.log(data1)
             if(data1.success)
             {
                 setErrorMessage(data1.message)
             }
             else{
                 setErrorMessage("Input error")
             }
        })
    }
    
    return(
        <div>
            
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
                <Typography variant="h3" >Add Details</Typography>
                 <table>
                     <tbody>
                         
                         <tr>
                             <td>
                             <TextField label="Qci-id" onChange={HandleChangeQci_id} type="number" value={qci_id} varient="outlined"/>
                             </td>
                         </tr>

                         <tr>
                             <td className="tdLe"><label className="labelLe">Date</label>
                              <TextField type="date" value={date_of_apply} onChange={HandleChangeDate_of_apply} varient="outlined"/>
                             </td>
                         </tr>
                         
                        
                         
                         <tr>
                             <td>
                             <TextField type="text" label="Leave Type" onChange={HandleChangeLeave_type} value={leave_type} varient="outlined"/>
                             </td>
                         </tr>
                         
                         <tr>
                             <td className="tdLe">
                             <label className="labelLe">from</label><TextField type="date" onChange={HandleChangeDate_from} value={date_from}  varient="outlined"/>
                             </td>
                         </tr>
                         
                         <tr>
                             <td className="tdLe">
                             <label className="labelLe">till</label><TextField type="date" value={date_to} onChange={HandleChangeDate_to} varient="outlined"/>
                             </td>
                         </tr>
                         
                         <tr>
                             <td> 
                             <TextField type="number" onChange={HandleChangeDays} label="Days" value={days} varient="outlined"/>
                             </td>
                         </tr>
                     <tr>
                         <td>
                         <TextField type="text" label="Reason" onChange={HandleChangeLeave_reason} value={leave_reason} varient="outlined"/>
                         </td>
                     </tr>
                     
                     <tr><td>{errorMessage}</td></tr>                     
                      </tbody>
                      </table>
                      <Button color="primary" variant="contained"  onClick={SaveData}>Submit</Button>
                         <Link to='/home'>
                         <Button sx={{ fontSize: 15,}}
                          variant="contained">Cancel</Button> 
                          </Link>
            </Grid>

        </div>
    )
}