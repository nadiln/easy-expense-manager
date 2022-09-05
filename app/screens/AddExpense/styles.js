import {StyleSheet} from 'react-native';
import {Colors} from '../../config/Colors';

export const styles = StyleSheet.create({
    mainContainer:{ 
        flex:1,
        backgroundColor: Colors.white,
        marginHorizontal: 10,
        paddingHorizontal:20,
    
    },
    amountContainer:{
        flexDirection:'row',
        marginTop:40,
        justifyContent: 'flex-start',
        height: 90,
        alignItems: 'center',
        
    },
    currencySymbol:{
        width:20,
        fontSize:15,
    },
    amountField:{
        fontSize: 50,
    },
    categoryContainer:{
        marginTop: 20,
       
    },
    categoryText:{
        color: Colors.black
    },
    categoryList:{
        marginTop: 20,
        height:130,
        // backgroundColor:'red',
        // flexDirection:'row',
        // overflow: 'scroll'

    },
    listScrollView:{
        // flexDirection: 'row',
        direction:'ltr'
    },  
    categoryItem:{
        marginHorizontal:5,
        marginVertical:5,
        height:100,
        width:100,
        alignItems:"center",
        justifyContent: "center"
    },
    buttonSelected:{
        backgroundColor:Colors.buttonBGBlue
    },
    buttonNotSelected: {
        backgroundColor:Colors.red,
    },
    itemText:{
        fontWeight: 'bold',
        color: Colors.white
    },
    moreDetailContainer:{
        marginTop:20,
    },
    notesInput:{
        marginVertical: 30,
    },
    saveButtonContainer: {
        marginBottom: 30,
    }

})