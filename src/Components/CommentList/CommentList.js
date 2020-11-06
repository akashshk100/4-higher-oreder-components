import React, {Component} from 'react'
import DataSource from '../../models/DataSource'
import withSubscription from '../../HOC/withSubscription'

class CommentList extends Component{
    
    subscription = null
    constructor(props){
        super(props)
        console.log(this.props.commentList)
        this.state = {
            commentList: this.props.commentList
        }
    }

    static getDerivedStateFromProps = (props, state) => {
        let newState = {
            commentList: props.data
        } 
        return newState
    }

    render = () => {
        return (
            <div>
                <p>
                    {this.state.commentList}
                </p>
            </div>
        )
    }
}

export default withSubscription(CommentList, () => DataSource.getCommentList() , 1000)