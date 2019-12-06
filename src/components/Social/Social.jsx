import React, { Component } from 'react';
import './Social.css'
import { Breakpoint } from 'react-socks';

export default class Social extends Component {
    render() {
        return (
            <div>
            <Breakpoint xlmobile down>
                <footer className="mobile">
                    <a href="https://www.instagram.com/instaburgez/" target="_blank">INSTAGRAM</a> / <a href="https://it-it.facebook.com/burgezmi/" target="_blank">FACEBOOK</a>
                </footer>
            </Breakpoint>
            <Breakpoint tablet up>
                <footer className="rest">
                    <a href="https://www.instagram.com/instaburgez/" target="_blank">INSTAGRAM</a> / <a href="https://it-it.facebook.com/burgezmi/" target="_blank">FACEBOOK</a>
                </footer>
            </Breakpoint>
            </div>
        )
    }
}
