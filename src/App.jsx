import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './App.css';
import Sideb from './components/Side';
import Input from './components/Input';
import Sidebar from 'react-sidebar';
import Side from './components/Side';
import Search from './components/Search';
import Slide from './components/Slide';
import { connect } from 'react-redux';
import state from './reducers/index';
import Dats from './components/Dats';
import SlideLayout from './components/SlideLayout';
import 'react-image-gallery/styles/css/image-gallery-no-icon.css';
import Slid from './components/Slid';
import CardExampleWithAvatar from './components/Card';
import GridListExampleComplex from './components/Grids';
import { comment } from './commen';
import { danie } from './dat';
import DrawerUndockedExample from './components/Draver';
import Header from './components/Head';
import TabsExampleSimple from './components/Tabs';
import GridListExampleSingleLine from './components/Horiz';

//основаполагающая нейронная сеть

const style = {
  paddingBottom: 15,
}
const nums = 1987;
const ApiKey = 'AIzaSyBW6dPeODYA-AXhqh6JA4QEJDuFIn7CX4Q';
const text = 'Title texts';
const title = 'TITLES';
const massiv = [text, title, ApiKey, nums];
const descriptions = {
  work: "Пошёл на работу",
  "тронул дерево": "Дотронулся до дерева"
};

const mapStateToProps = state => ({
  likes: state.get('likes'),
  dislikes: state.get('dislikes'),
  nexts: state.get('nexts'),
  posts: state.get('posts'),
});
const mapDispatchToProps = distpatch => ({
  like: () => distpatch({type: 'ADD_LIKE'}),
  dislike: () => distpatch({type: 'ADD_DISLIKE'}),
  next: () => distpatch({type: 'NEXT_POSTS'}),
  addPost: () => distpatch({type: 'PUSH_POST', payload: {id: +new Date(), text, title}}),
});
// addPost: (titl, text) => distpatch(
//   {type: 'PUSH_POST', 
//    payload: {id: +new Date(), titl, text}}),
class App extends Component {
  handleClick(hello){
    console.log(hello)
  }
  massivAttack () {
    console.log(massiv[2])
  }
  counter(){
    console.log(numbers)
    let numbers = 0;
    numbers++;
    console.log(numbers);
    console.log('counter don\'t work');
    return numbers;
  }
  render() {
    return (
      <div>
        <Header />
        <div className="Apps">
          <Slid />
          <SlideLayout />
          <DrawerUndockedExample />
          <TabsExampleSimple />
          <CardExampleWithAvatar zapis={comment}/>
          <GridListExampleSingleLine zipis={comment}/>
          <RaisedButton secondary={true} label="More" fullWidth={true} />
          <div className="Content">
            <p>{text}</p>
            {/* почти получается, в массиве указать пропс */}
          </div>
          <div>
            <p>{this.props.likes}</p>
            <p>{this.props.dislikes}</p>
            <button onClick={this.props.like}>Like</button>
            <button onClick={this.props.dislike}>DisLike</button>
            <button onClick={this.props.addPost}>addPost</button>
          </div>
        </div>
<div>
  <Card style={{width:255}}>
    <CardMedia overlay={
      <CardTitle subtitle={comment[this.props.nexts].subtitle} />}>
      <img src={comment[this.props.nexts].ims} style={{height:255,width:255}} alt="imgs"/>
    </CardMedia>
    <CardTitle title={danie[this.props.nexts].title} subtitle="Card subtitle" />
    <CardText>
      {danie[this.props.nexts].texts}
    </CardText>
    <CardActions>
      <RaisedButton onClick={this.props.next} secondary={true} label="More" fullWidth={true} />
    </CardActions>
  </Card>
</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)