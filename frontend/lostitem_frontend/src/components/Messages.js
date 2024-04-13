import React from 'react'
import Navbar from "./navbarafterlogin";
import "../css/style.css";
import Feature from "../img/feature.jpg"
export default function Messages() {
  return (
    <div>
      <Navbar/>
      <div className='box-container'>
      <h1 className='heading'><span>Locate Sphere</span></h1>
      <h3 className='headingtext'>Keep your conversations respectful and friendly.</h3>
      <h6 className='headingtext'>Thank you for being a part of Locate Sphere community and helping each other out.</h6>
      <hr style={{ width: '70%', margin: '0 auto',marginBottom: '10px' }} />
      <div className="feed-header feedtext">
          <h2>Messages</h2>
      </div>
      <div className="feedbox">
            <div className="phead">
            <p className="left-text">Claim request from : Jhon</p>
            <p className="right-text">13-04-2024</p>
            </div>
            <hr style={{background:'#2e186a',height:'3px',marginTop:'-5px'}}/>
            <div className="pheadnew">
            <p className="left-text12">ID: 1 - Cycle Ajanta Brand</p>
            <p className="middle-text12">Posted As : FOUND</p>
            <p className="right-text12">Current Status : CLAIMED</p>
            </div>
            <hr style={{background:'#2e186a',height:'3px',marginTop:'-7px'}}/>
            <h6 className='ptext'>Proof Image :</h6>
            <div className="picture-container">
            <img src={Feature} alt="feature" />
            </div>
            <hr style={{background:'#2e186a',height:'3px',marginTop:'5px'}}/>
            <p className="ptext">Message : Thank you for notifying Jhon. I am coming to take it.</p>
            <hr style={{background:'#2e186a',height:'3px',marginTop:'5px'}}/>
            </div>

            <div className="feedbox">
            <div className="phead">
            <p className="left-text">Claim request sent to : Mayank</p>
            <p className="right-text">13-04-2024</p>
            </div>
            <hr style={{background:'#2e186a',height:'3px',marginTop:'-5px'}}/>
            <div className="pheadnew">
            <p className="left-text12">ID: 1 - Cycle Ajanta Brand</p>
            <p className="middle-text12">Posted As : FOUND</p>
            <p className="right-text12">Current Status : CLAIM IN PROGRESS</p>
            </div>
            <hr style={{background:'#2e186a',height:'3px',marginTop:'-7px'}}/>
            <h6 className='ptext'>Proof Image :</h6>
            <div className="picture-container">
            <img src={Feature} alt="feature" />
            </div>
            <hr style={{background:'#2e186a',height:'3px',marginTop:'5px'}}/>
            <p className="ptext">Message : This is my cat.</p>
            <hr style={{background:'#2e186a',height:'3px',marginTop:'5px'}}/>
            <div className="btncontain">
            <button className="btnnclaim">Send message</button>
            </div>
            </div>
      </div>
    </div>
  )
}
