import React, { useState } from 'react';
import Weather from './components/Weather/Weather';
import './App.css';

function App() {
    const [city, setCity] = useState('');
    const [submittedCity, setSubmittedCity] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedCity(city);
        // Reset the input field after submission
        setCity('');
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>React Weather App</h1>
            </header>
            <main>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Enter City" 
                        value={city} 
                        onChange={(e) => setCity(e.target.value)} 
                        className="city-input"
                    />
                    <button type="submit" className="submit-button">Get Weather</button>
                </form>
                {submittedCity && <Weather city={submittedCity} />}
            </main>
        </div>
    );
}

export default App;
