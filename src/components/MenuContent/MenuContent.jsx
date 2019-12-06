import React, { Component } from 'react'

export default class MenuContent extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div id="mobile-container">
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
                </div>

                </div>
                )
            }
        }
