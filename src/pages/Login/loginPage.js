
import React, { useState } from "react";
import { Card, CardContent, TextField } from "@material-ui/core";
import { IsEmailValid } from "../../utility/validation.js";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { Grid, Paper } from "@mui/material";
import Typography from '@material-ui/core/Typography';
import { useNavigate } from "react-router-dom";
import { authentication } from "../SecuredRoute/SecuredRoute";
import "./login.css";

export default function Login() {

    var [userid, setUserid] = useState("")
    var [password, setpassword] = useState("")
    var [emailError, setemailError] = useState("")

    let navigate = useNavigate()

    var HandleChangeID = (a) => {
        setUserid(a.target.value)
    }

    var HandleChangePwd = (b) => {
        setpassword(b.target.value)
    }

    var OnclickFullDetail = () => {

        var Is_EmailValid = IsEmailValid(userid)
        if (Is_EmailValid) {
            fetch("http://127.0.0.1:5000/lms/loginAdmin", {
                method: "post",
                body: JSON.stringify({
                    "email": userid,
                    "password": password
                })
            })
                .then(data => data.json())
                .then(data => {
                    console.log(data)
                    if (data.success) {
                        localStorage.setItem("token", data.token)
                        authentication.onAuthentication()
                        navigate("/home")
                    }
                    else {
                        setemailError(data.message)
                    }
                }
                )
        }
        else {
            setemailError("Email invalid")
        }
    }

    return (
        <Grid container className="mainGrid">
            <Card>
                <CardContent>
                    <Paper>
                        <table>
                            <tbody>
                                <tr>
                                    <th>
                                        <Typography className="h2L" variant="h3" component="h2" gutterBottom>Admin Login</Typography>
                                    </th>
                                </tr>
                                <tr>
                                    <td className="tdL">
                                       <TextField label="Enter Email" type="text" value={userid} onChange={HandleChangeID} />
                                    </td>
                                    <td>
                                        <PersonPinIcon fontSize="large" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tdL">
                                         <TextField label="Enter Password" type="password" value={password} onChange={HandleChangePwd} />
                                    </td>
                                    <td>
                                        <LockOpenIcon fontSize="large" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tdL">
                                        <Button variant="contained" color="primary" onClick={OnclickFullDetail} endIcon={<SendIcon />}>Submit</Button>
                                    </td>
                                    <td className="tdL">
                                        <Button variant="contained" href="/unauth" startIcon={<DeleteIcon />}>Cancel</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {emailError}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Paper>
                </CardContent>
            </Card>

        </Grid>
    )
}
