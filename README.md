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

## License
MIT License © [Eric Bailey](https://estrattonbailey.com)
