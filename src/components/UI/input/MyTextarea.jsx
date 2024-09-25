import React from "react";
import classes from './MyInput.module.css';

const MyTextarea = React.forwardRef((props, ref) => {
  return (
    <div class="inputblock">
        <textarea rows="4" ref={ref} className={classes.myInput} {...props} />
    </div>
  )
});

export default MyTextarea;