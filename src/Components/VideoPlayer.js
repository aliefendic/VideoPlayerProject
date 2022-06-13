import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
const VideoPlayer = () => {
    const [trailerLink, setTrailerLink] = useState();
    let {id} = useParams();

    useEffect(() => {
        const fetchTrailer = () => {
            fetch('https://imdb-api.com/API/Trailer/k_se3l6coa/' + id).then(data => {
                return data.json();
            }).then(data => {
                setTrailerLink(() => data.linkEmbed);
            });
        };
        fetchTrailer();
    }, [id])
    return (
        <div> {
            trailerLink && <iframe title={trailerLink}
                frameBorder="0"
                width="1000"
                height="500"
                src={trailerLink}></iframe>
        } </div>
    )
}

export default VideoPlayer;
