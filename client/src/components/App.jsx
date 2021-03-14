import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import LoginCard from "./LoginCard";
import Dashboard from "./Dashboard/Dashboard";


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
            <Switch>
                <Route path="/" exact component={ LoginCard } />
                <Route path="/dashboard" component={ Dashboard } />
            </Switch>
        </Router>

    </ThemeProvider>

    )
}

export default App;