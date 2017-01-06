import React from 'react';
import AppBar from 'material-ui/AppBar';
import IdeaBar from './ideaBar'
import axios from 'axios';

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
		axios.get('/masgiclroute')
		.then((ideas) => {
			this.setState({ideas: ideas});
		})
		.catch(() => {
			console.log('Oh no, no ideas. = (');
		})
		
	}

	    /* name, description, image, sadfaces, happyfaces, checks, author */

	render(){

		const idea = {
			author: 'Arthur',
			name: 'Aardvaark After Dark',
			description: 'Dating service for aardvark',
			image: 'https://placebear.com/100/100',
			sadfaces: 2,
			happyfaces: 4,
			checks: 10
		}

		return (<IdeaBar idea={idea} cool="wwowowowo" />)
	}

}