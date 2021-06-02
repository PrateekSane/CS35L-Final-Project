import axios from 'axios';
import React, { useContext } from 'react';
import './home.css';

class Tweet extends React.Component {
    constructor(props) {
      super(props);
      this.state = this.props.cur;
      this.like = this.like.bind(this);
      this.isLiked = false;
      this.share = this.share.bind(this);
      this.isShared = false;
    }


render() {
    return (
    <div className="card" >
        <div className="header" style={{fontSize: "25px"}}>{this.state.title}</div>
        <br></br>
        <div className="header">
            <a className="tag-button">{this.state.tag}</a>
            <a className="tag-button">Likes: {this.state.likes}</a>
            <a className="tag-button">Shares: {this.state.shares}</a>
        </div>

        <div>
            <br></br>
            <pre>{this.state.body}</pre>
        </div>

        <div float="right">
        <button className= {this.isLiked ? "liked-button" : "unliked-button"} onClick={this.like}>
            Like
        </button>
        <button className= {this.isShared ? "shared-button" : "unshared-button"} onClick={this.share}>
            Share
        </button>
        </div>
    </div>
    );
    
};

like() {
    if(localStorage.getItem('userID') == null) {
        window.location.replace("http://localhost:3000/login");
        return;
    }
    if (!this.isLiked) {
        this.setState ({
            likes: this.state.likes + 1,
        });
        axios.put(`http://localhost:5000/addLike/${this.state.id}`);
    }
    else {
        this.setState ({
            likes: this.state.likes - 1,
        })
        axios.put(`http://localhost:5000/subLike/${this.state.id}`);
    }
    this.isLiked = !this.isLiked;
}

share() {
    if(localStorage.getItem('userID') == null) {
        window.location.replace("http://localhost:3000/login");
        return;
    }
    if (!this.isShared) {
        this.setState ({
            shares: this.state.shares + 1,
        });
        axios.put(`http://localhost:5000/addShare/${this.state.id}`);
    }
    else {
        this.setState ({
            shares: this.state.shares - 1,
        });
        axios.put(`http://localhost:5000/subShare/${this.state.id}`);
    }
    this.isShared = !this.isShared;
}


}

export default Tweet;
