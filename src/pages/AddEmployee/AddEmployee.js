
import { Button, FormControl } from "@material-ui/core";
import { Grid, Typography, Input } from "@mui/material";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useState } from "react";
import "./AddEmployee.css";
import { Link } from "react-router-dom";

function AddEmployee() {

    let [emailError, setEmailError] = useState("")
    let [qciId, useQciId] = useState("")
    let [name, useName] = useState("")
    let [email, useEmail] = useState("")
    let [board, useBoard] = useState("")
    let [designation, useDesignation] = useState("")
    let [typeOfEmployee, useTypeOfEmployee] = useState("")
    let [gender, useGender] = useState("")
    let [balcl, useBalcl] = useState("")
    let [balsl, useBalsl] = useState("")
    let [balpl, useBalpl] = useState("")
    let [balml, useBalml] = useState("")
    let [balptl, useBalptl] = useState("")
    let [baleol, useBaleol] = useState("")
    let [password, usePassword] = useState("")

    let HandleChangeQciID = (a) => {
        useQciId(a.target.value)
    }

    let HandleChangeName = (b) => {
        useName(b.target.value)
    }

    let HandleChangeEmail = (c) => {
        useEmail(c.target.value)
    }

    let HandleChangeBoard = (d) => {
        useBoard(d.target.value)
    }

    let HandleChangeDesignation = (e) => {
        useDesignation(e.target.value)
    }

    let HandleChangeTypeOfEmployee = (f) => {
        useTypeOfEmployee(f.target.value)
    }

    let HandleChangeGender = (g) => {
        useGender(g.target.value)
    }

    let HandleChangeBalcl = (h) => {
        useBalcl(h.target.value)
    }

    let HandleChangeBalsl = (i) => {
        useBalsl(i.target.value)
    }

    let HandleChangeBalpl = (j) => {
        useBalpl(j.target.value)
    }

    let HandleChangeBalml = (k) => {
        useBalml(k.target.value)
    }

    let HandleChangeBalptl = (l) => {
        useBalptl(l.target.value)
    }

    let HandleChangeBaleol = (m) => {
        useBaleol(m.target.value)
    }

    let HandleChangePassword = (n) => {
        usePassword(n.target.value)
    }

    let OnclickSaveData = () => {

        fetch("http://127.0.0.1:5000/lms/addEmployee", {
            method: "post", headers: {
                "Authorization": localStorage.getItem("token")
            },
            body: JSON.stringify({
                'qci_id': qciId,
                'name': name,
                'email': email,
                'board': board,
                'designation': designation,
                'type_of_employee': typeOfEmployee,
                'gender': gender,
                'bal_cl': balcl,
                'bal_sl': balsl,
                'bal_pl': balpl,
                'bal_ml': balml,
                'bal_ptl': balptl,
                'bal_eol': baleol,
                'password': password
            })
        })
            .then(data => data.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    setEmailError(data.message)
                }
                else {
                    setEmailError("Input Error")
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
                    width: "500",
                    minHeight: '100vh',
                }}>
                <Typography variant="h2" className="Typography">Add Details</Typography>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Qci-Id<Input label="Qci-Id" type="text" value={qciId} onChange={HandleChangeQciID} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Name<Input type="text" value={name} onChange={HandleChangeName} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Email<Input type="text" value={email} onChange={HandleChangeEmail} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Board<Input type="text" value={board} onChange={HandleChangeBoard} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Designation<Input type="text" value={designation} onChange={HandleChangeDesignation} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Type Of Employee<Input type="text" value={typeOfEmployee} onChange={HandleChangeTypeOfEmployee} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Gender<FormControl>
                                    <Select onChange={HandleChangeGender}>
                                        <MenuItem value="male">male</MenuItem>
                                        <MenuItem value="female">female</MenuItem>
                                    </Select>
                                </FormControl>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                bal_cl<Input type="number" value={balcl} onChange={HandleChangeBalcl} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                bal_sl<Input type="number" value={balsl} onChange={HandleChangeBalsl} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                bal_pl<Input type="number" value={balpl} onChange={HandleChangeBalpl} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                bal_ml<Input type="number" value={balml} onChange={HandleChangeBalml} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                bal_ptl<Input type="number" value={balptl} onChange={HandleChangeBalptl} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                bal_eol<Input type="number" value={baleol} onChange={HandleChangeBaleol} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                password<Input type="password" value={password} onChange={HandleChangePassword} />
                            </td>
                        </tr>
                        <br /><br />
                        <tr>
                            <td>
                                <Button variant="contained" color="primary" onClick={OnclickSaveData}>submit</Button>
                            </td>
                            <td>
                                <Link to="/home">
                                    <Button variant="contained" color="secondary">Home</Button>
                                </Link>
                            </td>
                        </tr>
                        <tr><td>{emailError}</td></tr>
                    </tbody>
                </table>
            </Grid>
        </div>
    )
}

export default AddEmployee
