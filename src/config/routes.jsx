import React from "react"
import { Route, IndexRoute } from "react-router"

import App from "App"
import Project from "Project"
import Authentication from "Authentication"

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Authentication} />
    <Route path="projects">
      <Route path=":projectId" component={Project} />
    </Route>
  </Route>
)
