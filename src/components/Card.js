import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    paddingBottom: 15,
}

class CardExampleWithAvatar extends React.Component {
    constructor(props){
    super(props)
}
render(){
    return(
        <div class="container">
        <div class="row">{this.props.zapis.map((item,i) => {
                return (
<div class="col-md-3" style={style}>
  <Card >
    <CardMedia
      overlay={<CardTitle subtitle="Overlay title" />}>
      <img src={item.ims} alt="" style={{height:255}}/>
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
    </CardText>
    <CardActions>
    <RaisedButton  secondary={true} label="More" fullWidth={true} />
    </CardActions>
  </Card>
  </div>)
        })}</div></div>    
        )
    }
}

export default CardExampleWithAvatar