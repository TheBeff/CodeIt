import React from 'react';
import AppBar from 'material-ui/AppBar';
import Login from './Login.jsx';
import WhoAmI from './WhoAmI.jsx';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
export default class  Navbar extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return (<AppBar
	    title="CodeIt"
	    iconClassNameRight="muidocs-icon-navigation-expand-more">
	     <nav>
	    	{this.props.user ? <WhoAmI/> : <Login/>}
	 	 </nav> 
	    </AppBar> )
	}

}