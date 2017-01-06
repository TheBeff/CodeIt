import React from 'react';
import AppBar from 'material-ui/AppBar';
import IdeaBar from './ideaBar'
import axios from 'axios';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Paper from 'material-ui/Paper';


/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export default class Comments extends React.Component {


	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		ideas: null
	// 	}
	// }

	// componentDidMount() {
	// 	axios.get('/masgiclroute')
	// 	.then((ideas) => {
	// 		this.setState({ideas: ideas});
	// 	})
	// 	.catch(() => {
	// 		console.log('Oh no, no ideas. = (');
	// 	})
		
	// }

	    /* name, description, image, sadfaces, happyfaces, checks, author */

	render(){

		const comments = this.props.comments || [];

		return (
			<div>
				comments.map((comment) => {
					<Paper style={style} zDepth={1} >
						<div>{comment.text}</div>
					</Paper>
				})}
			</div>
		)
	}

}