import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRepos, setCurrentPage } from '../../redux/actions/actions'
import Loader from '../Loader/Loader'
import Repo from '../Repo/Repo'
import Search from '../Search/Search'
import Pagination from '../Pagination/Pagination'
import './Main.scss'
import { createPages } from '../../utils'

const Main = () => {

    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const loading = useSelector(state => state.loading.reposLoading)
    const currentPage = useSelector(state => state.repos.currentPage)
    const totalCount = useSelector(state => state.repos.totalCount)
    const perPage = useSelector(state => state.repos.perPage)
    const searchValue = useSelector(state => state.repos.searchValue)

    const pagesCount = Math.ceil(totalCount / perPage)
    const pages = []

    createPages(pages, pagesCount, currentPage)

    
    useEffect(() => {
        dispatch(getRepos(searchValue, perPage, currentPage))
    }, [currentPage])
    

    const searchClickHandler = () => {
       dispatch(setCurrentPage(1))
       dispatch(getRepos(searchValue, perPage, currentPage))
    }

    return (
        <div className="Main">
            <Search placeholder="Enter repository name..." clickHandler={searchClickHandler}/>
            {
                loading 
                    ? <Loader/>
                    : repos.map((repo, id) => (
                <Repo key={id} repo={repo}/>
            ))
            }
            <Pagination pages={pages} currentPage={currentPage}/>
        </div>
    )
}

export default Main