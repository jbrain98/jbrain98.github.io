import React from 'react';
import { Grid, Paper, Divider, Button, Card, CardContent, CardMedia, CardActions } from '@material-ui/core';
import "./ProjectPage.css"
import FABmainpic from "./projectPics/FAB/FABmainpic.png"
import SplashPage from "./projectPics/Shareable/SplashPage.PNG"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
} from "react-router-dom";


const projectList = [{ src: FABmainpic, title: "FAB" }, { src: SplashPage, title: "Shareable" }, { src: FABmainpic, title: "FAB" }]

const ProjectPage = () => {
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="stretch"
            spacing={3}>
            <Grid item xs={10} >
                <p className="heading">Projects</p>
                <hr className="divider" />
            </Grid>
            <Grid container item xs={10} direction="row"
                justify="center"
                alignItems="stretch"
                spacing={3}>
                {projectList.map((project) =>
                    <Project project={project} />)
                }
            </Grid>
        </Grid>
    )

}


const Project = (project) => {
    console.log(project)
    return (
        <Grid item xs={10} sm={5} md={4}>
            <Card className="center">
                <img src={project.project.src} class="prjpic" />
                <CardActions className="center">
                    <Button className="center">
                        <Link to={project.project.title} className="link">
                            <b>{project.project.title}</b>
                        </Link>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )

}

export default ProjectPage