import srraf from 'srraf'

export default function vsbl (node) {
  return function handlers (enter, exit) {
    let visible = false

    return srraf((...args) => {
      const [ { y, vh }, timestamp ] = args

      const bounds = node.getBoundingClientRect()
      const nodeTop = bounds.top + y
      const nodeBot = nodeTop + bounds.height

      const iv = nodeBot >= y && nodeTop <= (y + vh)

      if (iv && !visible) {
        visible = true
        enter && enter(...args)
      } else if (!iv && visible) {
        visible = false
        exit && exit(...args)
      }
    })
  }
}
