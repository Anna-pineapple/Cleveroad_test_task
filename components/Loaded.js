import React from 'react';
import {Button, Container, Grid} from "@material-ui/core";
import Box from "@material-ui/core/Box";

const Loaded = () => {
    return (
        <Container>
            <Grid container
                style={{ height: window.innerHeight - 50 }}
                alignItems={"center"}
                justify={"center"}
            >
                <Grid
                    container
                    alignItems={"center"}
                    direction={"column"}
                >
                    <div className="lds-spinner"></div>
                </Grid>      
            </Grid>
       </Container>
    );
};

export default Loaded;