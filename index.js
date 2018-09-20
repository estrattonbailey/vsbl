import srraf from 'srraf'

export default function vsbl (node) {
  return function handlers (enter, exit) {
    return srraf((...args) => {
      const [ { y, vh }, timestamp ] = args

      const bounds = node.getBoundingClientRect()
      const nodeTop = bounds.top + y
      const nodeBot = nodeTop + bounds.height

      const iv = nodeBot >= y && nodeTop <= (y + vh)

      let vsbl = false

      if (iv && !vsbl) {
        vsbl = true
        enter && enter(...args)
      } else if (!iv && vsbl) {
        vsbl = false
        exit && exit(...args)
      }
    })
  }
}
