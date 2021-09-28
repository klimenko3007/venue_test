import React from 'react';
import { distanceCalculator } from './utils';

const VenueList = ({ venues, coordinates }) => {
	const calculateDistance = venue => {
		const distance = distanceCalculator(
			venue.location.lat,
			venue.location.lng,
			coordinates.lat,
			coordinates.lng
		);
		return { ...venue, distance };
	};

	const sortedByDistance = venues.map(calculateDistance).sort((a, b) => a.distance - b.distance);

	return (
		<div className="venues">
      <h2>Venues</h2>
			{venues &&
				sortedByDistance.map(venue => {
					return (
						<div>
							<p>{venue.name}</p>
							<p>{venue.distance}m</p>
						</div>
					);
				})}
		</div>
	);
};

export default VenueList;
