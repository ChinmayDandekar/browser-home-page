import React from 'react'
import Button from './Button'
import '../assets/addsite.css'

const InputComponent = ({Function, className, Name1, Name2, Placeholder1, Placeholder2, ButtonTitle, ButtonSize, ButtonLength, formName, ButtonName, InputWidth=170 }) => {
    const inputWidth = {
       width: InputWidth,
   }
   
    return (
        <form id={ formName } name={formName}>
            <input style={inputWidth} className={className} name={Name1} type="text" placeholder={ Placeholder1 }/>
            <input style={inputWidth} className={className} name={Name2} type="text" placeholder={ Placeholder2 }/>
            <Button name={ ButtonName }title={ButtonTitle} fontSize={ButtonSize} onClick={ Function } length={ ButtonLength }/>
        </form>
    )
}

export default InputComponent
