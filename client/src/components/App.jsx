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


function App() {
    return (
    <ThemeProvider theme={ theme }>
        <Router>
            <Navbar/>
            <LoginCard/>
        </Router>

    </ThemeProvider>

    )
}

export default App;