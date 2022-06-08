
import React, { useEffect } from "react";
import { useState } from "react";
import { Grid } from "@mui/material";
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@mui/material/Button';
import EditIcon from '@material-ui/icons/Edit';
import { Link, useNavigate } from 'react-router-dom';
import "./EmployeeDetails.css";

export default function EmployeeDetails(props) {

    let [data, setData] = useState([])

    let Showdata = () => {
        fetch("http://127.0.0.1:5000/lms/employeeDetails", {
            method: "get", headers: {
                "Authorization": localStorage.getItem("token")
            }
        })

            .then(data => data.json())
            .then(data => {
                console.log(data)
                setData(data.data)
            })
    }

    useEffect(() => { Showdata() }, [])

    let DeleteData = (qciId) => {
        fetch("http://127.0.0.1:5000/lms/deleteEmployee", {
            method: "post", headers: {
                "Authorization": localStorage.getItem("token")
            },
            body: JSON.stringify({
                "qci_id": qciId,
            })
        })

            .then(value => value.json())
            .then(value => {
                console.log(value)
                Showdata()
            })
    }

    let navigate = useNavigate();
    let SendData = (e) => {
        navigate('/edit', { state: e })
    }

    return (
        <div>
            <Grid>
                <Typography className="EDTypography" variant="h3">Employee Details</Typography>
                <Link to="/home">
                    <Button sx={{ fontSize: 20, color: "white", background: "black", position: "fixed", marginLeft: "5%", }} variant="contained">Home</Button>
                </Link>
                <table className="EDtable">
                    <thead>
                        <tr>
                            <th className="EDth">
                                Qci-Id
                            </th>
                            <th className="EDth">
                                Name
                            </th>
                            <th className="EDth">
                                Email
                            </th>
                            <th className="EDth">
                                Board
                            </th>
                            <th className="EDth">
                                Designation
                            </th>
                            <th className="EDth">
                                TOE
                            </th>
                            <th className="EDth">
                                Gender
                            </th>
                            <th className="EDth">
                                BalCl
                            </th>
                            <th className="EDth">
                                BalSl
                            </th>
                            <th className="EDth">
                                BalPl
                            </th>
                            <th className="EDth">
                                BalMl
                            </th>
                            <th className="EDth">
                                BalPtl
                            </th>
                            <th className="EDth">
                                BalEol
                            </th>
                            <th className="EDth">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(e => {
                                return (
                                    <tr>
                                        <td className="EDtd">
                                            {e.qci_id}
                                        </td>
                                        <td className="EDtd">
                                            {e.name}
                                        </td>
                                        <td className="EDtd">
                                            {e.email}
                                        </td>
                                        <td className="EDtd">
                                            {e.board}
                                        </td>
                                        <td className="EDtd">
                                            {e.designation}
                                        </td>
                                        <td className="EDtd">
                                            {e.type_of_employee}
                                        </td>
                                        <td className="EDtd">
                                            {e.gender}
                                        </td>
                                        <td className="EDtd">
                                            {e.bal_cl}
                                        </td>
                                        <td className="EDtd">
                                            {e.bal_sl}
                                        </td>
                                        <td className="EDtd">
                                            {e.bal_pl}
                                        </td>
                                        <td className="EDtd">
                                            {e.bal_ml}
                                        </td>
                                        <td className="EDtd">
                                            {e.bal_ptl}
                                        </td>
                                        <td className="EDtd">
                                            {e.bal_eol}
                                        </td>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => { SendData(e) }}
                                            startIcon={<EditIcon />}
                                        />
                                        <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() => DeleteData(e.qci_id)}
                                            startIcon={<DeleteIcon />}
                                        />
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </Grid >
        </div>
    )
}
