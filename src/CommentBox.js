import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import DATA from './data';


class CommentBox extends React.Component {
 constructor(props) {
 super(props);
 this.state = { data: [] };
 }

 render() {
   return (
   <div>
   <h2>Comments:</h2>
   <CommentList data={ DATA }/>
   <CommentForm/>
   </div>
    );
 }
}
export default CommentBox;
