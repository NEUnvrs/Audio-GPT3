import './possibility.css'
import {possibility} from './img'

const Possibility = () => {
  return (
    <div className='possible'>
      <div className='possible__img'>
        <img src={possibility} alt="possibility" />
      </div>
      <div className='possible__text'>
        <h1 className='possible__text--title'>The possibilities are beyond your imagination</h1>
        <p className='possible__text--description'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <a href="#header"><p>Request Early Access to Get Started</p></a>
      </div>
    </div>
  )
}

export default Possibility