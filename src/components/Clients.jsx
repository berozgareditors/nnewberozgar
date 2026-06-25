import { motion } from "framer-motion";
import { clients } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import logikLogo from '../assets/Companies/logik-logo.png'
import badigaddiLogo from '../assets/Companies/Badigaddi.png'
import kyppLogo from '../assets/Companies/kyppwhite.png'
import moDigitalLogo from '../assets/Companies/modigital.png'
import drinkrentLogo from '../assets/Companies/dplogo.png'
import soelLogo from '../assets/Companies/SOELLogo.png'

export default function Clients() {
   return (
        <div className="Companies">
            <div className="content">
                <h3>WORKED WITH MULTIPLE STARTUPS</h3>
                <h2>DELIVERED 100% SATISFIED RESULTS </h2>
            </div>
        <div className="company-container">
          <div className="company-logo">
            {/* <!-- Your repeating content goes here --> */}
            <img className='companyLogos' src={logikLogo} alt="" />
            <img className='companyLogos' src={badigaddiLogo} alt="" />
            <img className='companyLogos' src={kyppLogo} alt="" />
            <img className='companyLogos' src={moDigitalLogo} alt="" />
            <img className='companyLogos' src={drinkrentLogo} alt="" />
            <img className='companyLogos' src={soelLogo} alt="" />
          </div>
          <div className="company-logo">
            {/* Duplicate your repeating content here */}
            <img className='companyLogos' src={logikLogo} alt="" />
            <img className='companyLogos' src={badigaddiLogo} alt="" />
            <img className='companyLogos' src={kyppLogo} alt="" />
            <img className='companyLogos' src={moDigitalLogo} alt="" />
            <img className='companyLogos' src={drinkrentLogo} alt="" />
            <img className='companyLogos' src={soelLogo} alt="" />
          </div>
        </div>
      </div>
  )
}
