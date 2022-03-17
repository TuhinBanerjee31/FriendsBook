import React from "react";

// FUNCTION FOR CATCHING ERRORS 

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if(this.state.hasError){
            return <h1>Something Might Went Wrong. Will Be Fixed Soon !!!</h1>
        }
        else{
            return this.props.children
        }
    }
}

export default ErrorBoundary;