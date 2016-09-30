import "./Field.less"

import React, {
  Component,
  PropTypes,
  Children,
  cloneElement
} from "react"

import classNames from "classnames"
import uuid from "uuid"

import Label from "Label"

export default class Field extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  }

  state = {
    focused: false
  }

  render() {
    let fieldId = uuid.v4()
    let labelApplied = false
    return (
      <div className={classNames("Field", { focused: this.state.focused })}>
        <Label text={this.props.label} htmlFor={fieldId} />
        {
          Children.map(this.props.children, child => {
            if (labelApplied) fieldId = undefined
            else labelApplied = false
            return cloneElement(child, {
              id: fieldId,
              onFocus: () => this.setState({ focused: true }),
              onBlur: () => this.setState({ focused: false })
            })
          })
        }
      </div>
    )
  }

}
