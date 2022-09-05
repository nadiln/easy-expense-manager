import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../../config/Colors'
export default class PromoCard extends React.Component{

    render(){
        return(
            <View style={styles.promoCard}>
                          <Image 
                    resizeMode={'stretch'}
                    style={styles.promoImage} source={require('../../../assets/images/promoImages/promo1.jpg')} />

                <TouchableOpacity>
                    <Text style={styles.actionText}>Attend Next Conference</Text>
                </TouchableOpacity>
            </View>
            
             )
    }
}

const styles = StyleSheet.create({
    promoCard:{
        flex:1,
        backgroundColor: Colors.white,
        borderRadius:10,
    },
   promoImage:{
       borderRadius:10,
       height:200,
       width:'100%',
   },
   actionText:{
    marginVertical:20,
    marginHorizontal: 10,
    fontSize:18,
    backgroundColor: Colors.buttonBGBlue,
    color: Colors.white,
    textAlign: 'center',
    padding:12,
    borderRadius:2,

   }

})

