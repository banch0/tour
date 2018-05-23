import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import firsts from '../static/00-52-29-429_640.jpg';
import seconds from '../static/burger-827309_640.jpg';
import tri from '../static/camera-813814_640.jpg';
import chetiri from '../static/morning-819362_640.jpg';
import pyat from '../static/hats-829509_640.jpg';
import shest from '../static/honey-823614_640.jpg';
import sem from '../static/vegetables-790022_640.jpg';
import vosem from '../static/water-plant-821293_640.jpg';
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: firsts,
    title: 'Breakfast',
    author: 'jill111',
    featured: true,
  },
  {
    img: seconds,
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: tri,
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: chetiri,
    title: 'Morning',
    author: 'fancycrave1',
    featured: true,
  },
  {
    img: pyat,
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: shest,
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: sem,
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: vosem,
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */
class GridListExampleComplex extends React.Component {

    render(){
        return (
            <div style={styles.root}>
    <GridList
      cols={2}
      cellHeight={200}
      padding={1}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={tile.featured ? 2 : 1}
          rows={tile.featured ? 2 : 1}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
        )
    }
  
}

export default GridListExampleComplex;