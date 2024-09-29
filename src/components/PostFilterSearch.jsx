import React from "react"
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";
import MySearch from "./UI/search/MySearch";


const PostFilterSearch = ({filter, setFilter}) => {
  return (
    <div>
                <MySearch
                    value={filter.query}
                    onChange={e => setFilter({...filter, query:e.target.value})}
                    placeholder="Поиск..."
                />
    </div>
  )
};

export default PostFilterSearch;
