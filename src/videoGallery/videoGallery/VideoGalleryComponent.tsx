import React from 'react';
import ReactPlayer from "react-player";
import './VideoGalleryComponent.scss';
import {ReactComponent as Arrow} from "../../img/icons/long-arrow-down.svg";

export class VideoGalleryComponent extends React.Component {
    render () {

        return (
        <section className="video-gallery">
            <h1 className="video-gallery-title">Как это работает</h1>
            <section className="video-gallery-content">
                <div className="video-gallery-item">
                    <ReactPlayer url="https://www.youtube.com/watch?v=MRsUMyFZi4c"
                                className="video-gallery-player" />
                    <div className="video-gallery-item-text">
                        <span className="video-gallery-item-title">Шаг 1</span>
                        <span className="video-gallery-item-subtitle">Регистрируетесь на платформе</span>
                        <Arrow className="arrow" />
                    </div>
                </div>
                <div className="video-gallery-item">
                    <ReactPlayer url="https://www.youtube.com/watch?v=MRsUMyFZi4c"
                                className="video-gallery-player" />
                    <div className="video-gallery-item-text">
                        <span className="video-gallery-item-title">Шаг 1</span>
                        <span className="video-gallery-item-subtitle">Регистрируетесь на платформе</span>
                        <Arrow className="arrow" />
                    </div>
                </div>
                <div className="video-gallery-item">
                    <ReactPlayer url="https://www.youtube.com/watch?v=MRsUMyFZi4c"
                                className="video-gallery-player" />
                    <div className="video-gallery-item-text">
                        <span className="video-gallery-item-title">Шаг 1</span>
                        <span className="video-gallery-item-subtitle">Регистрируетесь на платформе</span>
                        <Arrow className="arrow" />
                    </div>
                </div>
                <div className="video-gallery-item">
                    <ReactPlayer url="https://www.youtube.com/watch?v=MRsUMyFZi4c"
                                className="video-gallery-player" />
                    <div className="video-gallery-item-text">
                        <span className="video-gallery-item-title">Шаг 1</span>
                        <span className="video-gallery-item-subtitle">Регистрируетесь на платформе</span>
                        <Arrow className="arrow" />
                    </div>
                </div>
                <div className="video-gallery-item">
                    <ReactPlayer url="https://www.youtube.com/watch?v=MRsUMyFZi4c"
                                className="video-gallery-player" />
                    <div className="video-gallery-item-text">
                        <span className="video-gallery-item-title">Шаг 1</span>
                        <span className="video-gallery-item-subtitle">Регистрируетесь на платформе</span>
                    </div>
                </div>
            </section>
        </section>
        );
    } 
}

export default VideoGalleryComponent;
