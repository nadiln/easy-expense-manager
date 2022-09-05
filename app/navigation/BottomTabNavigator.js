import React from 'react';
import AddExpenseScreen from '../screens/AddExpense';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/Dashboard';


const Tab = createBottomTabNavigator();

const HomeRouteStack = createNativeStackNavigator();
function HomeStack(){
    return(
        <HomeRouteStack.Navigator initialRouteName='DashboardScreen'  screenOptions={{headerShown:false}} >
            <HomeRouteStack.Screen name="DashboardScreen" component={DashboardScreen}  />
            <HomeRouteStack.Screen name="NewExpense" component={AddExpenseScreen} />
        </HomeRouteStack.Navigator>
    );
}

export default class BottomTabNavigator extends React.Component{



    render(){
        return(
            <Tab.Navigator  screenOptions={{headerShown: false}}>
                <Tab.Screen name="Dashboard" component={HomeStack}/>
                <Tab.Screen name="New Expense" component={AddExpenseScreen}/>
                
            </Tab.Navigator>
        )
    }
}