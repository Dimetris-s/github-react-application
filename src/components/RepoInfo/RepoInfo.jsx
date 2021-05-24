import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getCurrentRepo, setLoading } from '../../redux/actions/actions'
import Loader from '../Loader/Loader'
import './RepoInfo.scss'

const RepoInfo = props => {

    const dispatch = useDispatch()
    const {username, reponame} = useParams()
    const [currentRepo, setCurrentRepo] = useState({})
    const [contributors, setContributors] = useState([])
    const loading = useSelector(state => state.loading.currentRepoLoading)

    useEffect(() => {
        getCurrentRepo(username, reponame, setCurrentRepo, setContributors, dispatch)
    }, [])

    const clickHandler = () => {
        props.history.goBack()
        dispatch(setLoading({currentRepoLoading: true}))
    }

    return (
        <div className="repoinfo">
        {
            loading 
             ? <Loader/>
             :
             <>
                <h1 className="repoinfo__titile">{currentRepo.name}</h1>
                <div className="repoinfo__image">
                    <img src={currentRepo.owner.avatar_url} alt="avatar" />
                </div>
                <div className="repoinfo__desc">{currentRepo.description}</div>
                <div className="repoinfo__watchers">Watchers: {currentRepo.watchers_count}</div>
                <div className="repoinfo__stars">Stars: {currentRepo.stargazers_count}</div>
                <div className="repoinfo__branch">Branch: {currentRepo.default_branch}</div>
                <a href={currentRepo.html_url} className="repoinfo__link">Репозиторий</a>
                <ul className="repoinfo__contributors-list">
                    {
                        contributors.map((contr, index) => (
                            <li 
                             className="repoinfo__contributors-list-item"
                             key={index}
                            >
                            <a href={contr.html_url}>
                                {contr.login}
                            </a>
                            </li>
                        ))
                    }
                </ul>
                
                <button className="btn btn-primary" onClick={clickHandler}>Back</button>
             </>

                
        }
        </div>
    )
}

export default RepoInfo