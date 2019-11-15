import React, { useState, useEffect } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import PostsList from './PostsList'
import axios from 'axios'
import config from './config'
import PostDetails from './PostDetails'
import CommentForm from './commentsForm/CommentForm'

export default function Index() {
    const [posts, setPosts] = useState([]);
    const [currentPost, setCurrentPost] = useState({});
    const [comments, setComments] = useState([]);
    
    const match = useRouteMatch();

    useEffect(() => {
        getData(config.postsURL, setPosts);
    }, [])
    
    useEffect(() => {
        if(match.params.id) {
            getCurrentPost();
            getData(`${config.postsURL}/${match.params.id}/comments`, setComments);
        }
    },[match.params.id])

    function getData(url, container) {
        axios.get(url)
        .then((resp) => {
            let newArr = resp.data.slice(0,10);
            container(newArr);
        })
    }
    function getCurrentPost() {
        axios.get(`${config.postsURL}/${match.params.id}`)
            .then(resp => setCurrentPost(resp.data))
    }
    
    return (
        <div>
            <Switch>
                <Route path='/posts/:id' render={() => (
                    <>
                        <PostDetails currentPost={currentPost} comments={comments}/>
                        <CommentForm />
                    </>
                )}/>
                <Route path='/posts' render={() => (
                    <PostsList posts={posts}/>
                )}/>
            </Switch>
        </div>
    )
}
