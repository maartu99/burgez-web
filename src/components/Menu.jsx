import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import { Breakpoint } from 'react-socks';
import 'tachyons';
import './Menu.scss'
import MenuContent from './MenuContent/MenuContent'
import Headroom from '../react-headroom'
import Logo from './Logo/Logo';
import LogoMain from './Logo/LogoMain';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.carousel = React.createRef();
        this.state = {
            reloaded: false
        }
    }
    
    render() {
        return (
            <div>
                <Breakpoint xlmobile down>
                <Headroom wrapperStyle={{background: "#3ae5fd"}} style={{paddingTop: "30px"}}>
                    <Logo />
                </Headroom>
                    <div style={{background: "#3ae5fd"}}>
                    <MenuContent />
                    <div style={{lineHeight: "0"}}>
                    <div>
                        <img src={require("../assets/Menu/Mobile/Hamburger.png")} alt="" />
                    </div>
                    <div>
                        <img src={require("../assets/Menu/Mobile/Cheeseburger.png")} alt="" />
                    </div>
                    <div>
                        <img src={require("../assets/Menu/Mobile/Smoke_Burger.png")} alt="" />
                    </div>
                    <div>
                        <img src={require("../assets/Menu/Mobile/Double_Big_Burger.png")} alt="" />
                    </div>
                    <div>
                        <img src={require("../assets/Menu/Mobile/Triple_Big_Burger.png")} alt="" />
                    </div>
                    <div>
                        <img src={require("../assets/Menu/Mobile/Chicken_Burger.png")} alt="" />
                    </div>
                    <div>
                        <img src={require("../assets/Menu/Mobile/Double_Cheeseburger.png")} alt="" />
                    </div>
                    </div>
                    </div>
                </Breakpoint>
                <Breakpoint tablet only>
                    <Breakpoint tablet only>
                        <LogoMain />
                    </Breakpoint>
                <Carousel ref={this.carousel} emulateTouch showThumbs={false} showStatus={false} stopOnHover={false} autoPlay={true} interval={5000} dynamicHeight={false} showIndicators={false} transitionTime={400} useKeyboardArrows={true}>
                    <div className="container">
                        <Breakpoint tablet only>
                            <div id="mobile-container" style={{height: "80vh"}}>
                                <div className="ingredients fl w-100">
                                    <div className="fl w-third"><strong>SINGLE:</strong> <p>100gr. di carne</p></div>
                                    <div className="fl w-third"><strong>DOUBLE:</strong> <p>200gr. di carne</p></div>
                                    <div className="fl w-third"><strong>TRIPLE:</strong> <p>300gr. di carne</p></div>
                                </div>
                                <div className="hamburgez fl w-100"><strong>HAMBURGEZ</strong></div>
                                <div className="burgers fl w-25">
                                    <span id="top">BUR</span>
                                    <span>GERS</span>
                                </div>
                                <div className="price1 fl w-25">
                                    <ul>
                                        <li><span>SINGLE</span> </li>
                                        <li><span id="double">DOUBLE</span> </li>
                                        <li><span>TRIPLE</span> </li>
                                    </ul>
                                </div>
                                <div className="menu fl w-25">
                                    <span id="top2">ME</span>
                                    <span id="nu">NÙ</span>
                                </div>
                                <div className="price1m fl w-25">
                                    <ul>
                                        <li><span>SINGLE</span> </li>
                                        <li><span id="double">DOUBLE</span> </li>
                                        <li><span>TRIPLE</span> </li>
                                    </ul>
                                </div>
                                <div className="cheeseburgez fl w-100"><strong>CHEESEBURGEZ</strong></div>
                                <div className="burgers fl w-25">
                                    <span id="top">BUR</span>
                                    <span>GERS</span>
                                </div>
                                <div className="price2 fl w-25" >
                                    <ul>
                                        <li><span>SINGLE</span> </li>
                                        <li><span id="double">DOUBLE</span> </li>
                                        <li><span>TRIPLE</span> </li>
                                    </ul>
                                </div>
                                <div className="menu fl w-25">
                                    <span id="top2">ME</span>
                                    <span id="nu">NÙ</span>
                                </div>
                                <div className="price2m fl w-25">
                                    <ul>
                                        <li><span>SINGLE</span> </li>
                                        <li><span id="double">DOUBLE</span> </li>
                                        <li><span>TRIPLE</span> </li>
                                    </ul>
                                </div>
                                <div className="smokeburgez fl w-100"><strong>SMOKEBURGEZ</strong></div>
                                <div className="burgers fl w-25">
                                    <span id="top">BUR</span>
                                    <span>GERS</span>
                                </div>
                                <div className="price3 fl w-25" >
                                    <ul>
                                        <li><span>SINGLE</span> </li>
                                        <li><span id="double">DOUBLE</span> </li>
                                        <li><span>TRIPLE</span> </li>
                                    </ul>
                                </div>
                                <div className="menu fl w-25">
                                    <span id="top2">ME</span>
                                    <span id="nu">NÙ</span>
                                </div>
                                <div className="price3m fl w-25">
                                    <ul>
                                        <li><span>SINGLE</span> </li>
                                        <li><span id="double">DOUBLE</span> </li>
                                        <li><span>TRIPLE</span> </li>
                                    </ul>
                                </div>
                                <div className="bigburgez fl w-100"><strong>BIGBURGEZ</strong></div>
                                <div className="burgers fl w-25">
                                    <span id="top">BUR</span>
                                    <span>GERS</span>
                                </div>
                                <div className="price4 fl w-25" >
                                    <ul>
                                        <li><span>SINGLE</span> </li>
                                        <li><span id="double">DOUBLE</span> </li>
                                        <li><span>TRIPLE</span> </li>
                                    </ul>
                                </div>
                                <div className="menu fl w-25">
                                    <span id="top2">ME</span>
                                    <span id="nu">NÙ</span>
                                </div>
                                <div className="price4m fl w-25">
                                    <ul>
                                        <li><span>SINGLE</span> </li>
                                        <li><span id="double">DOUBLE</span> </li>
                                        <li><span>TRIPLE</span> </li>
                                    </ul>
                                </div>
                                <div className="chickenburgez fl w-100"><strong>CHICKENBURGEZ</strong></div>
                                <div className="burgers fl w-25">
                                    <span id="top">BUR</span>
                                    <span>GERS</span>
                                </div>
                                <div className="price5 fl w-25" >
                                    <ul>
                                        <li><p id="pricechick">{/* left here for layout reasons only */}</p></li>
                                    </ul>
                                </div>
                                <div className="menu fl w-25">
                                    <span id="top2">ME</span>
                                    <span id="nu">NÙ</span>
                                </div>
                                <div className="hotdog fl w-100"><strong id="hotdog">HOZ DOG</strong></div>
                                <div className="hotdog-list fl w-40">
                                    <ul>
                                        <li>GOOD BOY</li>
                                        <li>BLONDE GIRL</li>
                                        <li>GOLDEN GOLD</li>
                                        <li>TRY HOT</li>
                                    </ul>
                                </div>
                                <div className="descrip fl w-40">
                                    <ul>
                                        <li>ketchup, senape</li>
                                        <li>crauti, ketchup, senape</li>
                                        <li>all with cheddar cream</li>
                                        <li>cheddar cream, bacon, jalapeño</li>
                                    </ul>
                                </div>
                                <div className="fries fl w-100"><strong>FRIES</strong></div>
                                <div className="fries-list fl w-70">
                                    <ul>
                                        <li>FRIES</li>
                                        <li>CHEESEFRIES</li>
                                        {/* <li>CHEESEFRIES + BACON</li> */}
                                    </ul>
                                </div>
                                <div className="drinks fl w-100"><strong>DRINKS</strong></div>
                                <div className="drinks-list fl w-70">
                                    <ul>
                                        <li>COKE-ZERO-FANTA-SPRITE</li>
                                        <li>BIRRA</li>
                                        <li>ACQUA</li>
                                    </ul>
                                </div>
                                <div className="milkshake fl w-100"><strong>MILKSHAKE</strong></div>
                                <div className="milkshake-list fl w-80">
                                    <p>FRAGOLA-VANIGLIA-CIOCCOLATO-BANANA-AMARENA-CARAMELLO SALATO-OREO</p>
                                </div>
                            </div>
                        </Breakpoint>
                    </div>
                    <div>
                        <Breakpoint tablet only>
                        <img src={require("../assets/Menu/Tablet/Hamburger.png")} alt="" />
                        </Breakpoint>
                    </div>
                    <div>
                        <Breakpoint tablet only>
                        <img src={require("../assets/Menu/Tablet/Cheeseburger_Tablet.png")} alt="" />
                        </Breakpoint>
                    </div>
                    <div>
                        <Breakpoint tablet only>
                        <img src={require("../assets/Menu/Tablet/Smoke_Burger_Tablet.png")} alt="" />
                        </Breakpoint>
                    </div>
                    <div>
                        <Breakpoint tablet only>
                        <img src={require("../assets/Menu/Tablet/Big_Burger_Tablet.png")} alt="" />
                        </Breakpoint>
                    </div>
                    <div>
                        <Breakpoint tablet only>
                        <img src={require("../assets/Menu/Tablet/Triple_Big_Burger_Tablet.png")} alt="" />
                        </Breakpoint>
                    </div>
                    <div>
                        <Breakpoint tablet only>
                        <img src={require("../assets/Menu/Tablet/Chicken_Burger_Tablet.png")} alt="" />
                        </Breakpoint>
                    </div>
                    <div>
                        <Breakpoint tablet only>
                        <img src={require("../assets/Menu/Tablet/Double_Cheeseburger_Tablet.png")} alt="" />
                        </Breakpoint>
                    </div>
                </Carousel>
                </Breakpoint>
                <Breakpoint desktop only>
                <div className="container" style={{overflow: "hidden"}}>
                    <Breakpoint desktop only>
                    <div className="fl w-40" style={{background: "#3ae5fd"}}>
                                <div id="desktop-container">
                                    <div className="hamburgez fl w-100"><strong>HAMBURGEZ</strong></div>
                                    <div className="burgers fl w-25">
                                        <span id="top">BUR</span>
                                        <span>GERS</span>
                                    </div>
                                    <div className="price1 fl w-25">
                                        <ul>
                                            <li><span>SINGLE</span> </li>
                                            <li><span id="double">DOUBLE</span> </li>
                                            <li><span>TRIPLE</span> </li>
                                        </ul>
                                    </div>
                                    <div className="menu fl w-25">
                                        <span id="top2">ME</span>
                                        <span id="nu">NÙ</span>
                                    </div>
                                    <div className="price1m fl w-25">
                                        <ul>
                                            <li><span>SINGLE</span> </li>
                                            <li><span id="double">DOUBLE</span> </li>
                                            <li><span>TRIPLE</span> </li>
                                        </ul>
                                    </div>
                                    <div className="cheeseburgez fl w-100"><strong>CHEESEBURGEZ</strong></div>
                                    <div className="burgers fl w-25">
                                        <span id="top">BUR</span>
                                        <span>GERS</span>
                                    </div>
                                    <div className="price2 fl w-25" >
                                        <ul>
                                            <li><span>SINGLE</span> </li>
                                            <li><span id="double">DOUBLE</span> </li>
                                            <li><span>TRIPLE</span> </li>
                                        </ul>
                                    </div>
                                    <div className="menu fl w-25">
                                        <span id="top2">ME</span>
                                        <span id="nu">NÙ</span>
                                    </div>
                                    <div className="price2m fl w-25">
                                        <ul>
                                            <li><span>SINGLE</span> </li>
                                            <li><span id="double">DOUBLE</span> </li>
                                            <li><span>TRIPLE</span> </li>
                                        </ul>
                                    </div>
                                    <div className="smokeburgez fl w-100"><strong>SMOKEBURGEZ</strong></div>
                                    <div className="burgers fl w-25">
                                        <span id="top">BUR</span>
                                        <span>GERS</span>
                                    </div>
                                    <div className="price3 fl w-25" >
                                        <ul>
                                            <li><span>SINGLE</span> </li>
                                            <li><span id="double">DOUBLE</span> </li>
                                            <li><span>TRIPLE</span> </li>
                                        </ul>
                                    </div>
                                    <div className="menu fl w-25">
                                        <span id="top2">ME</span>
                                        <span id="nu">NÙ</span>
                                    </div>
                                    <div className="price3m fl w-25">
                                        <ul>
                                            <li><span>SINGLE</span> </li>
                                            <li><span id="double">DOUBLE</span> </li>
                                            <li><span>TRIPLE</span> </li>
                                        </ul>
                                    </div>
                                    <div className="bigburgez fl w-100"><strong>BIGBURGEZ</strong></div>
                                    <div className="burgers fl w-25">
                                        <span id="top">BUR</span>
                                        <span>GERS</span>
                                    </div>
                                    <div className="price4 fl w-25" >
                                        <ul>
                                            <li><span>SINGLE</span> </li>
                                            <li><span id="double">DOUBLE</span> </li>
                                            <li><span>TRIPLE</span> </li>
                                        </ul>
                                    </div>
                                    <div className="menu fl w-25">
                                        <span id="top2">ME</span>
                                        <span id="nu">NÙ</span>
                                    </div>
                                    <div className="price4m fl w-25">
                                        <ul>
                                            <li><span>SINGLE</span> </li>
                                            <li><span id="double">DOUBLE</span> </li>
                                            <li><span>TRIPLE</span> </li>
                                        </ul>
                                    </div>
                                    <div className="chickenburgez fl w-100"><strong>CHICKENBURGEZ</strong></div>
                                    <div className="burgers fl w-25">
                                        <span id="top">BUR</span>
                                        <span>GERS</span>
                                    </div>
                                    <div className="price5 fl w-25" >
                                        <ul>
                                            <li><p id="pricechick">{/* left here for layout reasons only */}</p></li>
                                        </ul>
                                    </div>
                                    <div className="menu fl w-25">
                                        <span id="top2">ME</span>
                                        <span id="nu">NÙ</span>
                                    </div>
                                </div>
                            </div>
                            <div className="fl w-20" style={{background: "#3ae5fd"}}>
                                <div className="middle" id="desktop-container">
                                    <div className="fl w-70" id="menubox">
                                        <h1>MENÙ</h1>
                                        <ul>
                                            <li>burger</li>
                                            <li>fries</li>
                                            <li>drink</li>
                                        </ul>
                                    </div>
                                    <div className="ingredients fl w-70">
                                        <div className="fl w-100" id="ingr"><strong>SINGLE:</strong> <p>100gr. di carne</p></div>
                                        <div className="fl w-100" id="ingr"><strong>DOUBLE:</strong> <p>200gr. di carne</p></div>
                                        <div className="fl w-100" id="ingr"><strong>TRIPLE:</strong> <p>300gr. di carne</p></div>
                                    </div>
                                    <div className="fl w-70" id="menubox">
                                        <p>Se scegli il single non ti lamentare se poi è piccolo. Le misure contano. "Sigmund Freud"</p>
                                    </div>
                                </div>
                            </div>
                            <div className="fl w-40" style={{background: "#3ae5fd"}}>
                                <div id="desktop-container">
                                    <div className="hotdog fl w-100"><strong id="hotdog">HOZ DOG</strong></div>
                                    <div className="hotdog-list fl w-40">
                                        <ul>
                                            <li>GOOD BOY</li>
                                            <li>BLONDE GIRL</li>
                                            <li>GOLDEN GOLD</li>
                                            <li>TRY HOT</li>
                                        </ul>
                                    </div>
                                    <div className="descrip fl w-40">
                                        <ul>
                                            <li>ketchup, senape</li>
                                            <li>crauti, ketchup, senape</li>
                                            <li>all with cheddar cream</li>
                                            <li>cheddar cream, bacon, jalapeño</li>
                                        </ul>
                                    </div>
                                    <div className="fries fl w-100"><strong>FRIES</strong></div>
                                    <div className="fries-list fl w-70">
                                        <ul>
                                            <li>FRIES</li>
                                            <li>CHEESEFRIES</li>
                                            {/* <li>CHEESEFRIES + BACON</li> */}
                                        </ul>
                                    </div>
                                    <div className="drinks fl w-100"><strong>DRINKS</strong></div>
                                    <div className="drinks-list fl w-70">
                                        <ul>
                                            <li>COKE-ZERO-FANTA-SPRITE</li>
                                            <li>BIRRA</li>
                                            <li>ACQUA</li>
                                        </ul>
                                    </div>
                                    <div className="milkshake fl w-100"><strong>MILKSHAKE</strong></div>
                                    <div className="milkshake-list fl w-80">
                                        <p>FRAGOLA-VANIGLIA-CIOCCOLATO-BANANA-AMARENA-CARAMELLO SALATO-OREO</p>
                                    </div>
                                </div>
                            </div>
                            </Breakpoint>
                            </div>
                </Breakpoint>
            </div>
        )
    }
}
