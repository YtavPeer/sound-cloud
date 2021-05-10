
import { useState } from 'react'

import './SoundSearch.scss'

export const SoundSearch = (props) => {

    const [search, setSearch] = useState('');

    const handleChange = ({ target }) => {
        setSearch(target.value)
    }

    const searchSong = (ev) => {
        ev.preventDefault()
        props.onChangeSearch(search)
    }

    return (
        <div className='search-container'>
            <form id="form">
                <input type="text" id="search" placeholder="Enter artists or song name" value={search} onChange={handleChange} />
                <button onClick={searchSong}>Go</button>
            </form>
        </div>
    )
}

