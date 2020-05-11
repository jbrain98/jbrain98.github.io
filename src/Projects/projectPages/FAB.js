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
            <Grid item xs={10} >
                <p className="heading">FAB</p>
                <hr className="divider" />
            </Grid>
            <Grid item xs={10} sm={5} className="left">
                <img src={icon} className="prjpic" />
                <br />
                <b>Technologies</b>
                <p>React Native, GitHub, Expo, Firebase</p>
                <br />
                <b>Partnership</b>
                <p>I worked on a development team with five other coders.
                We communicated with the client team on a bi-weekly basis for five weeks while developing this app.
                While they were responsible for the ideation, research, and styling, my team was responsible for all
                the front and back end coding. Along the way, we had to
                complete burnup charts and provide feedback to the clients to
                ensure that expectations were being met.
                    </p>
                <br />
                <img src={question} className="prjpicb" />
                <br />
                <b>Sprinting Towards the Goal</b>
                <br />
                <p>
                    After testing, we started working in sprints on the other user stories (voting, viewing a profile page, and creating a new post)
                    in the order both teams determined would be the most difficult to code and the most important to test. Each week my team also
                    made changes to the app based off user testing of the features completed in previous sprints. We kept track of our working
                    with a Burn Up chart.
                </p>
                <br />
                <img src={Post} className="prjpicb" />
                <br />
                <b>Takeaways</b>
                <br />
                <p>
                    I learned through this project how to take an agile approach to software development.
                    My development team was able to form expectation for both ourselves
                    and the client team what was going to be done for each sprint and how long each change would take by using a Burn Up chart.
                    I also developed more skill in communicating with a client team that did
                    not have any coding experience. I think a lot of time in student projects it is very self-designed
                    and driven. However, in a business setting there are also cases where a developer’s
                    responsibility is to implement another’s design and it is important to be able to do both.
                </p>

            </Grid>
            <Grid item xs={10} sm={5} className="right">
                <b>Crowdsourcing Fashion</b>
                <p>How might one use a phone app to figure out what one should wear to their next big work presentation?
                        <br />
                        <br />
                        This was the question posed to my team by a team of graduate design students.
                         Together, the developer and client teams worked on a phone app that allowed users to post two outfit choices
                          and vote on other’s posts so users get help
                           deciding what to wear.
                    </p>
                <br />
                <img src={MyStats} className="prjpicb" />
                <br />
                <b>Testing the "Payoff"</b>
                <br />
                <p>
                    My team worked in week-long agile sprints during development.
                    For each sprint, we primarily focused on one user storyline.
                    The first week we focused on the so called “payoff” screen using canned data.
                    We determined - based off the storyboard we created - that the results screen for a
                    post was the most needed so we could gather feedback on user interest in the app.
                    </p>
                <br />
                <b>Adding Gamification"</b>
                <br />
                <p>
                    The clients decided after inital user testing that we needed to add a gamification element to the app
                    to increase incentive to vote.
                    To do so, the clients decided to add an “Influencer” status to users who vote correctly 80% of the time.
                    If a user had this status we rewarded them by counting their votes as double as they were more “trustworthy” based of their previous record.
                    However, this created additional challenges for my developer team, as we had to restructure the database in order to keep
                    track of who voted and for which option in each poll.

                    </p>
                <br />
                <img src={vote} className="prjpicb" />
                <br />
                <b>My Impact</b>
                <br />
                <p>
                    I focused mainly on the backend for this project, although I did some front-end as well.
                    I was primarily responsible for the database and I took the lead in creating the database schema.
                    In the first sprints I wrote code to pull canned data I had uploaded to the database to display on the results page
                    and the user profile page. After testing to make sure canned data was being pulled and displayed correctly,
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
                <br />
            </Grid>

        </Grid>

    )

}

const Heading = (text) => (
    <p>
        <b>{text}</b>
        <br />
    </p>

)



export default FABPage