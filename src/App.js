import React, { Component } from 'react';


import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';

injectTapEventPlugin();

class App extends Component {
    constructor(props)
    {
        super(props);
        this.state = {open: false};
    }
  render() {
    return (
        <div className="App">
          <AppBar
              title="Title"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              onLeftIconButtonTouchTap={()=> this.setState({open: !this.open})}
          />
            <Drawer
                docked={false}
                width={200}
                open = {this.state.open}
                onRequestChange={(open) => this.setState({open})}
            >
                <MenuItem>Menu Item</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
            </Drawer>

        </div>
    );
  }
}

export default App;
