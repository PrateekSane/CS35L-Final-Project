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
      this.isChanged = true;
    }

getData() {
    const userID = localStorage.getItem('userID');
        axios.get(`http://localhost:5000/getUser/${userID}`)
            .then(res => {
            console.log(res.data.sharedTweets);
            this.isLiked = res.data.likedTweets.includes(this.state.id);
            this.isShared = res.data.sharedTweets.map((tweet) => tweet._id).includes(this.state.id);
            this.setState({ user: res });
        })
}

render() {
    if (this.isChanged) {
        this.getData();
        this.isChanged = false;
    }
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
        {console.log("button " + this.isShared)}
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
    const userID = localStorage.getItem('userID');
    if (!this.isLiked) {
        axios.put(`http://localhost:5000/addLike/${this.state.id}`);
        axios.post(`http://localhost:5000/likeTweet/${this.state.id}&${userID}`);
        this.setState ({
            likes: this.state.likes + 1,
        });
        this.isLiked = true;
    }
    else {
        axios.put(`http://localhost:5000/subLike/${this.state.id}`);
        axios.post(`http://localhost:5000/unlikeTweet/${this.state.id}&${userID}`);
        this.setState ({
            likes: this.state.likes - 1,
        })
        this.isLiked = false;
    }
    this.isChanged = true;
}

share() {
    if(localStorage.getItem('userID') == null) {
        window.location.replace("http://localhost:3000/login");
        return;
    }
    const userID = localStorage.getItem('userID');
    console.log(this.isShared);
    if (!this.isShared) {
        axios.put(`http://localhost:5000/addShare/${this.state.id}`);
        axios.post(`http://localhost:5000/shareTweet/${this.state.id}&${userID}`);
        this.setState ({
            shares: this.state.shares + 1,
        });
        this.isShared = true;
    }
    else {
        axios.put(`http://localhost:5000/subShare/${this.state.id}`);
        axios.post(`http://localhost:5000/unshareTweet/${this.state.id}&${userID}`);
        this.setState ({
            shares: this.state.shares - 1,
        });
        this.isShared = false;
    }
    this.isChanged = true;
}


}

export default Tweet;
