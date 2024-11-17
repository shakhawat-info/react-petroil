import React from 'react'

const Header = () => {
  return (
    <header id="head">
        <div className="container">
            <div className="headbox">
                <div className="headcontact">
                <a href="mailto: mail@yourcompany.com"><img className='headicon' src="svg/mail.svg" alt="" /><span>mail@yourcompany.com</span></a>
                <a href="tel: +896 120 5889 "><img className='headicon' src="svg/call.svg" alt="" /><span>+896 120 5889 (Toll free)</span></a>
                </div>
                <div className="headicon">
                    <ul>
                        <li><a href="#"><img className='headicon' src="svg/facebook.svg" alt="facebook" /></a></li>
                        <li><a href="#"><img className='headicon' src="svg/twitter.svg" alt="twitter" /></a></li>
                        <li><a href="#"><img className='headicon' src="svg/linkedin.svg" alt="linkedin" /></a></li>
                        <li><a href="#"><img className='headicon' src="svg/insta.svg" alt="insta" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header