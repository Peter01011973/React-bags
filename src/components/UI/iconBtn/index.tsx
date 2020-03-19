import React from 'react'

interface Props {
    iconType: string,
    disabled: boolean,
    onClickHandler: any    
}

const IconBtn: React.FC<Props> = ({iconType, disabled, onClickHandler}) => {
    let btnClass: string = ''; 
    switch (iconType) {
        case 'plus': btnClass = disabled ? 'btnDisable fa fa-plus-circle' : "plus fa fa-plus-circle"; break;
        case 'minus': btnClass = disabled ? 'btnDisable fa fa-minus-circle' : "minus fa fa-minus-circle"; break;
        default: break;
    }  
    
    return <i className={btnClass} onClick={() =>{ if (!disabled) onClickHandler()}}></i>
}

export default IconBtn
