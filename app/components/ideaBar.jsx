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
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import CheckCircleIcon from 'material-ui/svg-icons/action/check-circle';
import MoodBadIcon from 'material-ui/svg-icons/social/mood-bad';
import MoodIcon from 'material-ui/svg-icons/social/mood';
import Comments from './comments';


export default class IdeaBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // make it so smiles and stuff toggle and not just add forever...
      checks: this.props.idea.checks,
      smiles: this.props.idea.happyfaces,
      frowns: this.props.idea.sadfaces,
      dogs: 5
    }
  }

  addSmile = () => {
    let smiles = this.state.smiles + 1;
    this.setState({smiles: smiles})
  }

  addCheck = () => {
    let checks = this.state.checks + 1;
    this.setState({checks: checks})
  }

  addFrown = () => {
    let frowns = this.state.frowns + 1;
    this.setState({frowns: frowns})

  }

  componentWillUnmount() {
     // something something update database with smiles....
  }

  render() {

    const idea = this.props.idea;

     return (<div>
      <Card>
        <CardHeader
          title={idea.author}
          subtitle="Author"
          avatar={idea.image}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardTitle title={idea.name} />
        <CardText expandable={true}>
          {idea.description}
        </CardText>
        <CardActions expandable={true}>
          <Badge
            badgeContent={this.state.checks}
            primary={true} 
            badgeStyle={{top: 12, right: 12}} >
            <IconButton tooltip="I want to work on this!">
              <CheckCircleIcon onClick={this.addCheck} />
            </IconButton>
          </Badge>
          <Badge
            badgeContent={this.state.smiles}
            primary={true}
            badgeStyle={{top: 12, right: 12}} >
            <IconButton tooltip="This idea is the best!">
              <MoodIcon onClick={this.addSmile} />
            </IconButton>
          </Badge>
          <Badge
            badgeContent={this.state.frowns}
            primary={true}
            badgeStyle={{top: 12, right: 12}} >
            <IconButton tooltip="This idea sucks">
              <MoodBadIcon onClick={this.addFrown} />
            </IconButton>
          </Badge>
          <Comments />
        </CardActions>
      </Card>
    </div> )
  }
};