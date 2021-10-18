import React, { Component } from 'react'

export class BlackBg extends Component {
    render() {

        const blackbg = {
            position: 'absolute',
            top: '0',
            left:'0',
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
            opacity: '60%',
            zIndex: '-1'
        };
        return (
            
            <div className="black-bg" style={blackbg}>
                
            </div>
        )
    }
}


export default BlackBg
