import './features.css'
import { Feature } from '../../components'

const Features = () => {
  return (
    <div className='moreFeatures'>
      <div className='moreFeatures__first'>
        <h1 className='moreFeatures__first--title'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <a href="#header"><p>Request Early Access to Get Started</p></a>
      </div>
      <div className='moreFeatures__container'>
        <Feature title={'Improving end distrusts instantly '} description={'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'}/>
        <Feature title={'Become the tended active'} description={'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'}/>
        <Feature title={'Message or am nothing'} description={'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'}/>
        <Feature title={'Really boy law county'} description={'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'}/>
      </div>
    </div>
  )
}

export default Features