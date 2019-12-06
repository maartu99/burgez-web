import React, { Component } from 'react'
import { Breakpoint } from 'react-socks';
import Headroom from '../../react-headroom'
import Logo from '../Logo/Logo';
import {storageRef} from '../../firebase/firebase.utils'

import './Lavora.scss'

const encode = (data) => {
    const formData = new FormData();

    for (const key of Object.keys(data)) {
        formData.append(key, data[key])
    }

    return formData;
}

export default class Lavora extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '', 
            file: '',
            fileUrl: ''
        }
    }

    // uploadFile = (file, callback) => {
    //     const uploadTask = storageRef.child(`cv/${this.state.file.name}`).put(this.state.file);
    //     console.log(uploadTask.snapshot.downloadURL)
    //     uploadTask.on('state_changed', (snapshot) => {
    //         let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //         console.log(`Upload is ${progress}% done`);
    //     }, (error) => {
    //         console.log(error);
    //     }, () => {
    //         console.log('file successfully uploaded');
    //     })
    // }

    uploadFile = (file, callback) => {
        const fileName = file.name;
        const uploadTask = storageRef.child(`cv/${fileName}`).put(file);
        uploadTask.on('state_changed', snapshot => {
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            callback({progress})
            // console.log(`Upload is ${progress}% done`);
        }, error => {
            callback({error})
            // console.log(error);
        }, () => {
            let downloadURL = uploadTask.snapshot.ref.getDownloadURL()
            callback({downloadURL})
            // console.log('file successfully uploaded');
        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleAttachment = e => {
        const file = e.target.files[0]
        this.setState({ [e.target.name]: file })
        this.uploadFile(file, result => {
            if (result.progress) {
                console.log(result.progress);
                // console.log(`Upload is ${progress}% done`);
                return;
            }

            if (result.downloadURL) {
                result.downloadURL.then(downloadURL => this.setState({ fileUrl: downloadURL}))
            }

            if (result.error) {
                console.log(result.error)
            }
        })
    }

    // handleAttachment = e => {
    // const uploadTask = storageRef.child(`cv/${e.target.name}`).put(e.target.files[0]);

    // uploadTask.on('state_changed', (snapshot) => {
    //     let progress = (snapshot.bytesTransferred / snapshot.totalBytes) *100;
    //     console.log(`Upload is ${progress}% done`);
    // }, (error) => {
    //     console.log(error);
    // }, () => {
    //     console.log('file successfully uploaded');
    // })

    // }

    handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        fetch("/", {
            method: "POST",
            // headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": form.getAttribute("name"), ...this.state })
            // body: encode({ "form-name": form.getAttribute("name"), "name": this.state.name, "email": this.state.email, "subject": this.state.subject, "message": this.state.message, "fileUrl": this.state.fileUrl })
        })
            .then(() => alert("Success!"))
            .then(() => this.setState({ name: '', email: '', subject: '', message: '', file: '', fileUrl: '' }))
            .catch(error => alert(error))
    }

    render() {
        const { name, email, subject, message } = this.state;
        return (
            <div className="container-lavora">
                <Breakpoint desktop only>
                    <div className="w-100 mobile-landscape">
                        <div className="main fl w-50 ml5 mr3">
                            <p>Vuoi essere una o uno dello staff di <strong>BURGEZ</strong>?
                            Ti piacerebbe avere uno stipendio e divertirti mentre lavori?
                            Sì? Bene, allora devi sapere che il cliente che vorrai servire...</p>
                            <div className="shift">
                                <h2>La prima volta entra da BURGEZ per</h2>
                                <span>la comunicazione o il passaparola.</span>
                                <h2>La seconda volta torna per</h2>
                                <span>la qualità del burger.</span>
                                <h2>La terza volta torna per</h2>
                                <span>l'educazione del personale.</span>
                            </div>
                            <p>Sì proprio grazie alla tua simpatia e alla tua educazione.
                            Il 33,3% periodico della riuscita di <strong>BURGEZ</strong> è rappresentata dalla
                                    customer experience e, comunque, al di là dei numeri,
                                    il capitale umano spesso rappresenta il 100% della riuscita di un
                                    progetto di retail sales. Non c'è nulla di più bello di essere coccolati
                                    e trattati come esseri umani.
                            </p>
                            <p><strong>BURGEZ</strong> non cerca ragazzi con esperienza ma ragazzi simpatici,
                            educati, gentili e sempre con il sorriso. L'esperienza si construisce,
                            la gentilezza e la simpatia no. A <strong>BURGEZ</strong> interessano i ragazzi
                                    più simpatici e gentili del mondo e se pensi di essere una o
                                    uno di loro non esitare a scriverci e a farti conoscere.
                            </p>
                        </div>
                        <div className="fl w-40" style={{ overflow: "hidden" }} id="contactform">
                            <div className="wrapper">
                                <h1 className="f1 i" id="desktop">CONTACT</h1>
                                <form name="lavora" onSubmit={this.handleSubmit}>
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
                                    <div className="">
                                        <label htmlFor="file" className="fl w-100 f2 fw4 b db mb2">CARICA IL TUO CV</label>
                                        <input type="file" id="file" name="file" accept="image/png, image/jpeg, .pdf" onChange={this.handleAttachment} required />
                                    </div>
                                    <div><input className="fr" type="submit" value="INVIA" id="submit" /></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Breakpoint>
                <Breakpoint tablet down>
                <Headroom style={{
                        paddingTop: "30px"
                    }}>
                    <Logo />
                </Headroom>
                    <div className="main" id="text_portrait">
                        <p>Vuoi essere una o uno dello staff di <strong>BURGEZ</strong>?
                        Ti piacerebbe avere uno stipendio e divertirti mentre lavori?
                        Sì? Bene, allora devi sapere che il cliente che vorrai servire...
                        </p>
                        <div className="shift">
                            <h2>La prima volta entra da BURGEZ per</h2>
                            <span>la comunicazione o il passaparola.</span>
                            <h2>La seconda volta torna per</h2>
                            <span>la qualità del burger.</span>
                            <h2>La terza volta torna per</h2>
                            <span>l'educazione del personale.</span>
                        </div>
                        <p>Sì proprio grazie alla tua simpatia e alla tua educazione.
                            Il 33,3% periodico della riuscita di <strong>BURGEZ</strong> è rappresentata dalla
                            customer experience e, comunque, al di là dei numeri,
                            il capitale umano spesso rappresenta il 100% della riuscita di un
                            progetto di retail sales. Non c'è nulla di più bello di essere coccolati
                            e trattati come esseri umani.
                            </p>
                        <p><strong>BURGEZ</strong> non cerca ragazzi con esperienza ma ragazzi simpatici,
                        educati, gentili e sempre con il sorriso. L'esperienza si construisce,
                            la gentilezza e la simpatia no. A <strong>BURGEZ</strong> interessano i ragazzi
                            più simpatici e gentili del mondo e se pensi di essere una o
                            uno di loro non esitare a scriverci e a farti conoscere.
                            </p>
                    </div>
                    <div className="wrapper" id="tablet-down">
                        <h1 className="f1 i ml4">CONTACT</h1>
                        <form name="lavora" onSubmit={this.handleSubmit}>
                            <div className="tablet">
                                <label htmlFor="name" className="fl w-90 f2 fw4 b db mb2">NOME E COGNOME</label>
                                <input className="w-90 bn pv2" type="text" name="name" id="name" value={name} onChange={this.handleChange} required />
                            </div>
                            <div className="tablet">
                                <label htmlFor="email" className="fl w-90 f2 fw4 b db mb2">EMAIL</label>
                                <input className="w-100 bn pv2" type="email" name="email" id="email" value={email} onChange={this.handleChange} required />
                            </div>
                            <div className="tablet">
                                <label htmlFor="subject" className="fl w-90 f2 fw4 b db mb2">OGGETTO</label>
                                <input className="w-100 bn pv2" type="text" name="subject" id="subject" value={subject} onChange={this.handleChange} required />
                            </div>
                            <div className="tablet">
                                <label htmlFor="message" className="fl w-90 f2 fw4 b db mb2">MESSAGGIO</label>
                                <textarea className="w-100 bn pv2" type="text" name="message" id="message" value={message} onChange={this.handleChange} required />
                            </div>
                            <div className="tablet">
                                <label htmlFor="file" className="fl w-90 f2 fw4 b db mb2">CARICA IL TUO CV</label>
                                <input className='ml4' type="file" id="file" name="file" accept="image/png, image/jpeg, .pdf" onChange={this.handleAttachment} required />
                            </div>
                            <div><input className="fr" type="submit" value="INVIA" id="submit" /></div>
                        </form>
                    </div>
                </Breakpoint>
            </div>
        )
    }
}
