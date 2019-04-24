import React, { memo, Component } from 'react';

interface IButtonProps {}
const ButtonSimple = memo((props: IButtonProps) => {

    return ( <div className="ButtonSimple">button simple</div>)
})

export default ButtonSimple