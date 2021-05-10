import './SoundApp.scss'
import { SoundSearch } from '../../cmps/SoundSearch';
import { SoundList } from '../../cmps/SoundList';
import { Pagination } from '../../cmps/Pagination';
import { useState, useEffect } from 'react';
import { soundService } from '../../services/soundService.js'
import backgroundImg from '../../assets/background-img.jpg'
import list from '../../assets/list.svg'
import tile from '../../assets/tile.svg'

export const SoundApp = () => {

    const PAGE_SIZE = 6;

    const [songs, setSongs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [songsPerPage, setSongsPerPage] = useState(PAGE_SIZE);
    const [isTile, setIsTile] = useState(false);

    useEffect(async () => {
        const tile = await soundService.getOptions()
        setIsTile(tile);
    }, [])


    //get current songs
    const indexOFLastSong = currentPage * songsPerPage;
    const indexOfFirstSong = indexOFLastSong - songsPerPage;
    const currentSongs = songs.slice(indexOfFirstSong, indexOFLastSong)
    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const onChangeSearch = async (searchWord) => {
        const songs = await soundService.loadSongs(searchWord)
        setSongs(songs)
    }

    const setTile = (isTiles) => {
        setIsTile(isTiles)
        soundService.setTile(isTiles);
    }

    return (
        <div>
            <SoundSearch onChangeSearch={onChangeSearch}></SoundSearch>
            {
                !songs.length ?
                <img src={backgroundImg} alt="" /> :
                    <section>
                        <SoundList songs={currentSongs} isTile={isTile}></SoundList>
                        <div className="footer-btn">
                            <Pagination songsPerPage={songsPerPage} totalSongs={songs.length} paginate={paginate} currentPage={currentPage}></Pagination>
                            <div>
                                <img className={!isTile && "in-active"} onClick={() => setTile(false)} src={list} alt="" />
                                <img className={isTile && "in-active"} onClick={() => setTile(true)} src={tile} alt="" />
                            </div>
                        </div>
                    </section>
            }
        </div >
    )
}

