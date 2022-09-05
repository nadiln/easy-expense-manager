import React from 'react';
import { View, Text, TextInput, ScrollView, Button, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import DatePicker from 'react-native-date-picker'
import { connect } from 'react-redux';
import { Colors } from '../../config/Colors';
import * as ExpensesAction from '../../redux/actions/ExpensesAction';

class  AddExpenseScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            date:new Date(),
            selectedCategoryKey:'',
            expAmount:''
        }
    }

    setDate = () => {
        console.log('setDate called');

    }

    clickOnCategory = key => {

        console.log('category selected', key);
        this.setState({
            selectedCategoryKey: key
        })

    }

    onChangeAmount = amount => {

        this.setState({
            expAmount: amount
        })
       
    }

    saveExpense = () =>{
        console.log('starting to save expense...');

        const { expAmount, selectedCategoryKey, date} = this.state;
        console.log('amount', expAmount);
        console.log('selected category', selectedCategoryKey);
        console.log('selected date', date);

        if(expAmount === '' || selectedCategoryKey === '' || date === ''){
            //will show the validation error msg
        }else{
            const data = {expAmount, selectedCategoryKey, date};
            console.log('sending data',data);
            this.props.saveExpense(data);
            console.log('current state', this.props.currentState);
        }

    }
    render(){

        categories = this.props.expenseCategories;
        return(
            <ScrollView>
            <View style={styles.mainContainer}>
               
            <View style={styles.amountContainer}>
                    <Text style={styles.currencySymbol}>$</Text>
                    <TextInput
                      keyboardType={'number-pad'}
                      style={styles.amountField}
                    placeholder={'0.00'}
                      keyboardAppearance='dark'
                      value={this.state.amount}
                      onChangeText={this.onChangeAmount}
                      
                    />

                </View>
                <View style={styles.categoryContainer}>
                    <Text style={styles.categoryText}>Category</Text>
                    <View style={styles.categoryList}>
                        <ScrollView horizontal={true} style={styles.listScrollView}>

                        {
                            categories.map((category) =>{
                             
                                return(
                                    <View key={category.id}>
                                        <TouchableOpacity onPress={() => this.clickOnCategory(category.id)}>
                                            <View  key={category.id} style={[this.state.selectedCategoryKey === category.id? styles.buttonSelected : styles.buttonNotSelected, styles.categoryItem]}>
                                                <Text style={styles.itemText}>{category.name}</Text>
                                            </View>
                                        </TouchableOpacity>
                                        
                                        
                                      
                                    </View>
                                );
                            })
                        }    
                        
                       
                        </ScrollView>                
                    </View>

                </View>
                <View style={styles.moreDetailContainer}>
                    <Text style={styles.moreDetailText}>More Details</Text>
                    <DatePicker date={this.state.date} onDateChange={this.setDate()} />
                    <TextInput style={styles.notesInput}  placeholder={'Type your note here'} />
                </View>
                <View style={styles.saveButtonContainer}>
                    <Button onPress={this.saveExpense} style={styles.saveButton} title={'Save'} />
                </View>
            </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = state =>({
    expenseCategories : state.ExpenseCategories.categories,
    // below is testin purpose
    currentState : state
})

const mapDispatchToProps = dispatch => {
    return {
        saveExpense: (data) => dispatch(ExpensesAction.addExpense(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseScreen);