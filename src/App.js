import React, { useState } from 'react';
import { API } from './utils';
import VenueList from './VenueList';
const App = () => {
	const [longitude, setLongitute] = useState('');
	const [latitude, setLatitute] = useState('');
	const [venues, setVenues] = useState([]);

	const onFormSubmit = e => {
		e.preventDefault();
		fetch(API(40.74224, -73.99386))
			.then(res => res.json())
			.then(data => setVenues(data.response.venues))
			.catch(error => console.log(error));
	};

	return (
		<div className="App">
			<form onSubmit={onFormSubmit}>
				<label>Longitude</label>
				<input type="text" value={longitude} onChange={e => setLongitute(e.target.value)} />
				<label>Latitude</label>
				<input type="text" value={latitude} onChange={e => setLatitute(e.target.value)} />
				<button>Submit</button>
			</form>
			<VenueList venues={venues} coordinates={{ lat: latitude, lng: longitude }} />
		</div>
	);
};

export default App;
