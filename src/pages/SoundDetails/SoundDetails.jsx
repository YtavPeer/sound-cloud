import { soundService } from '../../services/soundService.js'
import { useEffect, useState } from 'react';
import def from '../../assets/default.jpg'
import './SoundDetails.scss'


export const SoundDetails = (props) => {

    const [song, setSongs] = useState(null);
    const [stream, setStream] = useState(null);

    useEffect(() => {
        loadSong()
    }, [])


    const loadSong = async () => {
        const song = await soundService.getSongById(props.match.params.id)
        setSongs(song)
        const stream = await soundService.getStreamSongById(props.match.params.id)
        setStream(stream)
    }

    return (
        <section className="sound-details">
            {
                song && stream &&
                <div className="song-details">
                    <div>
                        <h1>{song.title}</h1>
                        <h5>{song.description}</h5>
                    </div>
                    <audio controls src={stream.http_mp3_128_url}>
                    </audio>
                </div>
            }
            {
                song && <div>
                    <img src={song.artwork_url || def} alt="" />
                </div>
            }
        </section>
    )
}

