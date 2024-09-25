import React from "react";
import classes from './MySearch.modules.css';
import MyImg from "../../img/search.svg";

const MySearch = React.forwardRef((props, ref) => {
  return (
    <div class="inputblock">
        <img src={MyImg} alt="" />
        <input ref={ref} className={classes.myInput} {...props} />
    </div>
  )
});

export default MySearch;
