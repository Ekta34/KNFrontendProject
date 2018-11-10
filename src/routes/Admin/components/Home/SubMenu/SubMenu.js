import React from 'react'
import './SubMenu.css'
import {Jumbotron, Grid, Row, Col} from 'react-bootstrap'
import InputTextField from '../../../../../components/UIelements/InputTextField/InputTextField';
import TextAreaInput from '../../../../../components/UIelements/TextAreaInput/TextAreaInput';

const SubMenu = props => {

    return (
        <div className="subMenuContainer">
            <div className="subMenuBox">
                <div className="subMenuHeader">SubMenu</div>
                <div className="subMenuItem">Home</div>
                <div className="subMenuItemSelected">Examples</div>
                <div className="subMenuItem">Contact</div>
                <div className="subMenuItem">About</div>
            </div>
            <div className="aboutContainer">
                <div className="profileContainer">
                    <div className="photoContainer">
                        <div className="coverPhoto" />
                        <div className="profilePic"/>
                    </div>
                    <div className="contactDetailContainer">
                        <div className="contactDeatailItem">
                            <div className="leftPanel">Name</div>
                            <div className="rightPanel">Nomen Nescio</div>
                        </div>
                        <div className="contactDeatailItem">
                            <div className="leftPanel">Email</div>
                            <div className="rightPanel">no@example.com</div>
                        </div>
                        <div className="contactDeatailItem">
                            <div className="leftPanel">Phone</div>
                            <div className="rightPanel">+54879321</div>
                        </div>
                    </div>
                </div>
                <div className="messageContainer">
                    <div className="messageHeader">Send me a message</div>
                    <div className="subject">
                        <InputTextField label="Subject" />
                    </div>
                    <div className="message">
                        <TextAreaInput label="Message" minRows={5} />
                    </div>
                    <div className="sendButtonContainer">
                        <div className="sendButtonText">Send</div>
                    </div>
                </div>
                <div className="locationContainer">
                    <div className="addressHeader">
                        <div className="addressHeaderText">Or meet me at office</div>
                    </div>
                    <div className="mapContainer"></div>
                    <div className="addressContainer">
                        <div className="addressLine">ONE MIDTOWN</div>
                        <div className="addressLine">11, Hoi Shing Rd</div>
                        <div className="addressLine">Tusem Wan</div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default SubMenu