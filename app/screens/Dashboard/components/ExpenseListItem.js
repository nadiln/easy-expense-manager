import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {Colors} from '../../../config/Colors';


class ExpenseListItem extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.listItem}>
                <View style={styles.imageContainer}> 
                <Image 
            //    resizeMode=''
               style={styles.itemImage}
                source={require('../../../assets/images/categoryIcons/transportation.png')}
               /> 
               <Text  ellipsizeMode={'tail'} numberOfLines={1} style={styles.itemText}>Transport</Text>
                </View>
                
                <Text style={styles.amount}>{this.props.currency}150.00</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listItem:{
        flexDirection :'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageContainer:{
        // width: 64,
        flexDirection: 'row',
        height: 40,
        borderRadius:32,
        alignItems: 'center',
        justifyContent: 'center',
        

    },
    itemImage:{
        width: 40,
        height: 40,
        borderRadius:32,
        
    },
    itemText: {
    
        fontSize:16,
        fontWeight: '300',
        letterSpacing: 0.5,
        paddingLeft: 10,
    },
    amount:{
        width:80,
        fontSize: 16,
        fontWeight: '800',
        color: Colors.red,
    }
})
export default ExpenseListItem;