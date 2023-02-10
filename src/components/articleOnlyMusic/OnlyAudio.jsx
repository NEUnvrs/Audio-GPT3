import './onlyAudio.css'

const ArticleMusic = ({ originalAudio, prompAudio, resultAudio1 }) => {
    return (
        <div className='containerMusic'>
            <div className='containerMusic__original'>
                <p>Original: </p>
                <audio controls src={originalAudio}></audio>
            </div>
            <div className='containerMusic__prompt'>
                <p>Prompt: </p>
                <audio controls src={prompAudio}></audio>
            </div>

            <div className='containerMusic__continue'>
                <p>Continuation: </p>
                <audio controls src={resultAudio1}></audio>
            </div>
        </div>
    )
}

export default ArticleMusic