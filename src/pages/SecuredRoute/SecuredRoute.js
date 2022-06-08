import React from "react"

import ReactDOM from 'react-dom';
import {BrowserRouter, Link, NavLink, Switch, Route} from 'react-router-dom';
import { useLocation, Navigate, Outlet } from "react-router-dom";
export default function SecuredRoute(props){
 
    const location = useLocation();
    if(localStorage.getItem("token")!=null )
    {
        return <Outlet/>
    }
    else{
        return <Navigate to="/unauth"/>
    }
}

export const authentication={
    isLoggedIn:false,
    token:false,
    onAuthentication(){
      this.isLoggedIn=true;
      this.token=true
    },
    getLogInStatus(){
      return this.isLoggedIn;
    },
    isTokenAvailable()
    {
        return this.token
    }        
  }