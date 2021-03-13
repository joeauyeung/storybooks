import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";



export default function LoginCard() {
    return(    
    <Card>
        <CardContent>
            <Typography variant="h3">
                StoryBooks
            </Typography>
            <Typography variant="p">
                Create public and private stories form your life
            </Typography>
        </CardContent>
        <CardActions>
           <Button variant="contained">Login with Google</Button> 
        </CardActions>
    </Card>
);
}