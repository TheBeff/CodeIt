import React from 'react';
import AppBar from 'material-ui/AppBar';
import IdeaBar from './ideaBar'
import axios from 'axios';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
export default class IdeaList extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			ideas: null
		}
	}

	componentDidMount() {
		axios.get('/api/ideas')
		.then((ideas) => {
			this.setState({ideas: ideas.data});
		})
		.catch(() => {
			console.log('Oh no, no ideas. = (');
		})
		
	}

	    /* name, description, image, sadfaces, happyfaces, checks, author */

	render(){

		const idea = [{
			author: 'Arthur',
			name: 'Aardvaark After Dark',
			description: 'Dating service for aardvark',
			image: 'https://placebear.com/100/100',
			sadfaces: 2,
			happyfaces: 4,
			checks: 10
		}]

		const ideas = this.state.ideas || idea

		return (
			<div>
				{ideas.map((idea, index) => {
					return (<IdeaBar idea={idea} key={index} />)
				})}
			</div>
		)
	}

}