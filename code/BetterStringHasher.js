export default class BetterStringHasher {
	hash(key) {
		let h = 0;
		for (let i = 0; i < key.length; ++i) {
			h = h*37;
			h += key.charCodeAt(i);
		}
		return h;
	}
}