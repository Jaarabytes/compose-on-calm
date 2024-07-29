// Simple spinning react js atom. Should keep the users engaged instead of a loading text
import React from "react";
import { ReactComponent as Logo } from './logo.svg'

export const SpinningAtom = () => {
  return (
       <div className="App-logo" style={{width: "50%", height:"50%", marginInline:"auto"}}>
          <Logo />
        </div>
  )
}
