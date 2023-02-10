import './footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__access'>
        <h1>Do you want to step in to the future before others</h1>
        <div className='footer__access--button'>
          <p>Request Early Access</p>
        </div>

      </div>
      <div className='footer__services'>
        <div className='footer__services--gpt3'>
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='footer__services--terms'>
          <Links title={"Links"} firstLink={"Overons"} secLink={"Social Media"} thLink={"Counters"} fourthLink={"Counters"} />
          <Links title={"Company"} firstLink={"Terms & Conditions"} secLink={"Privacy Policy"} thLink={"Contact"} />
          <Links title={"Get in touch"} firstLink={"Crechterwoord K12 182 DK Alknjkcb"} secLink={"085-132567"} thLink={"info@payme.net"} />
        </div>
      </div>

      <p className='end'>© 2023 AudioGPT-3. All rights reserved. DEMO !!!!important: This is ficticious, all resources that I used are in Readme or <a target={"_blank"} href='https://google-research.github.io/seanet/musiclm/examples/'>click here</a> to view MusiscLM of Google </p>

    </div>
  )
}

const Links = ({ title, firstLink, secLink, thLink, fourthLink }) => {
  return (
    <div className='links'>
      <h3>{title}</h3>
      <p>{firstLink}</p>
      <p>{secLink}</p>
      <p>{thLink}</p>
      <p>{fourthLink}</p>
    </div>
  )
}

export default Footer