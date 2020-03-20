import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postAction'

class Posts extends Component {
 componentWillMount(){
     this.props.fetchPosts();
     console.log(this.props.posts)
 }
    render() {
        const postItems = this.props.posts.map(post => (
            
            
            <div className="col-8">
           <h3>Country:{post.country_name}</h3>
           <p>Total Cases:{post.cases}</p>
           <p>Total Death:{post.deaths}</p>
            <p>Total Recovered:{post.total_recovered}</p>
            <p>New Cases:{post.new_cases}</p>
            <p>New Death:{post.new_deaths}</p>
            </div>
          ));
        return (
            <div>
             {postItems}  
            </div>
        )
    } 
}

const mapStateToProps=state=>({
    posts:state.posts.items
})
export default  connect(mapStateToProps,{fetchPosts})(Posts)