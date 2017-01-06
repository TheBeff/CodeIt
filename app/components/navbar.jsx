import React from 'react';
import AppBar from 'material-ui/AppBar';
import Login from './Login.jsx';
import WhoAmI from './WhoAmI.jsx';
import AddPost from './addPost';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
export default class  Navbar extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			open: false
		}
	}

	handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

	render(){
		const actions = [
	      <FlatButton
	        label="Cancel"
	        primary={true}
	        onTouchTap={this.handleClose}
	      />,
	      <FlatButton
	        label="Submit"
	        primary={true}
	        keyboardFocused={true}
	        onTouchTap={this.handleClose}
	      />,
	    ];


		return (<AppBar
	    title="CodeIt"
	    iconClassNameRight="muidocs-icon-navigation-expand-more">
	     <nav>
	    	{this.props.user ? <WhoAmI/> : <Login/>}
	 	 </nav> 
	 	 <RaisedButton label="Add Idea" primary={true}/>
	 	 <Dialog
          title="Add a new idea"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        The actions in this window were passed in as an array of React objects.
        </Dialog>
	    </AppBar> )
	}

}