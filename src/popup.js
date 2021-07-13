import React from 'react'
import './popup.css'

function Popup(props) {
    return (props.trigger) ? (
        <div>
            <div className="localRecPopup">
                <div className="popup-inner">
                    <h3>Local Recording Control</h3>
                    <br /><br />                   
                    <div id="ctrl-btn">
                        <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
                        <button id="action-btn">{props.action}</button>
                    </div>
                    </div>
            </div>
        </div>
    ) : "";
}
export default Popup
