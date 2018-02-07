import React from 'react';

class CommentBox extends React.Component {
 constructor(props) {
 super(props);
 this.state = { data: [] };
 }

 render() {
   return (
   <div>
   <h2>Comments:</h2>
   </div>
    );
 }
}
export default CommentBox;
