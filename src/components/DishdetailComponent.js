import React, {Component} from 'react';
import {Card,CardImg,CardImgOverlay, CardText,CardBody,CardTitle} from 'reactstrap';
import COMMENTS from '../shared/comments';
class DishDetail extends Component{
    constructor(props){
        super(props);

        this.state={
            selectedComments : COMMENTS
        };
    }
    renderComments(CommentArray){
        if (CommentArray !=null){
        const menu = CommentArray.map((dish)=>{ 
            return(
            <ul className='list-unstyled'>
                    <p><b>{dish.comment}</b></p> 
                    <p> -- {dish.author} ,  {dish.date}</p>
            </ul>
        );
        
    });
    return menu;
}
else{
    return (<div></div>);
}
}
    render(){
        const select = this.props.selectedDish;
        if(select !=null){
            let SelecteddishComments = this.state.selectedComments.filter(  (dish) => {
                return dish.dishId  === select.id});
                const render = this.renderComments(SelecteddishComments)
            return(
                <div className='container'>
                <div className='row'>
                <div className="col-sm-12 col-md-5 m-1">
                <Card>
                    <CardImg  object src={select.image} alt={select.name} />
                    <CardBody>
                    <CardTitle heading>{select.name}</CardTitle>
                    <CardText>{select.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                <div className="col-sm-12 col-md-5 m-1">
                <h4>Comments</h4>
                {render}
                </div>
                </div>
                </div>
            );
        }
        else{
            return(<div></div>);
        }
    
    }

}


export default DishDetail;