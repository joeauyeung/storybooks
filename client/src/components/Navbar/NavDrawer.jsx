import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { BiBookAlt, BiLogOut } from "react-icons/bi";
import { RiDashboardLine } from "react-icons/ri";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export default function NavDrawer(props) {
    return(
    <>
    <IconButton edge="start">
        <MenuIcon />
    </IconButton>
    <Drawer>
        <List>
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