import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './BottomTabNavigator';

export default class AppNavigator extends React.Component{

    render(){
        return(
            <NavigationContainer>
                <BottomTabNavigator />

            </NavigationContainer>
        )
    }

}