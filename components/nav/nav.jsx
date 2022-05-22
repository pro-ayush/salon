import React from 'react'
import Image from 'next/image'


const NavBar = () => {
  return (
    <React.Fragment>
        <style jsx>
            {
                `
                 .navContainer {
                        
                        
                        height : 7rem;

                        // background:#0000aa;

                    }
                    
                    ul {
                        display:flex;
                        justify-content : center;
                        align-items : center;
                        list-style : none;

                        // color : white;
                    }

                    ul li {
                        padding-right : 40px;
                        padding-left : 40px;

                        font-size : 1.4rem;
                    }
                `
            }
        </style>

            <div className="navContainer">
                
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li><Image src={"/resources/logo.png"} width={90} height={90} /></li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </div>
    </React.Fragment>
  )
}

export default NavBar