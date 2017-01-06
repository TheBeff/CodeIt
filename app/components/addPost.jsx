import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900} from 'material-ui/styles/colors';


export default class AddPost extends Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event, index, value) {
    this.setState({value});
  }

  render() {

     return (<div>
      <TextField
        hintText="Idea Name"
      /><br />
      <TextField
        hintText="Idea Description"
        id="idea-description"
      /><br />
      <TextField
        hintText="Tags"
      /><br />
      <TextField
        hintText="Github link"
      /><br />
      <SelectField
            floatingLabelText="Category"
            value="1"
            onChange={this.handleChange}
          >
            <MenuItem value={1} primaryText="Category1" />
            <MenuItem value={2} primaryText="Category2" />
            <MenuItem value={3} primaryText="Category3" />
            <MenuItem value={4} primaryText="Category4" />
            <MenuItem value={5} primaryText="Category5" />
      </SelectField>
    </div> )
  }
};