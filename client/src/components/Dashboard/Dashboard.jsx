import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        marginTop: "80px"
    }
})

export default function Dashboard() {
    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <h1>Dashboard</h1>
        </div>
    );
}