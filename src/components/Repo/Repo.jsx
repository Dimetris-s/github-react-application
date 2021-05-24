import React from 'react'
import './Repo.scss'
import {firstLetterToUpperCase} from '../../utils/'
import { Link } from 'react-router-dom'

const Repo = ({repo}) => {
    return (
        <div className="Repo">
            <div className="Repo__header">
                <div className="Repo__avatar">
                    <img src={repo.owner.avatar_url} alt="avatar" />
                </div>
                <Link to={`/repo/${repo.owner.login}/${repo.name}`} className="Repo__name">{firstLetterToUpperCase(repo.name)}</Link>
                <div className="Repo__stars">
                    <i className="fas fa-star"/>
                    {repo.stargazers_count}
                </div>
            </div>
            <div className="Repo__body">
                <div className="Repo__owner">
                    Автор: <span>{repo.owner.login}</span>
                </div>
                <div className="Repo__desc">
                    <span>Описание:</span>
                    <p>{repo.description}</p>
                </div>
                <div className="Repo__last-update">Последнее обновление: <span>{repo.updated_at}</span></div>
                <div className="Repo__branch">Ветка по умолчанию: <span>{repo.default_branch}</span></div>
                <a href={repo.html_url} className="Repo__link">Ссылка на репозиторий</a>
            </div>
            
        </div>
    )
}

export default Repo