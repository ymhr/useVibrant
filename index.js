import React from 'react';
import * as Vibrant from 'node-vibrant';

const cache = {};

export default function useVibrant(url) {
	const [colors, setColors] = React.useState({});
	const [done, setDone] = React.useState(false);

	React.useEffect(() => {
		if (!url) {
			return;
		}

		if (cache[url]) {
			setColors(cache[url]);
			setDone(true);
		}

		Vibrant.from(url)
			.getPalette()
			.then((palette) => {
				setColors(palette);
				setDone(true);

				cache[url] = palette;
			});
	}, [url]);

	return { colors, done };
}
