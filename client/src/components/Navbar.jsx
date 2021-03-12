import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export default function Navbar() {

    return (
        <div>
            <AppBar>
                <Toolbar>
                    <IconButton edge="start">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        StoryBooks
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
