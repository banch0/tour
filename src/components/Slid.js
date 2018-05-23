import React from 'react';
import jet from '../jet.jpg';
import hob from '../static/hobbit.jpg';
import tour from '../static/tours.jpg';
import ImageGallery from 'react-image-gallery';
import comment from '../commen';
import RaisedButton from 'material-ui/RaisedButton';

class Slid extends React.Component {
  constructor() {
    super();
    this.state = {
      showIndex: false,
      slideOnThumbnailHover: false,
      showBullets: true,
      infinite: true,
      showThumbnails: false,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: true,
      slideDuration: 450,
      slideInterval: 2000,
      thumbnailPosition: 'bottom',
      showVideo: {},
      renderRightNav: true,
    };}
    render() {

        const images = [
          {
            original: hob,
            thumbnail: hob,
            description: 'What the bitch',
          },
          {
            original: jet,
            thumbnail: jet,
            description: 'What the bitch',
          },
          {
            original: tour,
            thumbnail: tour,
            description: <RaisedButton  secondary={true} label="More" />,
          }
        ]
    
        return (
          <ImageGallery items={images} autoPlay={true} showNav={true}/>
        )
      }
}
export default Slid