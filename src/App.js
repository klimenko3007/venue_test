import React, { useState } from 'react';
import { API } from './utils';
import VenueList from './VenueList';
const App = () => {
  const [lat, setLatitute] = useState('');
	const [lng, setLongitute] = useState('');
	const [venues, setVenues] = useState([]);

	const onFormSubmit = e => {
		e.preventDefault();
		fetch(API(lat, lng))
			.then(res => res.json())
			.then(data => setVenues(data.response.venues))
			.catch(error => console.log(error));
	};

	return (
		<div className="App">
			<h1 className="heading">Find your venue!</h1>
			<p className="description">Enter the coordinates and we will give you suggestions!</p>
			<form className="form" onSubmit={onFormSubmit}>
				<label className="label">
					Latitude:
					<input
						className="input"
						type="text"
						value={lat}
						onChange={e => setLatitute(e.target.value)}
						required
					/>
				</label>

				<label className="label">
					Longitude:
					<input
						className="input"
						type="text"
						value={lng}
						onChange={e => setLongitute(e.target.value)}
						required
					/>
				</label>

				<button className="submit">Search</button>
			</form>
			{venues && <VenueList venues={venues} coordinates={{ lat, lng }} />}
		</div>
	);
};

export default App;
