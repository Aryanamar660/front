import React, { useState } from 'react';
import Navbar from "./navbarafterlogin";
import "../css/style.css";
import Feature from "../img/feature.jpg";
export default function Feed(){
    const [showClaimForm, setShowClaimForm] = useState(false);

    const handleClaimButtonClick = () => {
        setShowClaimForm(true);
    };
    return(
      <div>
        <Navbar/>
      <div className="box-container">
      <h1 className='heading'><span>Locate Sphere</span></h1>
      <h4 className='headingtext'>Your Locate Sphere support community.</h4>
      <hr style={{ width: '70%', margin: '0 auto',marginBottom: '10px' }} />
      <div className="feed-header feedtext">
          <h2>Feed</h2>
      </div>
      <div className="options">
                <select className="form-select me-2">
                    <option value="">Type</option>
                    <option value="lost">Lost</option>
                    <option value="found">Found</option>
                </select>
                <select className="form-select me-2">
                    <option value="">Category</option>
                    <option value="mobile">Mobile</option>
                    <option value="document">Document</option>
                    <option value="vehicle">Vehicle</option>
                </select>
                <button className="btnn">Filter</button>
                <input type="text" className="form-control me-2" placeholder="Search your item here....." />
                <button className="btnn">Search</button>
                <button className="btnn">Reload</button>
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
            <p className="ptext">Claimed by : N/A</p>
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
            <button className="btnnclaim"  onClick={handleClaimButtonClick}>Claim</button>
            </div>
            </div>
            {showClaimForm && (
                    <div className="feedbox">
                        <p className='ptext'>Add Message :</p>
                        <textarea id="message" name="message" rows="4" cols="50" placeholder='Enter your message here....'></textarea>
                        <div className="file-input">
                        <p className='ptext'>Attach image proof :</p>
                            <input id="file-upload" type="file" />
                        </div>
                        <div className="btncontain">
                        <button className="btnnclaim">Send Claim Request</button>
                        </div>
                    </div>
                )}
                <div className="feedbox">
            <div className="phead">
            <p className="left-text">Lost</p>
            <p className="right-text">13-04-2024</p>
            </div>
            <hr style={{background:'#2e186a',height:'3px',marginTop:'-5px'}}/>
            <div className="phead">
            <p className="left-text1">Nuclear Bomb</p>
            <p className="right-text1">Posted by : Vladimir Putin</p>
            </div>
            <hr style={{background:'#2e186a',height:'3px',marginTop:'-7px'}}/>
            <p className="ptext">I lost my nuclear bomb on my way to India. If anyone finds it, please give it back to me.</p>
            <hr style={{width: '90%',background:'#2e186a', margin: '0 auto',height:'3px',marginBottom:'20px'}}/>
            <p className="ptext">Category : Bomb</p>
            <p className="ptext">Location : Pakistan</p>
            <p className="ptext">Status : Claimed</p>
            <p className="ptext">Claimed by : Aryan Amar</p>
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
            <button className="btnnclaimed">Claimed</button>
            </div>
            </div>
      </div>
      </div>
    );
}