
export function shuffle<T>(array: Array<T>) {
	for (let i = array.length; i > 0;) {
		const randomIndex = Math.floor(Math.random()*i);
		--i;
		[array[i], array[randomIndex]] = [array[randomIndex], array[i]];
	}
}
