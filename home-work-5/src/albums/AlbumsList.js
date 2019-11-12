import React, { useState, useEffect } from 'react'
import config from './config'
import AlbumsListItem from './AlbumListItem'
import AlbumPhotos from './AlbumPhotos'

export default function AlbumsList() {
    const [albums, setAlbums] = useState([]);
    const [albumId, setAlbumId] = useState({});

    function SaveAlbumId(id) {
        setAlbumId(id)
    }
    useEffect(() => {
        let isSubscribed = true
        fetch(config.albumsUrl)
            .then((resp) => resp.json())
            .then((data) => {
                let newAlbums = data.filter((el) => el.id < 10);
                if(isSubscribed) {
                    setAlbums(newAlbums)
                }
            })
        return () => isSubscribed = false;
    })

    return (
        <div className="albums-list">
            <ul>
                {albums.map((album) => (
                    <AlbumsListItem 
                        key={album.id}
                        album={album} 
                        saveId={SaveAlbumId}/>
                ))}
            </ul>
            <AlbumPhotos id={typeof(albumId) !== 'number' ? 1 : albumId} />
        </div>
    )
}
