import React from 'react'
import '../assets/button.css'

const Button = ({name, title, color, onClick, length, fontSize}) => {
    
    const style = {
        width: length,
        fontSize: fontSize,
    }
    return (
        <>
            <button type='button' id={name} style={style} onClick={onClick}>{ title }</button>
        </>
    )
}

export default Button
