import React, { memo, Component } from 'react';
import {RadioboxMarked} from 'mdi-react';
interface IButtonProps {}
const ButtonCirculaire = memo((props: IButtonProps) => {

    return ( <div className="ButtonCirculaire"><div className="ButtonCirculaire__externe"><div className="ButtonCirculaire__interne"><RadioboxMarked /></div></div></div>)
})

export default ButtonCirculaire