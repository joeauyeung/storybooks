import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { FcGoogle } from "react-icons/fc";
import { FaBookReader } from "react-icons/fa"
import { makeStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
    card: {
        margin: "auto",
        marginTop: "200px",
        maxWidth: "400px"
    },
    text: {
        margin: "5px",
        textAlign: "center"
    },
    actionArea: {
        justifyContent: "center",
        paddingTop: "20px"
    }
})

export default function LoginCard() {
    const classes = useStyles();

    return(    
    <Card variant="outlined" className={ classes.card }>
        <CardContent className={ classes.text }>
            <Typography variant="h3" gutterBottom>
                <FaBookReader/> StoryBooks
            </Typography>
            <Typography variant="p" >
                Create public and private stories form your life
            </Typography>
        </CardContent>
        <Divider />
        <CardActions className={ classes.actionArea }>
           <Button variant="contained" startIcon={ <FcGoogle/> }>Login with Google</Button> 
        </CardActions>
    </Card>
);
}