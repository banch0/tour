import React from 'react';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    opens: state.get('opens'),
    views: state.get('views'),
})
const mapDispatchToProps = dispatch => ({
    open: () => dispatch({type: 'OPEN_SIDE'}),
    view: () => dispatch({type: 'THEME_NUMBER'}),
})
class Header extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            open: false
        };
    }
    handleToggle = () => {
    this.setState({open:!this.state.open});

    };
    handleClose (){
    this.setState({open:false});
    }
    render(){
        return(
            <div>
                <AppBar title="SiteName"
                className="heades"
                onLeftIconButtonClick={this.props.open}
                />
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)