import  './Search.scss'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchValue } from '../../redux/actions/actions'

const Search = ({placeholder, clickHandler}) => {
    const dispatch = useDispatch()
    const value = useSelector(state => state.repos.searchValue)

    return (
        <div className="search">
            <input type="text" onChange={event => {dispatch(setSearchValue(event.target.value))}} placeholder={placeholder} value={value} className="form-control" />
            <button className="btn btn-success" onClick={clickHandler}>Search</button>
        </div>
    )
}

export default Search