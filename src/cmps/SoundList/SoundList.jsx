import './SoundList.scss'
import { SoundPreview } from '../../cmps/SoundPreview';

export const SoundList = ({ songs, isTile }) => {
    return (
        <div className={`${isTile ? 'sound-tile' : 'sound-list'}`}>
            {
                songs && songs.map(song => <SoundPreview key={song.id} song={song} isTile={isTile} />)
            }
        </div>
    )
}



