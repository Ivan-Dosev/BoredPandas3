import React from 'react';
import './About.css';
import '../../Containers/Terminal/Terminal.css'

const About = () =>{
    return(
    <section className = "main section">
        <div className="about">
            <div className="text">
                <div  className="header">
                    <h1>About the project</h1>
                </div>
                <p> Bored Panda Adventures
                <br/>
for the people who refuse to settle down!
<br/><br/>
Owning a Bored Panda NFT gives you exclusive rights to organize and participate in epic adventures across the world. If you are dreaming of exploring the natural wonders of the world and living through unique experiences hosted by people just like you, all you have to do is join the club!
                 <br/>
                 <br/>
Being a member of the Bored Panda club will give you access to one-of-a-kind events that will enrich your normal day-to-day life. You will experience deeply immersive activities designed to match different passions and skill levels with people all over the world.
                 <br/>
                 <br/>
                </p>
                <p>We are very excited to build this community together with you, to hear and share fascinating stories, to make long-lasting connections, and of course - to have lots of fun along the way!
                </p>
            </div>
            <div className="avatar"></div>
        </div>
    </section>
    );
}

const getTechnologies = () =>{
    return <ol className="technologies">
                <li>Extreme Sports</li>
                <li>Travelling</li>
                <li>Camping</li>
                <li>and many more</li>
            </ol>
}

export default About;