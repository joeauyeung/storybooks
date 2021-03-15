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
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    listMargin: {
        marginTop: "60px"
    },
    linkText: {
        textDecoration: "none",
        color: "inherit"
    }
})


export default function NavDrawer(props) {
    const classes = useStyles();

    const [ toggleOpenDrawer, setToggleOpenDrawer ] = useState(false);

    const toggleDrawer = (open) => (event) => {
        setToggleOpenDrawer(open);
    }

    const navItems = [
        {
            text: "Public Stories",
            icon: <BiBookAlt/>,
            link: "/"
        },
        {
            text: "Dashboard",
            icon: <RiDashboardLine/>,
            link: "/dashboard"
        },
        {
            text: "Logout",
            icon: <BiLogOut/>,
            link: "/"
        }
    ]

    return(
    <>
    <IconButton edge="start" onClick={ toggleDrawer(true) }>
        <MenuIcon />
    </IconButton>
    <Drawer open={ toggleOpenDrawer } onClose={ toggleDrawer(false) }>
        <List className={ classes.listMargin }>
            {navItems.map(item => {
                const { text, icon, link } = item;


                return(
                    <ListItem component={ Link } to={ link } onClick={ toggleDrawer(false) } className={ classes.linkText }>
                        <ListItemIcon children={ icon }/>
                        <ListItemText primary={ text } />
                    </ListItem>
                
            )})}
        </List>
    </Drawer>
    </>
)
}