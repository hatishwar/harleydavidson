import navflag from './assets/india.png';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";



function FooterNav(){
    return(
        <div className="container-fluid" id="footernav">
            <div className="row py-5" id="fnlogo">
            <div className="col-10 offset-1">
                <h1>Harley <span>-</span> Davidson</h1>
                <hr></hr>
            </div>
        </div>


        <div className="row py-5" id="fnmid">
            <div className="col-3 offset-1">
                <p className="fnheads my-2">LEARN TO RIDE</p>
                &#128279; <a href="">Motorcycle Training</a>

                <p className="fnheads my-2">CUSTOMER SUPPORT</p>
                &#128279; <a href=''>Contact Us</a> <br></br>
                &#128279; <a href=''>Offers</a>
            </div>
            <div className="col-3 offset-1">
            <p className="fnheads my-2">MOTORCYCLE SERVICES</p>
            &#128279; <a href=''>Authorised Service</a> <br></br>
            &#128279; <a href=''>Owner's Manuals</a><br></br>
            &#128279; <a href=''>Maintenance Schedules</a><br></br>
            &#128279; <a href=''>Software Updates</a><br></br>
            &#128279; <a href=''>Roadside Assistance</a><br></br>

            <p className="fnheads my-2">FINANCING</p>
            &#128279; <a href=''>Motorcycle Financing</a><br></br>
            &#128279; <a href=''>Apply for Financing</a><br></br>
            &#128279; <a href=''>Apply for Credit Card</a><br></br>

            </div>
            <div className="col-3">
            <p className="fnheads my-2">ABOUT US</p>
            &#128279; <a href=''>Our Company</a> <br></br>
            &#128279; <a href=''>Careers</a><br></br>
            &#128279; <a href=''>Investors</a><br></br>
            &#128279; <a href=''>Sustainability</a><br></br>
            &#128279; <a href=''>Become a Dealer</a><br></br>
            &#128279; <a href=''>Factory Tours</a><br></br>
            &#128279; <a href=''>Museum</a><br></br>
            </div>
        </div>

        <div className="row terms">
            <div className="col-10 offset-1">
                <hr></hr>
                {/* using html entity code for non-breaking space - nbsp */}
            <a href=''>Sitemap</a>&nbsp;|&nbsp;<a href=''>Disclaimer</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href=''>Terms of Use</a>&nbsp;|&nbsp;<a href=''>Privacy Policy</a>&nbsp;|&nbsp;<a href=''>Cookies Policy</a>&nbsp;|&nbsp;<a href=''>Manage Cookie Prefrence</a>
            
            <hr></hr>

            </div>
        </div>

        <div className="row text-center py-5" id='fnlast'>
            <div className="col-3 offset-1">

                <select>
                    <option>India - English</option>
                </select>
            </div>
            <div className="col-4">

                <footer>Copyright 2024 &copy; Harley Davidson <br></br>Clone Developed by Hatishwar Singh <br></br>
                Clone inspired from <a href="https://www.harley-davidson.com/">Harley Davidson Website</a> as of Oct2024.
                </footer>
            </div>
            <div className="col-3 offset-1" id='nfsocial'>
            <FaFacebookF /> 
            <FaTwitter />
            <AiFillInstagram />
            <FaYoutube />
                </div>
        </div>

        </div>
    )
}

export default FooterNav;