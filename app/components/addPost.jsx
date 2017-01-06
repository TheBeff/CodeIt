import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import FlatButton from 'material-ui/FlatButton';
import {blue300, indigo900} from 'material-ui/styles/colors';
import axios from 'axios';


export default class AddPost extends Component {

  constructor() {
    super();
    this.state = {
      value: 1,
      name: 'blank',
      description: 'a thing',
      tags: [],
      github: 'www.github.com',
      category: 1
    }
    this.handleChange = this.handleChange.bind(this);
    this.savePost = this.savePost.bind(this);
  }

  handleChange (event, index, value) {
    this.setState({value});
  }

  savePost () {
    axios.put('/routename', this.state)
      .then(function () {
        console.log("This idea has been saved to the state")
      })
      .catch(() => {
        console.log("The idea has NOT been saved")
      })
  }

  render() {

     return (<div>
      <TextField
        hintText="Idea Name"
        onChange={ (event) => this.setState({name: event.target.value}) }
      /><br />
      <TextField
        hintText="Idea Description"
        id="idea-description"
        onChange={ (event) => this.setState({description: event.target.value}) }
      /><br />
      <TextField
        hintText="Tags"
        onChange={ (event) => this.setState({tags: event.target.value}) }
      /><br />
      <TextField
        hintText="Github link"
        onChange={ (event) => this.setState({github: event.target.value}) }
      /><br />
      <SelectField
            floatingLabelText="Category"
            value="1"
            onChange={ (event) => this.setState({category: event.target.value}) }
          >
            <MenuItem value={1} primaryText="Category1" />
            <MenuItem value={2} primaryText="Category2" />
            <MenuItem value={3} primaryText="Category3" />
            <MenuItem value={4} primaryText="Category4" />
            <MenuItem value={5} primaryText="Category5" />
      </SelectField>
      <br />
      <FlatButton label="Submit" onClick={this.savePost} />
    </div> )
  }
};