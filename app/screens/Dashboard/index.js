import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { DashboardStyles as styles} from './styles'
import ExpenseListItem from './components/ExpenseListItem';
import PromoCard from './components/PromoCard';
import { connect } from 'react-redux';

class DashboardScreen extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log('Dashboard screen started');

        console.log('current state', this.props.currentState);
    }


    render(){
        return(
            <View style={styles.mainContainer}>
                <ScrollView>
                    <View style={styles.topSpendingCont}>
                        <Text style={styles.headerText}>Top Spending</Text>
                        <View style={styles.listContainer}>
                            <ExpenseListItem />
                            <ExpenseListItem />
                            <ExpenseListItem />
                        
                    

                        </View>
                    </View>
                    <View>
                    <PromoCard />
                    </View>
                    <View style={styles.recentTransactions}>
                        <Text style={styles.headerText}>Recent Transactions</Text>
                            <ExpenseListItem />
                            <ExpenseListItem />
                            <ExpenseListItem />
                    </View>
                </ScrollView>
                
                    
            </View>
        )
    }
}

const mapStateToProps = state =>({
    currentState : state,
  
})

const mapDispatchToProps = dispatch => {
    return {}
}
export default connect(mapStateToProps,mapDispatchToProps)(DashboardScreen);