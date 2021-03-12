import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import Navbar from "./Navbar";


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
        <div className={ classes.navbar }>
            <Navbar  />
            <h1>Hello world!</h1>
        </div>
    </ThemeProvider>

    )
}

export default App;