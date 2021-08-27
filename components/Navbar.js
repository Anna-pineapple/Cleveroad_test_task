import React, {useContext} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Button, Grid} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import { useAuthState } from "react-firebase-hooks/auth";
import { ecommerce_basket } from 'react-icons-kit/linea/ecommerce_basket';
import { Icon } from 'react-icons-kit';
import '../index';

function Navbar(props) {
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <AppBar color={"primary"} position="static">
                <div className ="wrapper">
      <header className="d-flex justify-between">
        <div classname="d-flex align-center">
        <h3 className="header">
            Book shop
        </h3>
        </div>
            <ul className="d-flex">
                <li className="d-flex mr-50 cu-p">
                            <Icon onClick={props.onClickCard} className="basket d-flex" size={30} icon={ecommerce_basket} />
                 </li>
            </ul>
      </header>
    </div>
            <Toolbar variant={"dense"}>
                <Grid container justify={"flex-end"}>
                    {user ?
                        <Button onClick={() => auth.signOut()} variant={"outlined"}>Log Out</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant={"outlined"}>Log In</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;