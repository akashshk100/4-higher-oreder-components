This project makes use of Higher Order Components:

    1. Higher Oreder are pure javascript functions, therefore we can design them as we want. They wrap a child component and add some extra functionality to it.

    let withSubscription = (ChildComponent, someData) => {
        return class extends Component{                           /* We are returning an anonymous component that is identical to
                                                                     Child component */
            
            // some extra workings
            
            render(
                return(
                    <ChildComponent data={EXTRA_DATA_FROM_THIS_COMPONENT} {...this.props}>
                )
            )
        }
    }