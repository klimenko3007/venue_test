const client_id = '2LOYG24SJFZTMQN522DQVD5C10ART4EENNKF0O4MVCDVMBCI';
const client_secret = 'U2FEGLPDTEABO4FOXMZCQTX2ROQL1VAKAOOLUQTAVY32YQFA';
const BASE_API = 'https://api.foursquare.com/v2/venues/search?';

export const API = (lat, long) =>
	`${BASE_API}client_id=${client_id}&client_secret=${client_secret}&ll=${lat},${long}&v=20211111`;

export const distanceCalculator = (lat1, lon1, lat2, lon2) => {
	const R = 6371e3; // earth’s radius in metres
	const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
	const φ2 = (lat2 * Math.PI) / 180;
	const Δφ = ((lat2 - lat1) * Math.PI) / 180;
	const Δλ = ((lon2 - lon1) * Math.PI) / 180;

	const a =
		Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
		Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

	const distance = Math.round(R * c); // in metres
  return distance
};
