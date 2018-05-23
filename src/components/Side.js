import React from 'react';
import Sidebar from 'react-sidebar';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Delete from 'material-ui/svg-icons/action/delete';
import Paper from 'material-ui/Paper';


const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
  paddingRight: '150px',
  paddingBottom: '600px',
};

const mql = window.matchMedia(`(min-width: 800px)`);

class Sideb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mql: mql,
      docked: props.docked,
      open: true,
    }

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

onSetSidebarOpen (open){
  this.setState({sidebarOpen:open});
}

componentWillMount () {
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, sidebarDocked: mql.matches});
  }

  componentWillUnmount () {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged () {
    this.setState({sidebarDocked: this.state.mql.matches});
  }

  render() {
    const sidebarContent = <b>Sidebar content</b>;
    const sidebarProps = {
      sidebar: this.state.sidebarOpen ,
      docked: this.state.sidebarDocked,
      onSetOpen: this.onSetSidebarOpen,
    };

    return (
      <div>
      <AppBar title="SiteName"
        iconClassNameRight="muidocs-icon-navigation-expand-more" 
        onLeftIconButtonClick={this.onSetSidebarOpen}
        />
      <Sidebar contentClassName="siddes" className="hello"
               sidebar={<Paper style={style}>
                <Menu>
                 <MenuItem primaryText="Delete" 
                 leftIcon={<Delete />} />
                 <MenuItem primaryText="Delete" 
                 leftIcon={<Delete />} />
                 <MenuItem primaryText="Delete" 
                 leftIcon={<Delete />} />
                 <MenuItem primaryText="Delete" 
                 leftIcon={<Delete />} />
                 <MenuItem primaryText="Delete" 
                 leftIcon={<Delete />} />
                 <MenuItem primaryText="Delete" 
                 leftIcon={<Delete />} />
                 <MenuItem primaryText="Delete" 
                 leftIcon={<Delete />} />
                 <MenuItem primaryText="Delete" 
                 leftIcon={<Delete />} />
               </Menu> </Paper>}
               open={this.state.sidebarOpen}
               docked={this.state.sidebarDocked}
               onSetOpen={this.onSetSidebarOpen}>
        <b>Main content</b>
      </Sidebar>
      </div>
    );
  }
};

export default Sideb;