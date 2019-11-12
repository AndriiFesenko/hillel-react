import React from 'react'
import { Switch, Route, useRouteMatch} from 'react-router-dom'
import UsersList from './UsersList'
import UserDetails from './UserDetails'
import './usersList.css'

export default function Users() {
    const { url } = useRouteMatch();

    return (
        <>
            <Switch>
                <Route path={`${url}/:id`} render={({match}) => {
                    return <UserDetails userId={match.params.id}/>
                }} />
                <Route path={`${url}`} render={() => {
                    return <UsersList />
                }} />
            </Switch>
        </>
    )
}
