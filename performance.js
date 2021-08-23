  function performance () {
    if (!window.performance && !window.performance.getEntries) return

    const result = []
    window.performance.getEntries()

    return result
  }