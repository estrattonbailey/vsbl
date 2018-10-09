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
Trigger visibility sooner or later than usual.
- Values below `0.5` will be treated as a percentage of the viewport
- Values of `0.5` and over will be considered pixel values

```javascript
const listener = vsbl(node, { threshold: 0.25 })(() => console.log('visible'))
```

You can optionally include this threshold as an attribute on the element itself:
```html
<div id='scroll' data-threshold='0.25'></div>
```

## License
MIT License © [Eric Bailey](https://estrattonbailey.com)
