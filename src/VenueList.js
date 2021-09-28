import React from 'react';
import {distanceCalculator} from './utils'


const VenueList = ({venues, coordinates}) => {
  const calculateDistance = (venue) => {
    const distance = distanceCalculator(venue.location.lat, venue.location.lng, 59.3257, 18.0719)
    return {...venue, distance}
  }

const sortedByDistance = venues.map(calculateDistance).sort((a, b) => a.distance - b.distance)
console.log(sortedByDistance)

  return (
    <div className="venues">
      {venues &&
					sortedByDistance.map(venue => {
						return <p>{venue.name}</p>;
					})}
    </div>
  );
}

export default VenueList;
