import React from 'react';
import { Grid, Paper, Divider, Button, Card, CardContent, CardMedia, CardActions } from '@material-ui/core';
import "./ProjectPage.css"
import FABmainpic from "./projectPics/FAB/FABmainpic.png"
import SplashPage from "./projectPics/Shareable/SplashPage.PNG"
import AnimeClublogo from "./projectPics/NUAnime/logo.PNG"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
} from "react-router-dom";


const projectList = [{ src: FABmainpic, title: "FAB" }, { src: SplashPage, title: "Shareable" }, { src: AnimeClublogo, title: "NUanime" }]

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
            <Link to={project.project.title} className="link">
                <Card className="center">
                    <img src={project.project.src} class="prjpic" />
                    <CardActions className="center">
                        <Button className="center">
                            <b className="link">{project.project.title}</b>
                        </Button>
                    </CardActions>
                </Card>
            </Link>
        </Grid>
    )

}

export default ProjectPage