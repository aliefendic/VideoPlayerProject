import React, {useState, useEffect} from "react";

import video from "../Assets/videoplayback.mp4";

import classes from "./HomeScreen.module.css"
import {Link} from "react-router-dom";

const HomeScreen = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = () => {
            fetch("https://imdb-api.com/en/API/SearchMovie/k_39hk0qsg/spiderman").then(data => {
                return data.json();
            }).then(data => setMovies(data.results));
        };
        fetchMovies();
    }, []);


    return (
        <div className={
            classes.homeLayout
        }>
            <aside className={
                classes.categories
            }>
                <h3>Categories</h3>
                <ul>
                    <li>Some category</li>
                    <li>Some category</li>
                    <li>Some category</li>
                    <li>Some category</li>
                </ul>
            </aside>
            <main> {
                movies && <video controls>
                    <source src={video}
                        type="video/mp4"></source>
                </video>
            }
                {
                !movies && <h1>You have exceeded the allowed number of API calls to IMDB</h1>
            } </main>
            <aside className={
                classes.recommended
            }>
                <h3>Recommended</h3>
                <ul> {
                    movies.map(el => {
                        return (
                            <li key={
                                el.id
                            }>
                                <p>{
                                    el.title
                                }</p>
                                <img src={
                                        el.image
                                    }
                                    alt="no movie logo available"/>
                                <Link to={
                                    `/videoplayer/${
                                        el.id
                                    }`
                                }><p>Click to watch trailer</p></Link>
                            </li>
                        )
                    })
                } </ul>
            </aside>
        </div>
    )
}

export default HomeScreen;
