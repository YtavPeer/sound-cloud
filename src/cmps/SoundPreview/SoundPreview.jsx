import { Link } from 'react-router-dom'
import './SoundPreview.scss'
import noPic from '../../assets/default.jpg'
import Moment from 'react-moment';
import 'moment-timezone';
var moment = require('moment');

export const SoundPreview = ({ song, isTile }) => {

    const time = moment.duration(song.duration).format("mm:ss");


    const shortTitle = () => {
        if (song.title.length > 30) {
            let txt = `${song.title.substring(0, 30)}...`;
            return txt
        } else {
            return song.title
        }
    }

    return (
        <Link to={`/sound/${song.id}`}>
            <div className={`${isTile ? 'tile-preview' : 'song-preview'}`}>
                <img src={song.artwork_url || noPic} alt="" />
                <p title={song.title}>{shortTitle(song.title)}</p>
                <div className="song-data">
                    <small className="genre">{song.genre}</small>
                    <small>{time}</small>
                </div>
            </div>
        </Link>
    )
}

