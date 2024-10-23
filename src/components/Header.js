import React from "react";
import logo from "../images/logo.png"

export default function Header(){
return(
  <header className="header">
    <img className="header--image" src={logo}/>
    <h2 className="header--title">Meme Generator</h2>
    <h4 className="header--project">React Cource - Project 3</h4>
  </header>
)
}