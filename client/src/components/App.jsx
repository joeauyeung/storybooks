import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
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



function App() {
    return (
    <ThemeProvider theme={ theme }>
        <div>
            <Navbar/>
            <h1>Hello world!</h1>
        </div>
    </ThemeProvider>

    )
}

export default App;