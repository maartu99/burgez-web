import React, { Component } from 'react'
import posed from 'react-pose'
import './Arrow.scss'

const Animated = posed.div({
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
});

const style = {
    width: "0",
    height: "0",
    borderLeft: "20px solid transparent",
    borderRight: "20px solid transparent",
    borderTop: "20px solid #f00",
    position: "absolute",
    bottom: "15vh",
    left: "45vw"
}

export default class Arrow extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = { isVisible: true }
    // }
    // componentDidMount() {
    //     setInterval(() => {
    //         this.setState({ isVisible: !this.state.isVisible });
    //     }, 1000);
    // }
    render() {
        // const { isVisible } = this.state;
        // setInterval(() => {
        //     this.setState({ isVisible: !this.state.isVisible });
        // }, 1000);
        // return <div className="arrow-down" style={style} pose={isVisible ? 'visibile' : 'hidden'} />
        return <div className="arrow-down" style={style} />
    }
}
