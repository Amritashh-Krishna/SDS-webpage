import React, { useState, useEffect, useRef } from "react"
import "./Team.css"
import defpfp from "/src/components/Team/images/default_pfp.png"
import sds from "/src/components/Team/images/rsz_3sds.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import ParticlesComponent from "../Particlesbg/particles.jsx"
import "./dots.css"

import SagarTakur from "/src/components/Team/images/Teams/Sagar_Takur.jpg"

function Card({ member, id }) {
  const { name, role, pfp, gt, ld } = member
  const cardContRef = useRef(null)
  const [flipped, setFlipped] = useState(false)
  const timeoutRef = useRef(null)

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setFlipped(true)
    }, 900)
  }

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current)
    setFlipped(false)
  }

  useEffect(() => {
    const cardCont = cardContRef.current
    cardCont.addEventListener("mouseenter", handleMouseEnter)
    cardCont.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cardCont.removeEventListener("mouseenter", handleMouseEnter)
      cardCont.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div ref={cardContRef} className="card-cont">
      <div className={`card ${flipped ? "flipped" : ""}`}>
        <div className="front">
          <img className="fprofile" src={pfp || defpfp} alt="person" />
          <h2 className="frole">{role}</h2>
        </div>
        <div className="back">
          <ParticlesComponent id={`particles-${id}`} />
          <img className="logo" src={sds} alt="sds" />
          <img className="tprofile" src={pfp || defpfp} alt={name} />
          <h4 className="name">{name}</h4>
          <h5 className="role">{role}</h5>
          <div className="socials">
            <a href={ld} className="socialt">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={gt} className="socialt">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Team() {
  const teamMembers = [
    {
      name: "Sagar Thakur",
      role: "Industry Relation Head",
      pfp: SagarTakur,
      gt: "https://github.com/Matheletss",
      ld: "https://www.linkedin.com/in/sagar-thakur-223829259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    { name: "Rounak Kumar", role: "Social Media Manager", pfp: defpfp, gt: "#", ld: "#" },
    { name: "Apurva Mishra", role: "Joint Secretary", pfp: defpfp, gt: "#", ld: "#" },
    { name: "Rachit Bansal", role: "General Secretary", pfp: defpfp, gt: "#", ld: "#" },
    { name: "Debspandan", role: "Treasurer", pfp: defpfp, gt: "#", ld: "#" },
    { name: "Kumar Harshwardhan", role: "VP - Academic Affairs", pfp: defpfp, gt: "#", ld: "#" },
    { name: "Amarjeet", role: "Vice President - Industry Relations", pfp: defpfp, gt: "#", ld: "#" },
    { name: "Vanisha Kandhway", role: "Joint Treasurer", pfp: defpfp, gt: "#", ld: "#" },
    { name: "Pragya Singh", role: "Team Coordinator", pfp: defpfp, gt: "#", ld: "#" },
    { name: "Aayushii Singh", role: "Member", pfp: defpfp, gt: "#", ld: "#" },
    { name: "Yaagik Maurya", role: "Joint President", pfp: defpfp, gt: "#", ld: "#" },
    { name: "Animesh Kumar", role: "Academic Coordinator", pfp: defpfp, gt: "#", ld: "#" },
    { name: "Gaurav Kumar Singh", role: "Vice President - Web and Tech", pfp: defpfp, gt: "#", ld: "#" },
    { name: "Vishal Kumar Singh", role: "Finance and Sponsorship Coordinator", pfp: defpfp, gt: "#", ld: "#" },
    { name: "Naman Khatwani", role: "Content Head", pfp: defpfp, gt: "#", ld: "#" },
  ]

  return (
    <div className="body">
      <div className="container">
        <div className="background">
          {[...Array(30)].map((_, index) => (
            <span key={index}></span>
          ))}
        </div>
        <h1 className="heading">Meet Our Team</h1>
        <div className="item-container">
          {teamMembers.map((member, index) => (
            <Card key={index} member={member} id={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team
