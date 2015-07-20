export
  const once = fn => ((executed, value) =>
    (...args) => executed ? value
                          : (executed = true, value = fn(...args))
  )();
