import srraf from 'srraf'

export default function vsbl (node, opts = {}) {
  return function handlers (enter, exit) {
    let visible = false

    const threshold = parseFloat(node.getAttribute('data-vsbl') || opts.threshold || 0)

    return srraf((...args) => {
      const [ { y, vh }, timestamp ] = args

      const bounds = node.getBoundingClientRect()
      const nodeTop = bounds.top + y
      const nodeBot = nodeTop + bounds.height
      const offset = threshold * bounds.height

      const iv = nodeBot - offset >= y && nodeTop + offset <= y + vh

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
