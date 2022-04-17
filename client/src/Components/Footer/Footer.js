import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='container-fluid footer'>
        <div className='row'>
                <div className='links col-sm-12 col-md-4'>
                    <img src='https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-footer.png' alt=''/>
                </div>
                <div className='useful_links col-sm-12 col-md-4'>
                    <h5>Useful Link</h5>
                    <ul>
                        <li><a href='https://www.evangadi.com/explained'>How it Works</a></li>
                        <li><a href='https://www.evangadi.com/explained'>Terms of Service</a></li>
                        <li><a href='https://www.evangadi.com/explained'>Privacy Policy</a></li>
                    </ul>
                </div>
                <div className='contact_info col-sm-12 col-md-4'>
                    <h5>Contact Info</h5>
                    <ul>
                        <li>Evangadi Networks</li>
                        <li>support@evangadi.com</li>
                        <li>+1-202-386-2702</li>
                    </ul>
                </div>
        </div>
    </div>
  )
}

export default Footer