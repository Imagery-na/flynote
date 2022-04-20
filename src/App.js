import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
    const [notes, setNotes] = useState([]);
    const [myNote, setMyNote] = useState('');

    useEffect(
        () => {
            axios.get('https://bonus.dev.thewhite.ru/api/news-service/articles/list')
                .then((response) => {
                    console.log('get', response.data);
                    setNotes(response.data);
                })
                .catch((error) => console.log(error));
        },
        [],
    );

    function saveNote() {
        const newNotes = notes;
        newNotes.push({
            name: myNote,
        });
        console.log(newNotes);
        setNotes(newNotes);
    }

    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                FlyNote
            </p>
        </header>
        <main>
            <h1>
                FLYNOTE NOTES
            </h1>
            <main>
                <div
                    className="wrapper"
                >
                    <textarea
                        placeholder="Напишите заметку"
                        value={myNote}
                        onChange={(event) => setMyNote(event.target.value)}
                    />
                    <button
                        className="save-button"
                        onClick={() => saveNote()}
                    >
                        Сохранить
                    </button>
                </div>
                <ul
                    className="notes"
                >
                    {
                        notes.map((note, index) => (
                            <li
                                key={index}
                            >
                                {note.name}
                            </li>
                        ))
                    }
                </ul>
            </main>
        </main>
        </div>
    );
}

export default App;
