import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import '../../node_modules/react-responsive-carousel/lib/styles/carousel.css';
import LogoMain from './Logo/LogoMain'
import './Main.scss'
import { Breakpoint } from 'react-socks';
import Arrow from './Animation/Arrow';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Breakpoint xlmobile down>
                <LogoMain />
                    <Carousel emulateTouch showArrows={false} showThumbs={false} showStatus={false} autoPlay={false} interval={5000} infiniteLoop={true} axis={"vertical"} dynamicHeight={true} showIndicators={false} >
                        <div>
                            <img src={require("../assets/Landing_Page_new.png")} alt="" />
                        </div>
                        {/* <div>
                            <img src={require("../assets/Text.png")} alt=""/>
                            <Arrow />
                        </div> */}
                        <div style={{height: "100vh"}}>
                            <div className="text-locali">
                                <span className="locale">Il nuovo store di BURGEZ e in</span>
                                {/* <span className="trovaci">Vieni a trovarci in</span> */}
                                <br/>
                                <span className="ticinese">CORSO DI PORTA TICINESE 14</span>
                                <Arrow />
                            </div>
                        </div>
                        <div>
                            <img src={require("../assets/Locali.png")} alt="" />
                        </div>
                        <div>
                            <img src={require("../assets/image_background4v2.png")} alt="" />
                        </div>
                    </Carousel>
                </Breakpoint>
                <Breakpoint tablet up>
                    <Breakpoint tablet only>
                    <LogoMain />
                    </Breakpoint>
                    <Carousel emulateTouch showThumbs={false} showStatus={false} autoPlay={true} interval={5000} infiniteLoop={true} showIndicators={false} stopOnHover={false} useKeyboardArrows={true}>
                        <div>
                            <img src={require("../assets/Landing_Page_new.png")} alt="" />
                        </div>
                        <div>
                            <img src={require("../assets/image_background.png")} alt="" />
                            <div className="location-box"><span>CORSO DI PORTA TICINESE 14</span></div>
                        </div>
                        <div>
                            <img src={require("../assets/image_background2.png")} alt="" />
                            <div className="location-box"><span>CORSO DI PORTA TICINESE 14</span></div>
                        </div>
                        <div>
                            <img src={require("../assets/image_background3.png")} alt="" />
                            <div className="location-box"><span>CORSO DI PORTA TICINESE 14</span></div>
                        </div>
                        <div>
                            <img src={require("../assets/image_background4v2.png")} alt="" />
                        </div>
                    </Carousel>
                </Breakpoint>
            </div>
        )
    }
}
