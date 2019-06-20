import React from "react";
import Vibrant from "node-vibrant";
import { Palette } from "node-vibrant/lib/color";

const cache: { [url: string]: Palette } = {};

export default function useVibrant(
  url: string
): { colors: Palette; done: boolean } {
  const [colors, setColors] = React.useState<Palette>({});
  const [done, setDone] = React.useState<boolean>(false);

  React.useEffect((): void => {
    if (!url) {
      return;
    }

    if (cache[url]) {
      setColors(cache[url]);
      setDone(true);
    }

    Vibrant.from(url)
      .getPalette()
      .then((palette: Palette): void => {
        setColors(palette);
        setDone(true);

        cache[url] = palette;
      });
  }, [url]);

  return { colors, done };
}
