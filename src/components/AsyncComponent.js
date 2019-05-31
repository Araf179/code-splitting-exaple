import React, { Component } from 'react';

export default function asyncComponent (importedComponent) {
    class AsyncComponent extends Component {
            constructor(props){
                super(props);
                this.state = {
                    component: null
                }    
            }
            // Destructoring to get the default (page2.default) component
        async componentDidMount() {
            const { default: component} = await importedComponent()
            this.setState({
                component: component
            })
        }

        render(){
            const Component = this.state.component;
            return Component ? <Component{...this.props} /> : null;
        }
    }

    return AsyncComponent
}