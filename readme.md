This library provides a react hook which integrates with [`node-vibrant`](https://github.com/akfish/node-vibrant#readme).

## Usage

`const { colors, done } = useVibrant(imageUrl);`

Colors outputs the vibrant `palette` object of several `swatches`. Each one represents a different color found in the image.
For more information on this, visit their docs.

It also outputs a `done` value, indicating whether or not the processing is complete. You may wish to use this to prevent components from rendering until you have successfully extracted colors from the images.

## Example

```jsx
import React from 'react';
import useVibrant from 'useVibrant';

export default MyCoolComponent({imageUrl}) {
    const { colors, done } = useVibrant(imageUrl);

    return (
        done && <div style={{backgroundColor: colors.Vibrant.hex, width: '100px', height: '100px' }}>
    );
}
```
