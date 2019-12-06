import React, { Component } from 'react'
import { Breakpoint } from 'react-socks';
import Headroom from '../../react-headroom'
import Logo from '../Logo/Logo';
import Option from './Option';

import 'tachyons'
import './Proponici.scss'
import Select from './Select';


const style = {
    width: "100vw",
    marginTop: "8rem",
    overflowY: "hidden",
    overflowX: "hidden"
}

const container = {
    display: "flex",
    justifyContent: "space-between"
}

const tablet = {
    width: "100vw",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center"
}
const encode = (data) => {
    const formData = new FormData();

    for (const key of Object.keys(data)) {
        formData.append(key, data[key])
    }

    return formData;
}

export default class Proponici extends Component {
    constructor(props) {
        super(props)
        this.fileInput = React.createRef();

        this.state = {
            name: '',
            tel: '',
            email: '',
            tipoOfferente: 'default',
            address: '',
            civico: '',
            cap: '',
            city: '',
            rProposta: '',
            cannaFumaria: '',
            cannaInstall: '',
            file: '', //no idea dude
            fileUrl: '',
            totaleAffitto: '',
            surface: '',
            vetrine: '',
            message: '',
            terms: '',
            isToggle: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState({ isToggle: !this.state.isToggle });
    }

    

    handleChange = (event) => {
        if(event.target.name === 'terms') {
            if (this.state.terms === 'on') {
                this.setState({ terms: 'off' })
            } else {
                this.setState({ terms: event.target.value })
            }
        } else {
            this.setState({ [event.target.name]: event.target.value });
        }
    }

    handleAttachment = e => {
        this.setState({ [e.target.name]: e.target.files[0] })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        fetch("/", {
            method: "POST",
            // headers: { "Content-Type": "multipart/form-data" },
            body: encode({ "form-name": form.getAttribute("name"), ...this.state })
        })
            .then(() => alert("Success!"))
            .then(() => this.setState({ 
                name: '',
                tel: '',
                email: '',
                tipoOfferente: 'default',
                address: '',
                civico: '',
                cap: '',
                city: '',
                rProposta: '',
                cannaFumaria: '',
                cannaInstall: '',
                file: '', //no idea dude
                totaleAffitto: '',
                surface: '',
                vetrine: '',
                message: '',
                terms: '' 
            }))
            .catch(error => alert(error));
    }

    render() {
        const {name, tel, email, tipoOfferente, address, civico, cap, city, totaleAffitto, surface, vetrine, message} = this.state;
        return (
            <div className="container-proponici">
                <Breakpoint desktop only>
                    <div className="" style={style}>
                        <div style={container}>
                            <h1 className="f1 w-80 i ml5" id="desktop">{`CERCHIAMO IMMOBILI ${!this.state.isToggle ? 1 : 2}/2`}</h1>
                            <a className="title fr w-20 mr5" id="next" onClick={this.handleClick}>{!this.state.isToggle ? <span>&#8250;</span> : <span>&#8249;</span>}</a>
                        </div>
                        <form name="proponici" onSubmit={this.handleSubmit}>
                            <div className="fl w-50" style={{ display: this.state.isToggle ? 'none' : 'block' }}>
                                <div className="">
                                    <label htmlFor="name" className="fl w-100 f2 fw4 b db mb2 mh5">NOME E COGNOME</label>
                                    <input className="w-100 bn pv2 mh5" type="text" name="name" id="name" value={name} onChange={this.handleChange} required />
                                </div>
                                <div className="">
                                    <label htmlFor="tel" className="fl w-100 f2 fw4 b db mb2 mh5">TELEFONO O CELLULARE</label>
                                    <input className="w-100 bn pv2 mh5" type="tel" name="tel" id="tel" value={tel} onChange={this.handleChange} required />
                                </div>
                                <div className="">
                                    <label htmlFor="email" className="fl w-100 f2 fw4 b db mb2 mh5">EMAIL</label>
                                    <input className="w-100 bn pv2 mh5" type="email" name="email" id="email" value={email} onChange={this.handleChange} required />
                                </div>
                                <div className="">
                                    <label htmlFor="type" className="fl w-100 f2 fw4 b db mb2 mh5">TIPO OFFERENTE</label>
                                        <Select onChange={this.handleChange} value={tipoOfferente} style="w-100 bn pv2 mh5">
                                            <Option value='default' description={"Si prega de scegliere una opzione"} />
                                            <Option value='privato' description={"Privato"} />
                                            <Option value='azienda' description={"Azienda"} />
                                            <Option value='agenzia' description={"Agenzia immobiliare"} />
                                        </Select>
                                </div>
                            </div>
                            <div className="fl w-50" style={{ display: this.state.isToggle ? 'none' : 'block' }}>
                                <div className="">
                                    <label htmlFor="address" className="fl w-100 f2 fw4 b db mb2 mh4">INDIRIZZO</label>
                                    <input className="w-100 bn pv2 mh4" type="text" name="address" id="address" value={address} onChange={this.handleChange} required />
                                </div>
                                <div className="">
                                    <label htmlFor="civico" className="fl w-100 f2 fw4 b db mb2 mh4">CIVICO</label>
                                    <input className="w-100 bn pv2 mh4" type="text" name="civico" id="civico" value={civico} onChange={this.handleChange} required />
                                </div>
                                <div className="">
                                    <label htmlFor="cap" className="fl w-100 f2 fw4 b db mb2 mh4">CAP</label>
                                    <input className="w-100 bn pv2 mh4" type="text" name="cap" id="cap" value={cap} onChange={this.handleChange} required />
                                </div>
                                <div className="">
                                    <label htmlFor="city" className="fl w-100 f2 fw4 b db mb2 mh4">CITTÀ</label>
                                    <input className="w-100 bn pv2 mh4" type="text" name="city" id="city" value={city} onChange={this.handleChange} required />
                                </div>
                            </div>
                            <div className="fl w-50" style={{ display: this.state.isToggle ? 'block' : 'none' }}>
                                <div className="page2">
                                    <label htmlFor="rProposta" className="fl w-100 f2 fw4 b db mb2 mh5">IL LOCALE VIENE PROPOSTO IN</label>
                                    <div className="fl w-20">
                                        <input className="w-25 bn pv2" type="radio" name="rProposta" id="locazione" value={'locazione'} onChange={this.handleChange} required />
                                        <label htmlFor="rProposta" className="w-25 radio-b">Locazione</label>
                                    </div>
                                    <div className="fl w-40">
                                        <input className="w-25 bn pv2" type="radio" name="rProposta" id="affitto" value={'affitto_ramo'} onChange={this.handleChange} required />
                                        <label htmlFor="rProposta" className="w-25 radio-b">Affitto ramo d'azienda</label>
                                    </div>
                                </div>
                                <div className="page2">
                                    <label htmlFor="cannaFumaria" className="fl w-100 f2 fw4 b db mb2 mh5">CANNA FUMARIA</label>
                                    <div className="fl w-20">
                                        <input className="w-25 bn pv2" type="radio" name="cannaFumaria" id="sì" value={'yes'} onChange={this.handleChange} required />
                                        <label htmlFor="cannaFumaria" className="w-25 radio-b">Sì</label>
                                    </div>
                                    <div className="fl w-40">
                                        <input className="w-25 bn pv2" type="radio" name="cannaFumaria" id="no" value={'no'} onChange={this.handleChange} required />
                                        <label htmlFor="cannaFumaria" className="w-25 radio-b">No</label>
                                    </div>
                                </div>
                                <div className="page2">
                                    <label htmlFor="cannaInstall" className="fl w-100 f2 fw4 b db mb2 mh5">SE NO, E' POSSIBILE INSTALLARLA?</label>
                                    <div className="fl w-20">
                                        <input className="w-25 bn pv2" type="radio" name="cannaInstall" id="sì" value={'yes'} onChange={this.handleChange} required />
                                        <label htmlFor="cannaInstall" className="w-25 radio-b">Sì</label>
                                    </div>
                                    <div className="fl w-40">
                                        <input className="w-25 bn pv2" type="radio" name="cannaInstall" id="no" value={'no'} onChange={this.handleChange} required />
                                        <label htmlFor="sennofumario" className="w-25 radio-b">No</label>
                                    </div>
                                </div>
                                <div className="">
                                    <label htmlFor="file" className="fl w-100 f2 fw4 b db mb2 mh5">DESIDERA INVIARE PLANIMETRIE O PDF?</label>
                                    <input className="mh5" type="file" id="file" name="file" accept="image/png, image/jpeg, .pdf" onChange={this.handleAttachment} />
                                </div>
                            </div>
                            <div className="fl w-50" style={{ display: this.state.isToggle ? 'block' : 'none' }}>
                                <div className="">
                                    <label htmlFor="tot_affitto" className="fl w-100 f2 fw4 b db mb2 mh4">AFFITTO MENSILE</label>
                                    <input className="w-100 bn pv2 mh4" type="text" name="totaleAffitto" id="tot_affitto" value={totaleAffitto} onChange={this.handleChange} required />
                                </div>
                                <div className="">
                                    <label htmlFor="surface" className="fl w-100 f2 fw4 b db mb2 mh4">SUPERFICIE DISPONIBILE AL PIANO TERRA (MQ)</label>
                                    <input className="w-100 bn pv2 mh4" type="text" name="surface" id="surface" value={surface} onChange={this.handleChange} required />
                                </div>
                                <div className="">
                                    <label htmlFor="vetrine" className="fl w-100 f2 fw4 b db mb2 mh4">NUMERO VETRINE</label>
                                    <input className="w-100 bn pv2 mh4" type="text" name="vetrine" id="vetrine" value={vetrine} onChange={this.handleChange} required />
                                </div>
                                <div className="">
                                    <label htmlFor="message" className="fl w-100 f2 fw4 b db mb2 mh4">MESSAGGIO</label>
                                    <textarea className="w-100 bn pv2 mh4" type="text" name="message" id="message" value={message} onChange={this.handleChange} required />
                                </div>
                                <div className="mh4 mt3">
                                    <input type="checkbox" name="terms" id="checkbox" onChange={this.handleChange} required />
                                    <label htmlFor="terms" className="ml2">I agree to the <a href="#">terms and conditions</a></label>
                                </div>
                                <div><input className="fr" type="submit" value="INVIA" id="submit" /></div>
                            </div>
                        </form>
                    </div>
                </Breakpoint>
                <Breakpoint tablet down>
                        <Headroom style={{
                        paddingTop: "30px"
                    }}>
                            <Logo />
                        </Headroom>
                    <div style={container}>
                        <h1 className="f2 w-80 i ml3 mt3" id="desktop">{`CERCHIAMO IMMOBILI ${!this.state.isToggle ? 1 : 2}/2`}</h1>
                        <a className="title fr w-20 mr5" id="next" onClick={this.handleClick}>{!this.state.isToggle ? <span>&#8250;</span> : <span>&#8249;</span>}</a>
                    </div>
                    <form name="proponici" onSubmit={this.handleSubmit}>
                        <div className="fl w-90" style={{ display: this.state.isToggle ? 'none' : 'block' }}>
                            <div className="" style={tablet}>
                                <label htmlFor="name" className="fl w-90 f2 fw4 b db mb2">NOME E COGNOME</label>
                                <input className="w-100 bn pv2" type="text" name="name" id="name" value={name} onChange={this.handleChange} required />
                            </div>
                            <div className="" style={tablet}>
                                <label htmlFor="tel" className="fl w-90 f2 fw4 b db mb2">TELEFONO O CELLULARE</label>
                                <input className="w-100 bn pv2" type="tel" name="tel" id="tel" value={tel} onChange={this.handleChange} required />
                            </div>
                            <div className="" style={tablet}>
                                <label htmlFor="email" className="fl w-90 f2 fw4 b db mb2">EMAIL</label>
                                <input className="w-100 bn pv2" type="email" name="email" id="email" value={email} onChange={this.handleChange} required />
                            </div>
                            <div className="" style={tablet}>
                                <label htmlFor="type" className="fl w-90 f2 fw4 b db mb2">TIPO OFFERENTE</label>
                                <Select onChange={this.handleChange} value={tipoOfferente} style="w-100 bn pv2">
                                    <Option value='default' description={"Si prega de scegliere una opzione"} />
                                    <Option value='privato' description={"Privato"} />
                                    <Option value='azienda' description={"Azienda"} />
                                    <Option value='agenzia' description={"Agenzia immobiliare"} />
                                </Select>
                            </div>
                        </div>
                        <div className="fl w-90" style={{ display: this.state.isToggle ? 'none' : 'block' }}>
                            <div className="" style={tablet}>
                                <label htmlFor="address" className="fl w-90 f2 fw4 b db mb2 ">INDIRIZZO</label>
                                <input className="w-100 bn pv2 " type="text" name="address" id="address" value={address} onChange={this.handleChange} required />
                            </div>
                            <div className="" style={tablet}>
                                <label htmlFor="civico" className="fl w-90 f2 fw4 b db mb2 ">CIVICO</label>
                                <input className="w-100 bn pv2 " type="text" name="civico" id="civico" value={civico} onChange={this.handleChange} required />
                            </div>
                            <div className="" style={tablet}>
                                <label htmlFor="cap" className="fl w-90 f2 fw4 b db mb2 ">CAP</label>
                                <input className="w-100 bn pv2 " type="text" name="cap" id="cap" value={cap} onChange={this.handleChange} required />
                            </div>
                            <div className="" style={tablet}>
                                <label htmlFor="city" className="fl w-90 f2 fw4 b db mb2 ">CITTÀ</label>
                                <input className="w-100 bn pv2 " type="text" name="city" id="city" value={city} onChange={this.handleChange} required />
                            </div>
                        </div>
                        <div className="fl w-90" style={{ display: this.state.isToggle ? 'block' : 'none' }}>
                            <div className="page2" style={tablet}>
                                <label htmlFor="rProposta" className="fl w-90 f2 fw4 b db mb2 ">IL LOCALE VIENE PROPOSTO IN</label>
                                <div className="fl w-30">
                                    <input className="w-25 bn pv2" type="radio" name="rProposta" id="locazione" value={'locazione'} onChange={this.handleChange}/>
                                    <label htmlFor="rProposta" className="w-25 radio-b">Locazione</label>
                                </div>
                                <div className="fl w-60">
                                    <input className="w-25 bn pv2" type="radio" name="rProposta" id="affitto" value={'affitto_ramo'} onChange={this.handleChange} required />
                                    <label htmlFor="rProposta" className="w-25 radio-b">Affitto ramo d'azienda</label>
                                </div>
                            </div>
                            <div className="page2" style={tablet}>
                                <label htmlFor="cannaFumaria" className="fl w-90 f2 fw4 b db mb2 ">CANNA FUMARIA</label>
                                <div className="fl w-30">
                                    <input className="w-25 bn pv2" type="radio" name="cannaFumaria" id="sì" value={'yes'} onChange={this.handleChange} required />
                                    <label htmlFor="cannaFumaria" className="w-25 radio-b">Sì</label>
                                </div>
                                <div className="fl w-60">
                                    <input className="w-25 bn pv2" type="radio" name="cannaFumaria" id="no" value={'no'} onChange={this.handleChange} required />
                                    <label htmlFor="cannaFumaria" className="w-25 radio-b">No</label>
                                </div>
                            </div>
                            <div className="page2" style={tablet}>
                                <label htmlFor="cannaInstall" className="fl w-90 f2 fw4 b db mb2 ">SE NO, E' POSSIBILE INSTALLARLA?</label>
                                <div className="fl w-30">
                                    <input className="w-25 bn pv2" type="radio" name="cannaInstall" id="sì" value={'yes'} onChange={this.handleChange} required />
                                    <label htmlFor="cannaInstall" className="w-25 radio-b">Sì</label>
                                </div>
                                <div className="fl w-60">
                                    <input className="w-25 bn pv2" type="radio" name="cannaInstall" id="no" value={'no'} onChange={this.handleChange} required />
                                    <label htmlFor="sennofumario" className="w-25 radio-b">No</label>
                                </div>
                            </div>
                            <div className="" style={tablet}>
                                <label htmlFor="file" className="fl w-90 f2 fw4 b db mb2 ">DESIDERA INVIARE PLANIMETRIE O PDF?</label>
                                <input className="file" type="file" id="file" name="file" accept="image/png, image/jpeg, .pdf" onChange={this.handleAttachment} />
                            </div>
                        </div>
                        <div className="fl w-50" style={{ display: this.state.isToggle ? 'block' : 'none' }}>
                            <div className="" style={tablet}>
                                <label htmlFor="tot_affitto" className="fl w-90 f2 fw4 b db mb2 ">AFFITTO MENSILE</label>
                                <input className="w-100 bn pv2 " type="text" name="tot_affitto" id="tot_affitto" value={totaleAffitto} onChange={this.handleChange} required />
                            </div>
                            <div className="" style={tablet}>
                                <label htmlFor="surface" className="fl w-90 f2 fw4 b db mb2 ">SUPERFICIE DISPONIBILE AL PIANO TERRA (MQ)</label>
                                <input className="w-100 bn pv2 " type="text" name="surface" id="surface" value={surface} onChange={this.handleChange} required />
                            </div>
                            <div className="" style={tablet}>
                                <label htmlFor="vetrine" className="fl w-90 f2 fw4 b db mb2 ">NUMERO VETRINE</label>
                                <input className="w-100 bn pv2 " type="text" name="vetrine" id="vetrine" value={vetrine} onChange={this.handleChange} required />
                            </div>
                            <div className="" style={tablet}>
                                <label htmlFor="message" className="fl w-90 f2 fw4 b db mb2 ">MESSAGGIO</label>
                                <textarea className="w-100 bn pv2 " type="text" name="message" id="message" value={message} onChange={this.handleChange} required />
                            </div>
                            <div className="mt3" id="terms">
                                <input type="checkbox" name="terms" id="checkbox" onChange={this.handleChange} required />
                                <label htmlFor="terms" className="ml2">I agree to the <a href="#">terms and conditions</a></label>
                            </div>
                        </div>
                        <div className="fl w-100" style={{ display: this.state.isToggle ? 'block' : 'none' }}><input className="fr" type="submit" value="INVIA" id="submit" /></div>
                    </form>
                </Breakpoint>
            </div>
        )
    }
}
