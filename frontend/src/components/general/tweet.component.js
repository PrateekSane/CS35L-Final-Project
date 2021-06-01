import React, { useContext } from 'react';
import './home.css';

class Tweet extends React.Component {
    constructor(props) {
      super(props);
      this.state = 
        this.props.cur;
    }


render() {
    return (
    <div className="card" >
        <div className="header" style={{fontSize: "25px"}}>{this.state.title}</div>
        <br></br>
        <div className="header">
            <a class="tag-button">{this.state.tag}</a>
            <a class="tag-button">Likes: {this.state.likes}</a>
            <a class="tag-button">Shares: {this.state.shares}</a>
        </div>
        
        <div>
            <br></br>
            <p style={{textAlign: "center"}}>{this.state.body}</p>
        </div>
    </div> 
    );
};

}
export default Tweet;