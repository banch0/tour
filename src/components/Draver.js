import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import Slider from 'material-ui/Slider';
import Toggle from 'material-ui/Toggle';

const mapStateToProps = state => ({
  opens: state.get('opens'),
    views: state.get('views'),
})
const mapDispatchToProps = dispatch => ({
    open: () => dispatch({type: 'OPEN_SIDE'}),
    view: () => dispatch({type: 'THEME_NUMBER'}),
})

const style = {
    marginLeft: 30,
    toggle: {
        marginBottom: 16,
        marginLeft: 30,
        width: 150,
    }
}
class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true,
      secondSlider: 50,
  };

  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  handleSecondSlider = (event, value) => {
    this.setState({secondSlider: value});
  };

  render() {
    return (
      <div>
        
        <Drawer
          docked={false}
          width={270}
          open={this.props.opens}
          onRequestChange={this.props.open}
        >
          <MenuItem onClick={this.props.open}>Home</MenuItem>
          <MenuItem onClick={this.props.open}>Destination</MenuItem>
          <MenuItem onClick={this.props.open}>Accommodation</MenuItem>
          <MenuItem onClick={this.props.open}>Things to do</MenuItem>
          <MenuItem onClick={this.props.open}>Trips</MenuItem>
          <MenuItem onClick={this.props.open}>Facts</MenuItem>
          <MenuItem onClick={this.props.open}>Transport</MenuItem>
          <MenuItem onClick={this.props.open}>Travel to TJ</MenuItem>

          <Slider style={{width: 200, marginLeft: 30}} 
                min={0}
                max={100}
                step={1}
                value={this.state.secondSlider}
                onChange={this.props.view} />
          <p style={{marginLeft: 20}}>
          <span>{'The value is: '}</span>
          <span>{this.state.secondSlider}</span>
          <span>{this.props.views}</span>
        </p>
        <Toggle
      label="Simple"
      style={style.toggle}
    />
        </Drawer>
      </div>
    );
  }
}
export default  connect(mapStateToProps, mapDispatchToProps)(DrawerUndockedExample)