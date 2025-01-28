import { useState } from 'react'
import E_logo from './assets/e-logo.png'
import header_1 from './assets/ASCII-art-header.png'
import header_2 from './assets/ASCII-art-head-header.png'
import Typewriter from "./assets/components/typeingEffect";
import Navbar from "./assets/components/navbar";
import ContactMe from "./assets/components/contanctMeForm";
import ContactMeEntries from "./assets/components/contactFormEntries";

import './App.css'

function App() {
  let textSpeed = 25;
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <html> */}
          <Navbar/>
        {/* <body> */}
          <div id="app-content">

            <div id="terminal">
              <div className="terminal-child terminal-background">
                <img id="header-img" src={header_1} alt="background image"/>
              </div>
              <div className="terminal-child terminal-text">
                <Typewriter text="  ______    _               __      __        _                   "  delay={textSpeed}/>  
                <Typewriter text=" |  ____|  | |              \ \    / /       | |                  "  delay={textSpeed}/>  
                <Typewriter text=" | |__   __| | __ _  __ _ _ _\ \  / /__ _ __ | |_ _   _ _ __ __ _ "  delay={textSpeed}/>  
                <Typewriter text=" |  __| / _` |/ _` |/ _` | '__\ \/ / _ | '_ \| __| | | | '__/ _` |"  delay={textSpeed}/>  
                <Typewriter text=" | |___| (_| | (_| | (_| | |   \  /  __| | | | |_| |_| | | | (_| |"  delay={textSpeed}/>  
                <Typewriter text=" |______\__,_|\__, |\__,_|_|    \/ \___|_| |_|\__|\__,_|_|  \__,_|"  delay={textSpeed}/>  
                <Typewriter text="               __/ |"                                                delay={textSpeed}/>  
                <Typewriter text="              |___/ "                                                delay={textSpeed}/>  
                <Typewriter text=" __  __      _                _               "                      delay={textSpeed}/>  
                <Typewriter text="|  \/  |    | |              | |              "                      delay={textSpeed}/>  
                <Typewriter text="| \  / | ___| | ___ _ __   __| |_ __ ___ ____ "                      delay={textSpeed}/>  
                <Typewriter text="| |\/| |/ _ | |/ _ | '_ \ / _` | '__/ _ |_  / "                      delay={textSpeed}/>  
                <Typewriter text="| |  | |  __| |  __| | | | (_| | | |  __// /  "                      delay={textSpeed}/>  
                <Typewriter text="|_|  |_|\___|_|\___|_| |_|\__,_|_|  \___/___| "                      delay={textSpeed}/>  
              </div>
            </div>
            <ContactMeEntries/>
            <ContactMe/>
          </div>
        {/* </body> */}
      {/* </html> */}
    </>
  )
}

export default App
