import srraf from 'srraf'

export default function vsbl (node, opts = {}) {
  return function handlers (enter, exit) {
    let visible = false

    return srraf((...args) => {
      const [ { y, vh }, timestamp ] = args

      const bounds = node.getBoundingClientRect()
      const nodeTop = bounds.top + y
      const nodeBot = nodeTop + bounds.height
      const threshold = (opts.threshold || 0) * bounds.height

      const iv = nodeBot - threshold >= y && nodeTop + threshold <= y + vh

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
