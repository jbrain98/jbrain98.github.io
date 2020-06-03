import React from 'react';
import { Grid, Paper, Divider, Button, Card, CardContent, CardMedia, CardActions } from '@material-ui/core';
import "../ProjectPage.css"
import FABmainpic from "../projectPics/FAB/FABmainpic.png"
import icon from "../projectPics/FAB/icon.png"
import MyStats from "../projectPics/FAB/MyStats.png"
import question from "../projectPics/FAB/question.png"
import Post from "../projectPics/FAB/Post.png"
import vote from "../projectPics/FAB/vote.png"

const FABPage = () => {
    return (
        <Grid
            container
            direction="row"
            justify="center"
            spacing={5}>
            <Grid item xs={0} sm={1} >
            </Grid>
            <Grid item xs={10} >
                <p className="heading">FAB</p>
                <hr className="divider" />
            </Grid>
            <Grid item xs={0} sm={1} >
            </Grid>
            <Grid item>
                <img src={icon} className="prjpic" />
            </Grid>
            <Grid item xs={10} sm={6} >
                <Description />
                <Technologies />
                <Partnership />
            </Grid>
            <Grid item xs={9}  >
                <MyImpact />
            </Grid>
            <Grid item xs={9}  >
                <Takeaways />
            </Grid>
            <Grid item xs={9} container
                direction="row">
                <Grid item item sm={9} md={7}>
                    <Payoff />
                    <Gamification />
                </Grid>
                <Grid item sm={9} md={5} justify="center" align="center">
                    <img src={question} className="prjpicb" />
                </Grid>
            </Grid>
            <Grid item xs={9}  >
                <Sprint />
            </Grid>
            <Grid item xs={9} container
                direction="row"
                justify="center"
                align="center"
                spacing={5}>
                <Grid item xs={10} sm={5} md={4}>
                    <b>Vote screen</b> <br />
                   <img src={vote} className="prjpicb" />                    
                </Grid>
                <Grid item xs={10} sm={5} md={4} justify="center">
                    <b>Profile page</b> <br />
                    <img src={MyStats} className="prjpicb" />
                </Grid>
                <Grid item xs={10} sm={5} md={4} justify="center">
                    <b>Create post</b> <br />
                    <img src={Post} className="prjpicb" />
                </Grid>
            </Grid>
        </Grid>
    )
}

const FABPage2 = () => {
    return (
        <Grid
            container
            direction="row"
            justify="center"
            spacing={5}>
            <Grid item xs={10} >
                <p className="heading">FAB</p>
                <hr className="divider" />
            </Grid>
            <Grid item xs={10} sm={5} className="left">
                <img src={icon} className="prjpic" />
                <Technologies />
                <Partnership />
                <br />
                <img src={question} className="prjpicb" />
                <Sprint />
                <br />
                <img src={Post} className="prjpicb" />
                <Takeaways />

            </Grid>
            <Grid item xs={10} sm={5} className="right">
                <Description />
                <br />
                <img src={MyStats} className="prjpicb" />
                <Payoff />
                <Gamification />
                <br />
                <img src={vote} className="prjpicb" />
                <MyImpact />
                <br />
            </Grid>
        </Grid>
    )
}

const Technologies = () => (
    <p>
        <br />
        <b>Technologies</b>
        <br />
        React Native, GitHub, Expo, Firebase
    </p>
)

const Description = () => (
    <p>
        <b>Crowdsourcing Fashion</b>
        <p>How could a phone app be used to choose between two outfit choices?
                        <br />
            <br />
            This was the question posed to my team by a group of graduate design students.
            Together, the developer and client teams worked on a phone app that allowed users to post two outfit choices
            and vote on other’s posts so users get help
            deciding what to wear.
        </p>
    </p>
)

const Partnership = () => (
    <p>
        <br />
        <b>Partnership</b>
        <br />
        I worked on a development team with five other coders.
        We communicated with the client team on a bi-weekly basis for five weeks while developing this app.
        While they were responsible for the ideation, research, and styling, my team was responsible for all
        the front and back end coding. Along the way, we had to
        complete burnup charts and provide feedback to the clients to
        ensure that expectations were being met.
    </p>
)

const Sprint = () => (
    <p>
        <br />
        <b>Sprinting Towards the Goal</b>
        <br />
            After testing, we started working in sprints on the other user stories (voting, viewing a profile page, and creating a new post)
            in the order both teams determined would be the most difficult to code and the most important to test. Each week my team also
            made changes to the app based off user testing of the features completed in previous sprints. We kept track of our working
            with a Burn Up chart.
    </p>
)

const Takeaways = () => (
    <p>
        <br />
        <b>Takeaways</b>
        <br />
            I learned through this project how to take an agile approach to software development.
            My development team was able to form expectations for both ourselves
            and the client team what was going to be done for each sprint and how long each change would take by using a Burn Up chart.
            I also developed more skill in communicating with a client team with no coding experience. 
            I think a lot of time student projects are very self-designed
            and driven. However, in a business setting there are also cases where it is developer’s
            responsibility to implement another’s design and it is important to be able to do both.
    </p>
)

const Payoff = () => (
    <p>
        <br />
        <b>Testing the "Payoff"</b>
        <br />
            My team worked in week-long agile sprints during development.
            For each sprint, we primarily focused on one user storyline.
            The first week we focused on the so-called “payoff” screen using canned data.
            We determined - based off the storyboard we created - that the results screen for a
            post was the most needed so we could gather feedback on user interest in the app.
    </p>
)

const Gamification = () => (
    <p>
        <br />
        <b>Adding "Gamification"</b>
        <br />
            The clients decided after inital user testing that we needed to add a gamification element to the app
            to increase incentive to vote.
            To do so, the clients decided to add an “Influencer” status to users who vote correctly 80% of the time.
            If a user had this status, we rewarded them by counting their votes as double as they were more “trustworthy” based off their previous record.
            However, this created additional challenges for my developer team, as we had to restructure the database in order to keep
            track of who voted and for which option in each poll.
    </p>
)

const MyImpact = () => (
    <p>
        <br />
        <b>My Impact</b>
        <br />
            I focused mainly on the backend for this project, although I did some front-end as well.
            I was primarily responsible for the database and I took the lead in creating the database schema.
            In the first sprints I wrote code to pull canned data I had uploaded to the database to display on
             the results and user profile pages. After testing to make sure canned data was being pulled and displayed correctly,
            I implemented the functions that switched it to real, updating data. This included coding it so
            that each time a user opens the app it would either
            load the information from the user entry associated with the phone’s id or create a new user entry.
            I was also in charge of the logic and implementation behind how each user’s vote was counted
            for the running score and the final score. Based off this, I updated the user stats displayed on the
            user’s page, including determining if they met “Influencer” status or not. I single-handedly wrote
            the functions that ran after each post’s time limit of 24 hours expired. These functions updated
            the score of each person who voted and took them off this list of posts that could be voted on.
            I also worked further filtering the posts each user could vote on by only allowing them to vote
            once per post and only on others' posts. For the front end, I created the user stats bar by
            myself as well as doing other minor UI changes included in the different sprints.
    </p>
)

export default FABPage