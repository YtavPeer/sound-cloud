import './SoundHistory.scss'
import React, { useState, useEffect } from 'react';
import { storageService } from '../../services/storageService.js'

export const SoundHistory = (props) => {

    const [history, setHistory] = useState(null);

    useEffect(async () => {
        const history = await storageService.load('HISTORY');
        setHistory(history)
    }, []);




    return (
        <div>
            <h1>Recent Searches</h1>
            {
                history &&
                <ul className="history-container">
                    {history.map( (song, idx) => <li className="history-article" key={idx}>{song}</li>).slice(0,6)}
                </ul>
            }
        </div>
    )
}

