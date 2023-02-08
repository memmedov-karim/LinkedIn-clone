import React from "react";
import './meinfo.css';

export default  function Meinfo() {
    return(
        <div className="meinfo">
            <div className="meinfohead">
                <img className="meimg" alt="img" src="https://cdn.wallpapersafari.com/38/11/2WqNdH.jpg" />
                <div className="mename-desc">
                    <div style={{color:"white"}} className="mename">Shikhkarim Mammadov</div>
                    <div style={{color:"white"}} className="medesc">Full stack developer</div>
                </div>
                
            </div>
            <button className="meviewprofile">View profile</button>
            <hr />
            <div className="memidle">
                <h3 style={{color:"white"}}>Account</h3>
                <div className="meitem">
                    <div className="pem meitems">Try premium for free</div>
                    <div className="meitems">Security & privacy</div>
                    <div className="meitems">Help</div>
                    <div className="meitems">Language</div>
                </div>
            </div>
            <hr />
            <div className="memidle">
                <h3 style={{color:"white"}}>Manage</h3>
                <div className="meitem">
                    <div className="meitems">Post & activit</div>
                    <div className="meitems">ob posting account</div>
                </div>
            </div>
            <hr />
            <div style={{marginTop:"10px"}} className="memidle">
                <div className="meitem">
                    <div className="meitems">Sign out</div>
                </div>
            </div>
            
        </div>
    )
    
}