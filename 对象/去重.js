{
  let hash = {}
  const unique = arr =>
    arr.reduce((item, next) => {
      hash[next.id] ? "" : (hash[next.id] = true && item.push(next))
      return item
    }, [])
}
