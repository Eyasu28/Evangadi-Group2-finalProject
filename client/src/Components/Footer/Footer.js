import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='container-fluid footer'>
       <div className='container'>
       <div className='row'>
                <div className='links col-sm-12 col-md-4'>
                    <img src='https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-footer.png' alt=''/>
                    <ul>
                        <li>
                            <a className='footer_link'href='https://www.facebook.com/EthiopiansNetwork'>
                            <i class="social_facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a className='footer_link' href='https://www.instagram.com/evangaditech/'>
                            <i class="social_instagram "></i>
                            </a>
                        </li>
                        <li>
                            <a className='footer_link' href='https://www.youtube.com/c/weareethiopians'>
                            <i class="social_youtube "></i></a>
                        </li>
                    </ul>
                </div>
                <div className='useful_links col-sm-12 col-md-4'>
                    <h5>Useful Link</h5>
                    <ul>
                        <li><a className='footer_link' href='https://www.evangadi.com/explained'>
                            How it Works</a></li>
                        <li><a className='footer_link' href='https://www.evangadi.com/explained'>
                            Terms of Service</a></li>
                        <li><a className='footer_link' href='https://www.evangadi.com/explained'>
                            Privacy Policy</a></li>
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
    </div>
  )
}

export default Footer