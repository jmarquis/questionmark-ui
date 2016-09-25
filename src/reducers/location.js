function getDefaultLocation() {
  return {
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash
  }
}

export function location(state = getDefaultLocation(), action) {

  switch (action.type) {

    case "LOCATION_CHANGE":
      return {
        ...getDefaultLocation(),
        ...action.location
      }

    default:
      return state

  }

}
