import React from 'react'
import './About.css';
import CEO from '../../CEO.jpeg'
export default function About() {
    return (
        <div className="about">
            <h2 className="about--title">About the Founder-CEO</h2>
            <img src={CEO} alt="Founder-CEO" width={"400px"} height={"500px"} />
            <div className="about--paragraph-container">
                <p className="about--paragraph">
                Tomy Sebastian, born in Alappuzha, is the visionary founder and CEO of Atom Builders and Engineers. Driven by a profound commitment to community resilience, he launched his endeavor in the aftermath of the devastating Kerala floods, dedicating his efforts to reconstructing buildings and aiding in disaster recovery. Under his leadership, Atom Builders and Engineers has achieved remarkable success, completing over 100 building projects, each reflecting a blend of innovation and quality. Expanding his horizons, Tomy has recently ventured into defense contract buildings in Bangalore, showcasing his versatility and dedication to contributing to critical infrastructure development across India. His journey is a testament to his leadership, technical prowess, and unwavering dedication to societal betterment.
                </p>
            </div>
        </div>
    )
}