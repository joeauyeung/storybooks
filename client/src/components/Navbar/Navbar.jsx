import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core";
import NavDrawer from "./NavDrawer";

const useStyles = makeStyles({
    brandname: {
        marginLeft: "10px",
        fontSize: "25px"
    }
})

export default function Navbar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar>
                <Toolbar>
                    <NavDrawer />
                    <Typography variant="h6" className={ classes.brandname }>
                        StoryBooks
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
