import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
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
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const tilesData = [
  {
    img: firsts,
    title: 'Breakfast',
    author: 'jill111',
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
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const GridListExampleSingleLine = () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSingleLine;