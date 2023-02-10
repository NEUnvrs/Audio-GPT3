import './examples.css'
import {ArticleImg, ArticleMusic} from '../../components'
import nightVG from '../../assets/the_starry_night.jpg';
import napoleon from '../../assets/napoleon.jpg';
import wanderer from '../../assets/wanderer.jpg';
import nightMusic from '../../audio/the_starry_night.mp3';
import napoleonMusic from '../../audio/napoleon.mp3';
import wandererMusic from '../../audio/wanderer.mp3';
import firstAG from '../../audio/firstaudioG.mp3';
import secondAG from '../../audio/secondAudioG.mp3';
import thirdAG from '../../audio/thirdAudioG.mp3';
import firstOA from '../../audio/first_original.mp3';
import firstPrompt from '../../audio/first_prompt.mp3';
import firstContinue from '../../audio/first_0.mp3';
import secondOA from '../../audio/second_original.mp3';
import secondPrompt from '../../audio/second_prompt.mp3';
import secondContinue from '../../audio/second_1.mp3';
import thirdOA from '../../audio/third_original.mp3';
import thirdPrompt from '../../audio/third_prompt.mp3';
import thirdContinue from '../../audio/third_2.mp3';






const Audiogeneration = ({desc, au}) =>{
  return(
    <div className='audioGeneration'>
      <span>Prompt:</span>
      <p>{desc}</p>
      <audio controls src={au}></audio>
    </div>
  )
}

const Examples = () => {
  return (
    <div className='examples'>
      <h1 className='examples__title'>let's start an endless adventure. Here are few examples</h1>
      <h2>Painting Caption Conditioning</h2>
      <div className='examples__music'>
        <ArticleImg img={nightVG} title={"The Starry night - Vincent van Gogh"} des={"The Starry Night (Dutch: De sterrennacht) is an oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village."} audio={nightMusic} />
        <ArticleImg img={napoleon} title={"Napoleon Crossing the Alps - Jacques-Louis David"} des={"The composition shows a strongly idealized view of the real crossing that Napoleon and his army made across the Alps through the Great St Bernard Pass in May 1800."} audio={napoleonMusic}/>
        <ArticleImg img={wanderer} title={"Wanderer above the Sea of Fog - Caspar David Friedrich"} des={"It depicts a man standing upon a rocky precipice with his back to the viewer; he is gazing out on a landscape covered in a thick sea of fog through which other ridges, trees, and mountains pierce, which stretches out into the distance indefinitely."} audio={wandererMusic}/>
      </div>
      <h2>Audio Generation From Rich Captions</h2>
      <div className='examples__generation'>
        <Audiogeneration desc={" The main soundtrack of an arcade game. It is fast-paced and upbeat, with a catchy electric guitar riff. The music is repetitive and easy to remember, but with unexpected sounds, like cymbal crashes or drum rolls."} au={firstAG}/>
        <Audiogeneration desc={" This is an r&b/hip-hop music piece. There is a male vocal rapping and a female vocal singing in a rap-like manner. The beat is comprised of a piano playing the chords of the tune with an electronic drum backing. The atmosphere of the piece is playful and energetic. This piece could be used in the soundtrack of a high school drama movie/TV show. It could also be played at birthday parties or beach parties."} au={secondAG}/>
        <Audiogeneration desc={" Epic soundtrack using orchestral instruments. The piece builds tension, creates a sense of urgency. An a cappella chorus sing in unison, it creates a sense of power and strength."} au={thirdAG}/>
      </div>
      <h2>Speech continuation</h2>
      <div className='examples__audio'>
        <ArticleMusic originalAudio={firstOA} prompAudio={firstPrompt} resultAudio1={firstContinue} />
        <ArticleMusic originalAudio={secondOA} prompAudio={secondPrompt} resultAudio1={secondContinue}/>
        <ArticleMusic originalAudio={thirdOA} prompAudio={thirdPrompt} resultAudio1={thirdContinue}/>
      </div>
    </div>
  )
}

export default Examples