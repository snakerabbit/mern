import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import axios from 'axios';


class CommentBox extends React.Component {
 constructor(props) {
   super(props);
   this.state = { data: [] };
   this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
   this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
 }

 loadCommentsFromServer(){
   axios.get(this.props.url).then(res =>{
     this.setState({data: res.data});
   });
 }

 handleCommentSubmit(){

 }

 componentDidMount(){
   this.loadCommentsFromServer();
   setInterval(this.loadCommentsFromServer, this.props.pollInterval);
 }

 render() {
   return (
   <div>
   <h2>Comments:</h2>
   <CommentList data={this.state.data}/>
   <CommentForm/>
   </div>
    );
 }
}
export default CommentBox;
