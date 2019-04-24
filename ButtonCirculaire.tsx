import React, { memo, Component } from 'react';
import Icon from '@mdi/react'
import { mdiCurrencyEur, mdiSync } from '@mdi/js'

interface IButtonProps {}
const ButtonCirculaire = memo((props: IButtonProps) => {

    return ( <div className="ButtonCirculaire"><div className="ButtonCirculaire__externe"><div className="ButtonCirculaire__interne"><Icon className="icon" path={mdiSync} /></div></div></div>)
})

export default ButtonCirculaire