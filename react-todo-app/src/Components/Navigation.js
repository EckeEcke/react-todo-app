import React, {useState} from "react";



export default function Navigation(){

    const [menuShown, toggleShowMenu] = useState("no-show");
    const [burgerBackground, toggleBurger] = useState("hamburger");

    function showMenu(event){
        if (menuShown === "no-show") {
        toggleShowMenu("show-menu");
        toggleBurger("greenburger");
        }
        
        if(menuShown === "show-menu"){
        toggleShowMenu("no-show");
        toggleBurger("hamburger");
        }
    }

    return(
        <nav>
 
        <button className={burgerBackground} onClick={showMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </button>
        <div id="burger-menu" show={menuShown} className={menuShown}>
          <ul>
            <li>
              <a href="https://eckeecke.github.io/index.html">Home</a>
            </li>

            <li>
              <a href="https://nifty-hopper-c1da01.netlify.app/" target="_blank">React Travel Blog</a>
            </li>

            <li>
              <a href="https://eckeecke.github.io/shooter.html">JS Space Shooter</a>
            </li>
 
            <li>
              <a href="https://eckeecke.github.io/pong.html">JS Pong</a>
            </li>

            <li>
              <a href="https://adoring-galileo-71fde2.netlify.app/">React Todo App</a>
            </li>
          </ul>
        </div>

      </nav>
    )
}