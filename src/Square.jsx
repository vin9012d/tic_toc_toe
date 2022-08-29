import React from 'react'

export const Square = ({ classes1,state,onClick }) => {
    let classes = classes1 ? `${classes1} square` : "square"
    if (state == "0") {
        
        classes = `${classes}  white`
        console.log(classes)
    }
  return (
      <span onClick={onClick}
      className={classes}
      >{state}</span>
  )
}
