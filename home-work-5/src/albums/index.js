import React, {useState} from 'react'
import AlbumsList from './AlbumsList'
import {Switch, Route, useRouteMatch} from 'react-router-dom'

export default function Albums() {
    const {url} = useRouteMatch();

    return (
        <>
            <Switch>
                <Route path={`${url}`} render={() => {
                    return <AlbumsList />
                }} />
            </Switch>
        </>
    )
}
