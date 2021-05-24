import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Main from './components/Main/Main'
import RepoInfo from './components/RepoInfo/RepoInfo'

const App = () => {

 
    return (
        <div className="container">
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route path="/repo/:username/:reponame" component={RepoInfo}/>
                <Redirect to="/"/>
            </Switch>
        </div>
    )
}

export default App