import React, { Component } from "react"
import DataSource from "../../models/DataSource"
import withSubscription from '../../HOC/withSubscription'

class BlogPost extends Component{
    
    constructor(props){
        super(props)
        console.log(this.props.post)
        this.state = {
            post: this.props.post
        }
    }

    static getDerivedStateFromProps = (props, state) => {
        let newState = {
            post: props.data
        } 
        return newState
    }

    render(){
        return (
            <>
                <p>{this.state.post}</p>
            </>
        )
    }

}

export default withSubscription(BlogPost, () => DataSource.getBlogPost() , 3000)