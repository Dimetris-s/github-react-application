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
                <div className="repoinfo__header">
                    <div className="repoinfo__header-left">
                        <h1 className="repoinfo__title">{currentRepo.name}</h1>
                        <div className="repoinfo__image">
                            <img src={currentRepo.owner?.avatar_url} alt="avatar" />
                        </div>
                        <div className="repoinfo__owner">Автор: {currentRepo.owner.login}</div>
                        <div className="repoinfo__desc">
                            <span>Описание:</span>
                            <p>{currentRepo.description}</p>
                        </div>
                    </div>
                <button className="btn btn-primary btn-lg repoinfo__btn" onClick={clickHandler}>Back</button>
                    
                </div>
                <div className="repoinfo__watchers">Watchers: {currentRepo.watchers_count}<i className="far fa-eye"></i></div>
                <div className="repoinfo__stars">Stars: {currentRepo.stargazers_count} <i className="fas fa-star"></i></div>
                <div className="repoinfo__branch">Branch: <span>{currentRepo.default_branch}</span>  </div>
                <a href={currentRepo.html_url} className="repoinfo__link">Ссылка на репозиторий</a>
                <hr/>
                <h3>Список контрибьютеров:</h3>
                <ul className="list-group">
                    {
                        contributors.map((contr, index) => (
                            <li 
                             className="list-group-item"
                             key={index}
                            >
                                <a href={contr.html_url}>
                                <div className="repoinfo__image"><img src={contr.avatar_url} alt="user" /></div>
                                    {contr.login}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                
             </>

                
        }
        </div>
    )
}

export default RepoInfo