import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Head';
import DrawerUndockedExample from './components/Draver';
import RaisedButton from 'material-ui/RaisedButton';
import Slid from './components/Slid';
import { danie } from './dat';

const mapStateToProps = state => ({});
const mapDispatchToProps = distpatch => ({});

class Main extends Component {
    constructor(props){
        super(props);
    }
    cons(){
    console.log('main.jsx');
    }
    render(){
        return(
            <div>
            <Header />
            <Slid />
            <DrawerUndockedExample />
            <RaisedButton secondary={true} 
                        label="More" 
                        onClick={this.cons} />
            <button onClick={console.log('hellos')}>button</button>
            <div> {danie[0].texts}</div>
        </div>
        );
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)