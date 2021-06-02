import React, { useContext } from 'react';
import './home.css';

class Tweet extends React.Component {
    constructor(props) {
      super(props);
      this.state = this.props.cur;
      this.like = this.like.bind(this);
      this.isLiked = false;
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
            <pre>{this.state.body}</pre>
        </div>

        <div float="right">
        <button className= {this.isLiked ? "liked-button" : "unliked-button"} onClick={this.like}>
            Like
        </button>
        <button className="share-button">
            Share
        </button>
        </div>
    </div> 
    );
};

like() {
    if (!this.isLiked) {
        this.setState ({
            likes: this.state.likes + 1,
        })
    }
    else {
        this.setState ({
            likes: this.state.likes - 1,
        })
    }
    this.isLiked = !this.isLiked;
}

}
export default Tweet;