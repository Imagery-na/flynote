import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            myNote: '',
            notes: [],
        }
    }

    componentDidMount() {
        this.loadNotes();
    }

    loadNotes = () => {
        axios.get('https://bonus.dev.thewhite.ru/api/news-service/articles/list')
            .then((response) => {
                console.log('get', response.data);
                this.setState({ notes: response.data });
            })
            .catch((error) => console.log(error));
    };

    saveNote = () => {
        const newNotes = this.state.notes;
        newNotes.push({
            name: this.state.myNote,
        });
        console.log(newNotes);
        this.setState({ notes: newNotes });
    }

    render() {
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
                            value={this.state.myNote}
                            onChange={(event) => this.setState({myNote: event.target.value})}
                        />
                        <button
                            className="save-button"
                            onClick={this.saveNote}
                        >
                            Сохранить
                        </button>
                    </div>
                    <ul
                        className="notes"
                    >
                        {
                            this.state.notes.map((note, index) => (
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

  
}

export default App;
