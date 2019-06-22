import React from "react";
import Vibrant from "node-vibrant";
import { Palette } from "node-vibrant/lib/color";
import { ImageSource } from "node-vibrant/lib/typing";

const cache: { [url: string]: Palette } = {};

export default function useVibrant(
  url: ImageSource | null
): { colors: Palette; done: boolean } {
  const [colors, setColors] = React.useState<Palette>({});
  const [done, setDone] = React.useState<boolean>(false);

  React.useEffect((): void => {
    if (!url) {
      return;
    }

    const urlString = url.toString();

    if (cache[urlString]) {
      setColors(cache[urlString]);
      setDone(true);
    }

    Vibrant.from(url)
      .getPalette()
      .then((palette: Palette): void => {
        setColors(palette);
        setDone(true);

        cache[urlString] = palette;
      });
  }, [url]);

  return { colors, done };
}
