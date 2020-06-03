import React from 'react';
import { Grid, Paper, Divider, Button } from '@material-ui/core';
import Julia from "./Julia.jpg"
import './MainPage.css';
import {
    Link
} from "react-router-dom";




const MainPage = () => {
    return (
        <React.Fragment>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="stretch"
                spacing={3}>
                <Grid item xs={6} sm={2}>
                    <img src={Julia} />
                </Grid>
                <Grid item xs={10} sm={6}>
                    <Paper elevation={0}>
                        <p>
                            <b>Hi, my name is Julia Brain!</b>
                            <br />
                            <br />
                    I am currently a senior at Northwestern majoring in computer science 
                    with a focus in UI/UX. I am also pursuing both a minor in English Literature and the Segal 
                    Design Certificate. <br /><br /> 
                    I am passionate about UX, and there is no better feeling than seeing 
                    a user delighted by a small design feature that creates an amazing experience out of a mundane task. 
                    I have worked on both computer science projects as well as more physical products in order to create 
                    the best user experience possible. <br /> <br />
                    In the future, I want to use my coding ability as well as my design ability to help create
                    and change software to best serve the user and the company.
                    </p>
                    </Paper>

                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="stretch"
                spacing={3}>
                <Grid item xs={6} sm={2} className="center">
                    <Button className="center">
                        <Link to="/Brain_Julia_resume.pdf" target="_blank" className="download" download>Download Resume</Link>
                    </Button>
                </Grid>
                <Grid item xs={10} sm={6} >

                    <hr className="divider" />
                    <p>
                        <b>Contact me!</b>
                        <br />
                    Email: JuliaBrain2020@u.northwestern.edu
                    <br />
                    Phone: 815-762-1808
                    <br />
                    LinkedIn: linkedin.com/in/julia-brain-2020/
                    <br />
                    GitHub: github.com/jbrain98
                </p>
                </Grid>
            </Grid>
        </React.Fragment>

    )

}

export default MainPage