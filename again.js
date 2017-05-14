function Again (block, interval, ...apply) {
  let fn = block
  let time = interval
  let args = apply

  let timeout = null
  const loop = function () {
    fn.apply(this, args)
    timeout = setTimeout(loop, time)
  }

  return {
    /*
    options: function (opts) {
      ;({ fn, time, args } = opts)
      return this
    },
    */
    fn: function (block) {
      fn = block
      return this
    },
    time: function (interval) {
      time = interval
      return this
    },
    args: function (...apply) {
      args = apply
      return this
    },

    start: function () {
      timeout = setTimeout(loop, time)
      return this
    },
    stop: function () {
      clearTimeout(timeout)
      return this
    }
  }
}
