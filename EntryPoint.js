import React from 'react';
import AppNavigator from './app/navigation/index';
import { Provider } from 'react-redux'; 
import store from './app/store/configureStore'


class EntryPoint extends React.Component{
    
    render(){
        return(
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}

export default EntryPoint;