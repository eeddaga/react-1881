import React, {Component} from 'react';
import {
  Card,
  CardMedia
} from 'material-ui/Card';


class CardSection extends Component {
  render(){
    return(
      <Card>
        <CardMedia>
          <img src="https://images.unsplash.com/uploads/14128324071271c853818/3765c625?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fb9fdc80e4e0172a831d11c76aa1782a&auto=format&fit=crop&w=1502&q=80" />
        </CardMedia>
      </Card>
    )
  }
}








export default CardSection;
