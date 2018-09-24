# vsbl
In-viewport detection without event listeners. **440 bytes gzipped.**

## Install
```
npm i vsbl --save
```

# Usage
```javascript
import vsbl from 'vsbl'

const enter = () => {}
const exit = () => {}

const listener = vsbl(document.getElementById('scroll'))(enter, exit)

listener() // destroy
```

## Options
### `threshold`
Specify a percentage of the tracked element that needs to be visible in order to
trigger `enter`, and vice versa for `exit`.

Below, 50% of the element must be visible before `enter` is fired.
```javascript
const listener = vsbl(node, { threshold: 0.5 })(() => console.log('visible'))
```

## License
MIT License © [Eric Bailey](https://estrattonbailey.com)
