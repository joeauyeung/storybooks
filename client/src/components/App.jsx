import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import LoginCard from "./LoginCard";


// Create the theme colors
const theme  = createMuiTheme({
    palette: {
        primary: {
            main: "#757575"
        },
        secondary: {
            main: "#e57373"
        }
    }
})

const useStyles = makeStyles({
    navbar: {
        marginTop: "50px"
    }
})

function App() {
    const classes = useStyles();
    return (
    <ThemeProvider theme={ theme }>
        <Router>
        <div className={ classes.navbar }>
            <Navbar/>
            <LoginCard/>
        </div>
        </Router>

    </ThemeProvider>

    )
}

export default App;