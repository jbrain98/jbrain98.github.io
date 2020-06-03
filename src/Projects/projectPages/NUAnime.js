import React from 'react';
import { Grid, Divider, Button, Card, CardContent, CardMedia, CardActions } from '@material-ui/core';
import "../ProjectPage.css"
import SplashPage from "../projectPics/NUAnime/logo.PNG"
import Landing from "../projectPics/NUAnime/Landing.PNG"
import Contact from "../projectPics/NUAnime/Contact.PNG"
import Art from "../projectPics/NUAnime/Art.PNG"
import Photos from "../projectPics/NUAnime/Photos.PNG"
import Landing2 from "../projectPics/NUAnime/Landing2.PNG"
import Contact2 from "../projectPics/NUAnime/Contact2.PNG"
import Art2 from "../projectPics/NUAnime/Art2.PNG"
import Photos2 from "../projectPics/NUAnime/Photos2.PNG"

const NUAnimePage = () => {
    return (
        <Grid
            container
            direction="row"
            justify="center"
            spacing={5}>
            <Grid item xs={10} >
                <p className="heading">NUanime</p>
                <hr className="divider" />
            </Grid>
            <Grid item >
                <img src={SplashPage} className="prjpic" />
            </Grid>
            <Grid item xs={10} sm={7} >
                <Description />
                <Technologies />
            </Grid>
            <Grid item xs={9}  >
                <Takeaways />
            </Grid>
            <Grid item xs={9}  >
                <MainPage />
            </Grid>
            <Grid item xs={9}  >
                <img src={Landing2} />
            </Grid>
            <Grid item xs={9}  >
                <ArtPage />
            </Grid>
            <Grid item xs={9}  >
                <img src={Art2} />
            </Grid>
            <Grid item xs={9}  >
                <PhotoPage />
            </Grid>
            <Grid item xs={9}  >
                <img src={Photos2} />
            </Grid>
            <Grid item xs={9}  >
                <img src={Contact2} />
            </Grid>
        </Grid>
    )
}

const NUAnimePage2 = () => {
    return (
        <Grid
            container
            direction="row"
            justify="center"
            spacing={5}>
            <Grid item xs={10} >
                <p className="heading">NUanime</p>
                <hr className="divider" />
            </Grid>
            <Grid item xs={10} sm={5} className="left">
                <img src={SplashPage} className="prjpic" />
                <Technologies />
                <MainPage />
                <br />
                <img src={Art} className="prjpicb" />
                <PhotoPage />
                <br />
                <img src={Contact} className="prjpicb" />

            </Grid>
            <Grid item xs={10} sm={5} className="right">
                <Description />
                <br />
                <img src={Landing} className="prjpicb" />
                <ArtPage />
                <br />
                <img src={Photos} className="prjpicb" />
                <Takeaways />
            </Grid>
        </Grid>
    )
}
/*
<br />
                <img src={Front} className="prjpicb" />  */



const Technologies = () => (
    <p> <br /><b>Technologies</b>
        <br />
    React, HTML, CSS, JavaScript, AWS</p>

)

const Description = () => (
    <p>
        <b>.Club</b>
        <p>How can I help publicize Northwestern's Anime Club?
                        <br />
            <br />
                        When I was a sophomore, the club president asked me if I could code a new club website to help
                        increase club engagement. The previous site was several years old and created in WordPress, and we
                        both wanted to start fresh with a more modern website.This was the first redesign. My senior year
                        as both president and tech chair of the club I redesigned and recoded it again utilizing my increased coding
                        ability. You can find the website at <a href="nuanime.club">nuanime.club</a>. It is hosted on Amazon Webservices.
        </p>
    </p>
)

const MainPage = () => (
    <p>
        <br />
        <b>Landing page </b> <br />
        I first outlined the architecture of the website, which I ended up determining to be the same as the inital website. In
        my first redesign, I coded using pure HTML, JavaScript, and CSS. This meant my code was very repetitive and complicated. When I
        redesigned and recoded it, I made the UI cleaner and more fitting with current web conventions. In addition, I componentized the
        code using React so edits could be easily made to, for example, the list of exec members.
    </p>
)

const ArtPage = () => (
    <p>
        <br />
        <b>Art Circle </b> <br />
        One of my priorities was highlighting the work of our art circle. Instead of having the pictures all in one column like the previous
        site, I decided to put the pictures in more of a gallery style layout. I also wanted to give credit to the artists.
        Initially I placed them all in responsive columns with the ability to hover over them to see the artist information, but for the final
        redesign I imported a library that displayed them similarly to a Google Image search. When clicked, a lightbox opens to show a magnified
        picture with the artist information. I choose to do this because following standard web conventions often makes it easier and faster for users
        to process the page. I asked for feedback from the art circle, and they all preferred this design.
    </p>
)

const PhotoPage = () => (
    <p>
        <br />
        <b>Photo Gallery </b> <br />
        For the same reason, I went with a Google Image search inspired photo gallery page as well. I also made sure to focus on photos
        that showed how community-oriented the club is and the interesting events we do.
    </p>
)

const Takeaways = () => (
    <p>
        <br />
        <b>Takeaways</b> <br />
        I am appreciative of the opportunity to create a currently deployed website from scratch during my college years. To help a club
        that meant so much to me and helped me form so many lasting friendships made this experience even more impactful. I also was able to see
        how much I had grown as a coder between my sophomore and senior years. My goal is to later make the site easily maintainable and mutatable
        by even non-coders so it can be used for years to come.
    </p>
)

export default NUAnimePage