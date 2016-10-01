import store from "./store"

export function goto(path) {
  history.pushState({}, "", path)
  store.dispatch({
    type: "LOCATION_CHANGE",
    location: {
      pathname: window.location.path,
      search: "",
      hash: ""
    }
  })
}
