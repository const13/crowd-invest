import React from 'react';
import Greetings from '../greetings/Greetings';
import VideoGalleryComponent from './videoGallery/VideoGalleryComponent';

export class VideoGallery extends React.Component {
    render () { 
        return (<div>  
            <VideoGalleryComponent />
            <Greetings />
        </div>);  
    }
}

export default VideoGallery;
