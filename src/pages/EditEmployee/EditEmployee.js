import React from "react";
import { Grid, Input } from "@mui/material"
import { Button, FormControl, InputLabel, Typography } from "@material-ui/core";

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from "react";
import "./EditEmployee.css";
import {useLocation ,Outlet} from 'react-router-dom';



export default function EditEmployee() {


    let location = useLocation();
    console.log(location)
  let [name, useName] = useState(location.state.name)
  let [email, useEmail] = useState(location.state.email)
  let [board, useBoard] = useState(location.state.board)
  let [designation, useDesignation] = useState(location.state.designation)
  let [typeOfEmployee, useTypeOfEmployee] = useState(location.state.type_of_employee)
  let [gender, useGender] = useState(location.state.gender)
  let [balcl, useBalcl] = useState(location.state.bal_cl)
  let [balsl, useBalsl] = useState(location.state.bal_sl)
  let [balpl, useBalpl] = useState(location.state.bal_pl)
  let [balml, useBalml] = useState(location.state.bal_ml)
  let [balptl, useBalptl] = useState(location.state.bal_ptl)
  let [baleol, useBaleol] = useState(location.state.bal_eol)
  let [password, usePassword] = useState(location.state.password)



  let HandleChangeName =(b)=>{
    useName(b.target.value)
}

let HandleChangeEmail =(c)=>{
    useEmail(c.target.value)
}

let HandleChangeBoard =(d)=>{
    useBoard(d.target.value)
}

let HandleChangeDesignation =(e)=>{
    useDesignation(e.target.value)
}

let HandleChangeTypeOfEmployee =(f)=> {
    useTypeOfEmployee(f.target.value)

}

let HandleChangeGender =(g)=> {

    useGender(g.target.value)
}

let HandleChangeBalcl =(h)=> {
    useBalcl(h.target.value)
}

let HandleChangeBalsl =(i)=> {
    useBalsl(i.target.value)
}

let HandleChangeBalpl =(j)=> {
    useBalpl(j.target.value)
}

let HandleChangeBalml =(k)=> {
    useBalml(k.target.value)
}

let HandleChangeBalptl =(l)=> {
    useBalptl(l.target.value)
}

let HandleChangeBaleol =(m)=> {
    useBaleol(m.target.value)
}

let HandleChangePassword =(n)=> {
    usePassword(n.target.value)
}
     

 
    return(<>
       <Typography className="h2L" variant="h3" component="h2" gutterBottom>Edit Employee details</Typography>
      <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          
            style={{
                width:"700",
                minHeight: '100vh'
            }}>

            <table>
                <tbody>
                    <tr>
                        <td>
                            Qci-Id<Input type="text" value={location.state.qci_id}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Name<Input type="text" value={name} onChange={HandleChangeName}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Email<Input type="text" value={email} onChange={HandleChangeEmail}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Board<Input type="text" value={board} onChange={HandleChangeBoard}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Designation<Input type="text" value={designation} onChange={HandleChangeDesignation}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Type Of Employee<Input type="text" value={typeOfEmployee} onChange={HandleChangeTypeOfEmployee}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <FormControl >
                                <InputLabel>Gender</InputLabel>
                                <Select value={gender} onChange={HandleChangeGender}>
                                    <MenuItem value="male">male</MenuItem>
                                    <MenuItem value="female">female</MenuItem>
                                </Select>
                            </FormControl>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            bal_cl<Input type="number" value={balcl} onChange={HandleChangeBalcl}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            bal_sl<Input type="number" value={balsl} onChange={HandleChangeBalsl}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            bal_pl<Input type="number" value={balpl} onChange={HandleChangeBalpl}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            bal_ml<Input type="number" value={balml} onChange={HandleChangeBalml}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            bal_ptl<Input type="number" value={balptl} onChange={HandleChangeBalptl}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            bal_eol<Input type="number" value={baleol} onChange={HandleChangeBaleol}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            password<Input type="password" value={password} onChange={HandleChangePassword}/>
                        </td>
                    </tr>
                   

                    <tr>
                        <td>
                            <Button variant="contained" color="primary" >submit</Button>
                        </td>
                        <td>
                            <Button variant="contained" href="/details" color="secondary">Cancel</Button>
                        </td>
                    </tr>
                   

                </tbody>
            </table>


        </Grid>

    
      </>
      )
            
    
}       