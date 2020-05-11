import React from 'react';
import { Grid, Divider, Button, Card, CardContent, CardMedia, CardActions } from '@material-ui/core';
import "../ProjectPage.css"
import SplashPage from "../projectPics/Shareable/SplashPage.PNG"
import Enter from "../projectPics/Shareable/Enter.PNG"
import Filters from "../projectPics/Shareable/Filters.PNG"
import Groups from "../projectPics/Shareable/Groups.PNG"
import Messages from "../projectPics/Shareable/Messages.PNG"
import Michael from "../projectPics/Shareable/Michael.PNG"
import Olivia from "../projectPics/Shareable/Olivia.PNG"
import Profile from "../projectPics/Shareable/Profile.PNG"
import Sizes from "../projectPics/Shareable/Sizes.PNG"
import Front from "../projectPics/Shareable/Front.PNG"
import Paper from "../projectPics/Shareable/Paper.PNG"

const ShareablePage = () => {
    return (
        <Grid
            container
            direction="row"
            justify="center"
            spacing={5}>
            <Grid item xs={10} >
                <p className="heading">Shareable</p>
                <hr className="divider" />
            </Grid>
            <Grid item xs={10} sm={5} className="left">
                <img src={SplashPage} className="prjpic" />                
                <Technologies />
                <Teamwork />
                <br />
                <img src={Filters} className="prjpicb" />  
                <Group />
                <br />
                <img src={Olivia} className="prjpicc" /> 
                <br />
                <img src={Michael} className="prjpicc" /> 
                <br />
                <img src={Paper} className="prjpicb" /> 
                <FinalProduct />
                <br />
                <img src={Messages} className="prjpicb" /> 
                <MyImpact />
                
                
                

            </Grid>
            <Grid item xs={10} sm={5} className="right">
                <Description />
                <br />
                <img src={Front} className="prjpicb" />  
                <UserStories />
                <br />
                <img src={Groups} className="prjpicb" /> 
                <Personas />
                <UserTesting />
                <br />
                <img src={Enter} className="prjpicb" /> 
                <Takeaways />
                
                
                
            </Grid>

        </Grid>

    )

}

const Teamwork = () => (
    <p>
        <br />
        <b>Teamwork</b>
        <br />
    I collaborated on a team of six as we worked on developing our own app idea using an iterative design process.
    </p>
)

const Technologies = () => (
    <p> <br /><b>Technologies</b>
        <br />
    Figma</p>

)

const Description = () => (
    <p>
        <b>Group Clothes Sharing</b>
        <p>How might we allow one to borrow and lend clothes safely so they do not have to spend a lot of money on clothes they only wear once?
                        <br />
            <br />
                        In class we came up with several design ideas for an iPad app. However, this was the "how might we" question we were most
                        drawn to. We all had many experiences with lending and borrow some particular article of clothing and knew
                        how cumbersome it could be. One of the worst experiences we knew of was
                        a case where someone offered her to lend her dresses through her sororities unregulated
                        formal "dress bank" - she never got them back. Cases such as this drew us to this particular design space.
        </p>
    </p>
)

const UserStories = () => (
    <p>
        <br />
        <b>Importance of User Stories</b> <br />
        After we determined our design space, we worked together to go through potential user stories to determine user needs.
        Through this, we determined that there were four major stories involved in the app: creating an account, finding items to borrow
        and borrowing them, uploading items to loan out, and loaning out items. We then went through each user story to see what features
        would be necessary as well as what features could be added to making using the app a delightful experience. Some of these features
        include: filtering based off common requirements for events (such as color or clothing article), 
        a messaging service within the app for easy communication with lenders and borrowers, and saved user clothing sizes for ease of use.
    </p>
)

const Group = () => (
    <p>
        <br />
        <b>Group Lending</b> <br />
        However, the most important feature we decided on during our ideation design phase was groups. We discovered that many people were
        uncomfortable with the prospect of lending clothes to people they did not know. For this reason, we decided to have
        users make and join "Groups" in order to borrow and lend clothes. These could be as informal as a friend group or as formal as
        an interview clothing bank for a business fraternity. Because we decided to require borrowing through these groups, people felt
        more secure in loaning out their clothes.    
    </p>
)

const Personas = () => (
    <p>
        <br />
        <b>Personas</b> <br />
        We decided to focus largely on university students when designing the app, but the app could be used by anyone. Focusing on two
        main personas allowed us to realize the importance of features such as sorting by color (as Michael needs a red shirt for
        his Refresh dance group performance outfit)    
    </p>
)

const UserTesting = () => (
    <p>
        <br />
        <b>Paper User Testing</b> <br />
        After determining some basic features we drew a paper protype of our app. Using this, we then tested the app by having
        five different people that fit within our target audience of college students but might different needs. Based off this feedback
        we made the app more gender inclusive (including changing the name from "The Dress Bank" to the more gender-neutral "Shareable"
        and adding a specific male sizing page). We also made some edits to the flow of the app, changed some filters, 
        and tried to standarize the sizing. Balancing the amount of work required from the users with adding features that would be nice to have
        was something we paid particular attention to. For example, it would be nice to have a lot of details about an item before you borrow it,
        but that would require the loaner to fill out a lot of information and would be frustrating. 
    </p>
)

const FinalProduct = () => (
    <p>
        <br />
        <b>Figma</b> <br />
        Our final product was a Figma prototype. Three team members collaborated on creating the prototype, and the entire team presented it
        to a class of forty. 
        
    </p>
)

const Takeaways = () => (
    <p>
        <br />
        <b>Takeaways</b> <br />
        In contrast to my work on FAB, I did no coding for this project. Interestingly enough, it felt like I was in more of a client role
        for this project as I was working on determining the design and features of the app instead of coding someone else's ideas. I think it
        is very important to be able to do both, and in this project I had the ability to as a team tackle whatever design space I found interesting.
        As all design projects do, it also reiterated the importance of the design process and how important user testing is. Before this
        I had never used Figma, so I also learned a new technology I can utilize in the future.
    </p>
)

const MyImpact = () => (
    <p>
        <br />
        <b>My Impact</b> <br />
        I was very vocal when we as a group were discussing user stories and potential features. In particular, I was one of the strong supporters
        of the idea of group-centered loaning. Throughout the process I was involved in all tasks, including the paper prototyping
        and user testing. I was on the team of three who worked to create a style guide and Figma prototype.
    </p>
)

export default ShareablePage