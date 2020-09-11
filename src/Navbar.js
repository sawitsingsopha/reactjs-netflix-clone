import React,{useState,useEffect} from 'react'
import './Navbar.css'


function Navbar() {
    
    const [show, hendleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll",()=>{
                if (window.scrollY > 100) {
                    hendleShow(true);
                } else {
                    hendleShow(false);
                }
        })
      return () => {
        window.removeEventListener("scroll");
      };
    }, []);

    return (
      <div className={`nav ${show && "nav__black"}`}>
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Logo_Netflix.png/1200px-Logo_Netflix.png"
          alt="Netflix Logo"
        />
        <img
          className="nav__avatar"
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt="Netflix Avater"
        />
      </div>
    );
}

export default Navbar
