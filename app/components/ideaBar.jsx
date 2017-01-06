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


export default class IdeaBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dogs: 5
    }
  }

  render() {

    const idea = this.props.idea;
    //     const idea = {
    //   author: 'Arthur',
    //   name: 'Aardvaark After Dark',
    //   description: 'Dating service for aardvark',
    //   image: 'https://placebear.com/100/100',
    //   sadfaces: 2,
    //   happyfaces: 4,
    //   checks: 10
    // }

     return (<div>
      <Card>
        <CardHeader
          title={idea.author}
          subtitle="Author"
          avatar={idea.image}
        />
        <CardTitle title={idea.name} />
        <CardText>
          {idea.description}
        </CardText>
        <CardActions>
          <Badge
            badgeContent={idea.checks}
            primary={true} 
            badgeStyle={{top: 12, right: 12}} >
            <IconButton tooltip="I want to work on this!">
              <CheckCircleIcon />
            </IconButton>
          </Badge>
          <Badge
            badgeContent={idea.happyfaces}
            primary={true}
            badgeStyle={{top: 12, right: 12}} >
            <IconButton tooltip="This idea is the best!">
              <MoodIcon />
            </IconButton>
          </Badge>
          <Badge
            badgeContent={idea.sadfaces}
            primary={true}
            badgeStyle={{top: 12, right: 12}} >
            <IconButton tooltip="This idea sucks">
              <MoodBadIcon />
            </IconButton>
          </Badge>
        </CardActions>
      </Card>
    </div> )
  }
};