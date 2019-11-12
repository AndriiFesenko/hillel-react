import React, {useState,useEffect} from 'react'
import config from './config'
import './albumsPhotos.css'

export default function AlbumPhotos({id}) {
    const [photosBlock, setPhotosBlock] = useState([]);
    // console.log(typeof(id))
    useEffect(() => {
        let isSubscribed = true;
        fetch(config.photosUrl)
            .then(resp => resp.json())
            .then((data) => {
                let photosArr = data.filter((el) => el.albumId == id);
                photosArr = photosArr.slice(0,9)
                if(isSubscribed){
                    setPhotosBlock(photosArr)
                }
            })
        return () => isSubscribed = false;
    })
    return (
        <div className="album-photos">
            {photosBlock.map((current) => (
                <img src={current.url} key={current.id}></img>
            ))}
        </div>
    )
}
