import React, {Component} from 'react'

function withSubscription(WrappedComponent, getData, time){
    return class extends Component{
        constructor(props){
            super(props)
            this.state = {
                data: getData()
            }
        }
        subscription = null
        componentDidMount = () => {
            this.subscription = setInterval( this.handleDataFetching, time)
        }
        componentWillUnmount = () => {
            clearInterval(this.subscription)
        }
        handleDataFetching = () => {
            this.setState({
                data: getData()
            })
        }
        render(){
            console.log("Renderred called")
            return(
                <WrappedComponent data={ this.state.data } {...this.props}></WrappedComponent>
                /* 
                The Significance of passing "...this.props" : Whenever the Wrapped Component is used in container(component) 
                this Component will be used instead, without the developer knowing because we are exporting Wrapped Component 
                instead of i.e default export statement contains call to this HOC. Whatever props developer in intending to pass to 
                wrapper component it is passed to this component returned by HOC hence it is important that we return the props
                we recieve in this HOC to the wrapped component because it might be making use of it. The line no. 9 & 10 in BlogPost.js
                and CommentList.js will cause error if props are not passed in this way.
                
                */
            )
        }
    }
}

export default withSubscription