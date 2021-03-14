import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { BiBookAlt, BiLogOut } from "react-icons/bi";
import { RiDashboardLine } from "react-icons/ri";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    listMargin: {
        marginTop: "60px"
    }
})

export default function NavDrawer(props) {
    const classes = useStyles();

    const [ toggleOpenDrawer, setToggleOpenDrawer ] = useState(false);

    const toggleDrawer = (open) => (event) => {
        setToggleOpenDrawer(open);
    }

    return(
    <>
    <IconButton edge="start" onClick={ toggleDrawer(true) }>
        <MenuIcon />
    </IconButton>
    <Drawer open={ toggleOpenDrawer } onClose={ toggleDrawer(false) }>
        <List className={ classes.listMargin }>
        <ListItem>
            <ListItemIcon>
                <BiBookAlt/>
            </ListItemIcon>
            <ListItemText>
                Public Stories
            </ListItemText>
        </ListItem>
        <ListItem>
            <ListItemIcon>
                <RiDashboardLine/>
            </ListItemIcon>
            <ListItemText>
                Dashboard
            </ListItemText>
        </ListItem>
        <ListItem>
            <ListItemIcon>
                <BiLogOut/>
            </ListItemIcon>
            <ListItemText>
                Logout
            </ListItemText>
        </ListItem>
        </List>
    </Drawer>
    </>
)
}