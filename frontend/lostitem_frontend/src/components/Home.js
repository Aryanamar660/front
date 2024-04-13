import React, { useState, useRef } from "react";
import Navbar from "./navbarbeforelogin";
import "../css/landing.css";
import Axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../img/lostitem.jpg";
import developer from "../img/dev.jpg";
import login from "../img/login.jpg";
import list_item from "../img/listitem.jpg";
import notification from "../img/notify.jpg";
import female from "../img/Homosapiens (1).jpg"
import Male from "../img/Homosapiens (2).jpg"
import { Container, Row, Button, Form } from "react-bootstrap";
export default function Home(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const ref = useRef();
  AOS.init();
  AOS.init({
    disable: false, 
    startEvent: "DOMContentLoaded", 
    initClassName: "aos-init", 
    animatedClassName: "aos-animate", 
    useClassNames: false, 
    disableMutationObserver: false, 
    debounceDelay: 50, 
    throttleDelay: 99, 

    
    offset: 120, 
    delay: 0, 
    duration: 700, 
    easing: "ease", 
    once: false, 
    mirror: false, 
    anchorPlacement: "top-bottom", 
  });
  const sendMessage = () => {
    const data = {
      name,
      email,
      message,
    };
    Axios({
      method: "POST",
      url: "#",
      data: data,
    })
      .then((res) => {
      })
      .catch((err) => {
        console.log(err);
      });
    setName("");
    setEmail("");
    setMessage("");
  };
    return(
     <>
     <Navbar />
      <div data-aos="fade-right" className="main">
        <div className="intro">
          <div className="part-1">
            <div className="title">
              <h1 id="title-h">Locate Sphere</h1>
              <p>Lost it😕. List it📃. Find it🤩.</p>
              <Button
                variant="custom"
                size="lg"
                style={{ backgroundColor: '#2e186a',color: "white" }}
                >
                Get Started
              </Button>
            </div>
          </div>

          <div className="part-2">
            <div className="image">
              <img
                src={image}
                style={{ width: "500px", height: "500px" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-right">
        <Container fluid className="total-inspiration">
          <div>
            <img className="developer-img" src={developer} alt="" />
          </div>
          <Row className="inspiration">
            <h6 className="section-heading">Our Project Inspiration💡</h6>
            <p>
            Locate Sphere was born from the collective frustration of misplaced belongings and the inefficiencies of traditional retrieval methods. Inspired by the desire to simplify the process of reuniting lost items with their rightful owners, Locate Sphere seeks to harness technology to create a centralized platform for connecting individuals who have lost items with those who have found them, fostering a sense of community and support in the process.
            </p>
          </Row>
        </Container>
      </div>
      <div data-aos="fade-left">
        <Container fluid>
          <div className="total-about">
            <div ref={ref} className="about-heading">
              <h6 className="section-heading">How it works ⚒️?</h6>
            </div>
            <div className="about-card">
              <div className="info">
                <img
                  src={login}
                  style={{ width: "200px", height: "200px" }}
                  alt=""
                />
                <h4>Create an account</h4>
                <p>To begin, you'll need to set up an account initially.</p>
                <a href="/log-in">
                  <Button variant="custom" size="lg">
                    Sign Up
                  </Button>
                </a>
              </div>
              <div className="info">
                <img
                  src={list_item}
                  style={{ width: "200px", height: "200px" }}
                  alt=""
                />
                <h4>List Lost/Found Item</h4>
                <p>
                Simply fill in specific details and upload an image to list your item on the platform. That's all it takes!
                </p>
              </div>
              <div className="info">
                <img
                  src={notification}
                  style={{ width: "200px", height: "200px" }}
                  alt=""
                />
                <h4>Get Notified</h4>
                <p>
                After an item is posted by any user, we notify our registered users about it through a notification.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      
      <section className="section-white">
      <div className="container" >
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <h2 className="section-heading">
              The team behind Locate Sphere🤝🤲
            </h2>
          </div>
          <div className="col-sm-6 col-md-3">
          <div className="team-item">
            <img src= {Male} 
            style={{ width: "200px", height: "200px" }}
            className="team-img" 
            alt="pic" />
            <h3>Rajeev Raj</h3>
            <div className="team-info">
            <p>Team leader</p>
            <p>Rajeev Raj is our team leader and this project's idea was his. He has a very good attitude and exceptional coding skills.</p>
         
            </div>
          </div>
          </div>
          <div className="col-sm-6 col-md-3">
          <div className="team-item">
            <img src= {female}
             style={{ width: "200px", height: "200px" }}
             className="team-img" 
             alt="pic" />
            <h3>Shreya Gupta</h3>
            <div className="team-info">
            <p>Team co-leader</p>
            <p>Shreya Gupta is our team's co-leader. She has exceptional communicational skills and a positive mindset.</p>
          
            </div>
          </div>
          </div>
          <div className="col-sm-6 col-md-3">
          <div className="team-item">
            <img src= {Male} 
            style={{ width: "200px", height: "200px" }}
            className="team-img" 
            alt="pic" />
            <h3>Mayank Chaudhary</h3>
            <div className="team-info">
            <p>Team sponsor</p>
            <p>Mayank Chaudhary is our team's sponsor. He is very rich and with his blessings, we'll never run out of money.</p>
           
            </div>
          </div>
          </div>
          <div className="col-sm-6 col-md-3">
          <div className="team-item">
            <img src= {Male} 
            style={{ width: "200px", height: "200px" }}
            className="team-img" 
            alt="pic" />
            <h3>Aryan Amar</h3>
            <div className="team-info">
            <p>Team member</p>
            <p>Aryan Amar is a team member. He is not exceptional at anything particular but he has a little knowledge about almost everything.</p>
            </div>
          </div>
          </div>
        </div>
      </div>
</section>


<div data-aos="fade-right">
        <Container fluid>
          <div className="total-contact-form">
            <div className="contact-title">
              <h6 className="section-heading"> Contact Form 📨📬</h6>
              <p>
              Feel free to reach out if you have any suggestions or simply want to say hello.
              </p>
            </div>
            <div className="contact-form">
              <Form>
                <Form.Label>Name :</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address :</Form.Label>
                  <Form.Control
                    type="email"
                    size="lg"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message :</Form.Label>
                  <Form.Control
                    size="lg"
                    as="textarea"
                    rows={6}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                </Form.Group>
                <Button variant="custom" onClick={sendMessage}
                 style={{ backgroundColor: '#2e186a',color: "white" }}
                >
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </Container>
      </div>
      <div className="personal-info">
      <h5 style={{ textAlign: "center" }}>
          Copyright © 2024 Locate Sphere. All rights reserved.
        </h5>
        <p>Contact us at : Amity University, Bailey Road, Rupaspur, Patna</p>
      </div>
      </>
    );
}