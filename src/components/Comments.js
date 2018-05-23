import React from 'react';
import logo from '../logo.svg';
import Search from './Search';

const nnn = true
class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nams: 'Taj', 
      date: new Date(), 
      visible: false
    }
    this.filterList = this.filterList.bind(this);
    this.newClicks = this.newClicks.bind(this);
    this.onTextChanged = this.onTextChanged.bind(this);
  }
  onTextChanged(e){
    console.log(e);
    const text = e.target.value.trim();   // удаляем пробелы
    this.props.filter(text); // передаем введенный текст в родительский компонент
}
     
  handleClicks = () => {
    console.log(this.state.date);
    this.setState({visible: false})
  }
  newClicks(){

    if (this.state.visible === false ){
      this.setState({visible:true})
    }
    else this.setState({visible:false})

  }
  componentDidMount() {

    this.timerId = setInterval(
      ()=> this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  filterList(text){
    const filteredList = 
    this.props.items.firstName.filter(function(firstName){
        return (firstName.toLowerCase().search(text.toLowerCase())!== -1)
    }); 
    this.setState({firstName: filteredList});
} 
  render() {
    //console.log('items', this.props.items)

 return (
 <div className="Comment">
 <button onClick={this.newClicks}>button</button>
 <div className="UserInfo">
 <h2>Текущее время {this.state.date.toLocaleTimeString()}</h2>
  <img className="Avatar"/>
    <div className="UserInfo-name" onClick={this.handleClicks}>
      <div className={'texts'+ (this.state.visible ? ' sos' : '')} 
          name={this.state.nams}>
      {this.props.sosts + this.state.nams}</div>
    </div>
          </div>
          <Search filter={this.filterList}/>
          <input placeholder="Поиск" onChange={this.onTextChanged} />
        </div>
        );
} 
};
   
export default Comment  