import React, { Component } from 'react'
import './Contact.scss'
import 'tachyons'
import { Breakpoint } from 'react-socks';
import LogoMain from '../Logo/LogoMain';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => alert("Success!"))
            .then(() => this.setState({ name: '', email: '', subject: '', message: '' }))
            .catch(error => alert(error));
        event.preventDefault();
    }

    render() {
        const { name, email, subject, message } = this.state;
        return (
            <div>
                <Breakpoint desktop only>
                    <div className="wrapper">
                        <h1 className="f1 i" id="desktop">CONTACT</h1>
                        <form className="landscape-tablet" onSubmit={this.handleSubmit}>
                            <div className="desktop">
                                <label htmlFor="name" className="fl w-90 f2 fw4 b db mb2 ">NOME E COGNOME</label>
                                <input className="w-100 bn pv2" type="text" name="name" id="name" value={name} onChange={this.handleChange} required />
                            </div>
                            <div className="desktop">
                                <label htmlFor="email" className="fl w-90 f2 fw4 b db mb2 ">EMAIL</label>
                                <input className="w-100 bn pv2" type="email" name="email" id="email" value={email} onChange={this.handleChange} required />
                            </div>
                            <div className="desktop">
                                <label htmlFor="subject" className="fl w-90 f2 fw4 b db mb2 ">OGGETTO</label>
                                <input className="w-100 bn pv2" type="text" name="subject" id="subject" value={subject} onChange={this.handleChange} required />
                            </div>
                            <div className="desktop">
                                <label htmlFor="message" className="fl w-90 f2 fw4 b db mb2 ">MESSAGGIO</label>
                                <textarea className="w-100 bn pv2" type="text" name="message" id="message" value={message} onChange={this.handleChange} required />
                            </div>
                            <div><input className="fr" type="submit" value="INVIA" id="submit" /></div>
                        </form>
                    </div>
                </Breakpoint>
                <Breakpoint tablet down>
                    <LogoMain />
                    <div className="wrapper">
                        <h1 className="f1 i ml4">CONTACT</h1>
                        <form className="" onSubmit={this.handleSubmit}>
                            <div className="tablet">
                                <label htmlFor="name" className="fl w-90 f2 fw4 b db mb2">NOME E COGNOME</label>
                                <input className="w-90 bn pv2" type="text" name="name" id="name" value={name} onChange={this.handleChange} />
                            </div>
                            <div className="tablet">
                                <label htmlFor="email" className="fl w-90 f2 fw4 b db mb2">EMAIL</label>
                                <input className="w-100 bn pv2" type="email" name="email" id="email" value={email} onChange={this.handleChange} />
                            </div>
                            <div className="tablet">
                                <label htmlFor="subject" className="fl w-90 f2 fw4 b db mb2">OGGETTO</label>
                                <input className="w-100 bn pv2" type="text" name="subject" id="subject" value={subject} onChange={this.handleChange} />
                            </div>
                            <div className="tablet">
                                <label htmlFor="message" className="fl w-90 f2 fw4 b db mb2">MESSAGGIO</label>
                                <textarea className="w-100 bn pv2" type="text" name="message" id="message" value={message} onChange={this.handleChange} />
                            </div>
                            <div><input className="fr" type="submit" value="INVIA" id="submit" /></div>
                        </form>
                    </div>
                </Breakpoint>
            </div>
        )
    }
}
