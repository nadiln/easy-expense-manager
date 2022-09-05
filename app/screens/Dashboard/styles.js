import {StyleSheet} from 'react-native';
import {Colors} from '../../config/Colors'


export const DashboardStyles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor: Colors.grayBackground,
        marginHorizontal: 10,

    },
    topSpendingCont:{
        backgroundColor: Colors.white,
        marginTop: 10,
        paddingHorizontal:10,
        paddingTop:15,
        paddingBottom: 20,
        borderRadius:10,
        marginBottom:15,

    },
    headerText:{
        fontSize: 19,
        fontWeight: 'bold',

    },
    listContainer:{
      marginTop: 25,  
    },
    recentTransactions:{
        backgroundColor: Colors.white,
        marginTop: 10,
        paddingHorizontal:10,
        paddingTop:15,
        paddingBottom: 20,
        borderRadius:10,
        marginBottom:15,

    }


})