import {SET_REPOS, SET_LOADING, SET_CURRENT_PAGE, SET_SEARCH_VALUE} from '../types/types'
import axios from 'axios'


export const setRepos = repos => ({type: SET_REPOS, payload:repos})

export const getRepos = (searchQuery="stars:%3E1", perPage, currentPage) => {

    if(searchQuery == '') searchQuery = "stars:%3E1"

    return async dispatch => {
        dispatch(setLoading({reposLoading: true}))
        const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`)
        dispatch(setRepos(response.data))
        dispatch(setLoading({reposLoading: false}))
    }
}

export const setLoading = payload => ({type: SET_LOADING, payload})


export const setCurrentPage = page => ({type: SET_CURRENT_PAGE, payload: page})

export const setSearchValue = value => ({type: SET_SEARCH_VALUE, payload: value})


export const getCurrentRepo = async (username, reponame, setCurrentRepo, setContributors, dispatch) => {
    const response = await axios.get(`https://api.github.com/repos/${username}/${reponame}`)
    const contributorsResponse = await axios.get(`https://api.github.com/repos/${username}/${reponame}/contributors`)
    setCurrentRepo(response.data)
    setContributors(contributorsResponse.data)
    dispatch(setLoading({currentRepoLoading: false}))
}