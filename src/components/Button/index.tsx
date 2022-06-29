import React from 'react';
import style from './Button.module.scss'

class Button extends React.Component <any, any>{
  render() {
    const { type = "button" } = this.props
    return (
      <button type={type} className={style.button}>
        {this.props.children}
      </button>
    )
  }
}

export default Button;