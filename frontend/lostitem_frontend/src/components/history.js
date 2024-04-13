import React from 'react'
import Navbar from "./navbarafterlogin";
import "../css/style.css"
import Feature from "../img/feature.jpg"
export default function history() {
  return (
    <div>
      <Navbar/>
      <div className='box-container'>
      <h1 className='heading'><span>Locate Sphere</span></h1>
      <h3 className='headingtext'>View your history</h3>
      <h6 className='headingtext'>Thank you for being a part of Locate Sphere community and helping each other out.</h6>
      <hr style={{ width: '70%', margin: '0 auto',marginBottom: '10px' }} />
      <div className="feed-header feedtext">
          <h2>Your posts</h2>
      </div>
            <div className="feedbox">
            <div className="phead">
            <p className="left-text">Lost</p>
            <p className="right-text">13-04-2024</p>
            </div>
            <hr style={{background:'#2e186a',height:'3px',marginTop:'-5px'}}/>
            <div className="phead">
            <p className="left-text1">Cycle Ajanta Brand</p>
            <p className="right-text1">Posted by : Jhon Doe</p>
            </div>
            <hr style={{background:'#2e186a',height:'3px',marginTop:'-7px'}}/>
            <p className="ptext">I lost the cycle from XYZ place. It's green in color and adult size.</p>
            <hr style={{width: '90%',background:'#2e186a', margin: '0 auto',height:'3px',marginBottom:'20px'}}/>
            <p className="ptext">Category : CYCLE</p>
            <p className="ptext">Location : XYZ</p>
            <p className="ptext">Status : Unclaimed</p>
            <hr style={{width: '90%',background:'#2e186a', margin: '0 auto',height:'3px',marginBottom:'20px'}}/>
            <p className="ptext">Contact : John Doe</p>
            <p className="ptext">Email : jane@email.com</p>
            <p className="ptext">Phone : -- set private --</p>
            <hr style={{width: '90%',background:'#2e186a', margin: '0 auto',height:'3px',marginBottom:'20px'}}/>
            <p className='ptext'>Image of the item :</p>
            <div className="picture-container">
            <img src={Feature} alt="feature" />
            </div>
            <hr style={{width: '90%',background:'#2e186a', margin: '0 auto',height:'3px',marginTop:'10px'}}/>
            <div className="btncontain">
            <button className="btnnclaim">Claimed</button>
            <button className="btnndelete">Delete</button>
            </div>
            </div>

            <div className="feed-header feedtext">
          <h2>Your claims</h2>
           </div>
            <div className="feedbox">
            <div className="phead">
            <p className="left-text">Found</p>
            <p className="right-text">13-04-2024</p>
            </div>
            <hr style={{background:'#2e186a',height:'3px',marginTop:'-5px'}}/>
            <div className="phead">
            <p className="left-text1">Aadhar card</p>
            <p className="right-text1">Posted by : Rajeev Raj</p>
            </div>
            <hr style={{background:'#2e186a',height:'3px',marginTop:'-7px'}}/>
            <p className="ptext">I found this aadhar card near Amity University, Patna.</p>
            <hr style={{width: '90%',background:'#2e186a', margin: '0 auto',height:'3px',marginBottom:'20px'}}/>
            <p className="ptext">Category : Document</p>
            <p className="ptext">Location : Amity University,Patna</p>
            <p className="ptext">Status : CLAIM IN PROGRESS</p>
            <p className="ptext">Claimed by : You</p>
            <hr style={{width: '90%',background:'#2e186a', margin: '0 auto',height:'3px',marginBottom:'20px'}}/>
            <p className="ptext">Email : rajeevraj123@gmail.com</p>
            <p className="ptext">Phone : -- set private --</p>
            <hr style={{width: '90%',background:'#2e186a', margin: '0 auto',height:'3px',marginBottom:'20px'}}/>
            <p className='ptext'>Image of the item :</p>
            <div className="picture-container">
            <img src={Feature} alt="feature" />
            </div>
            <hr style={{width: '90%',background:'#2e186a', margin: '0 auto',height:'3px',marginTop:'10px'}}/>
            <div className="btncontain">
            <button className="btnnwarning">Cancel Claim</button>
            <button className="btnnprogress">Claim in Progress</button>
            </div>
            </div>
      </div>
    </div>
  )
}
