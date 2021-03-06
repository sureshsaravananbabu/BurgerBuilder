import React,{ Component }from 'react';
import Layout from './hoc/Layout/Layout';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.js';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import Logout  from './containers/Auth/Logout/Logout'
import {connect} from 'react-redux'
import * as actions from './store/actions/index'

class App extends Component {
  componentDidMount (){
    this.props.ontryautosignup();
  }
  render(){
      let routes=(
        <Switch>
        <Route path="/auth"  exact component={Auth}/>
        <Route path="/"  exact component={BurgerBuilder}/>
        <Redirect to="/"/>
        </Switch>
      );
      if (this.props.isAuthenticated){
        routes=(
          <Switch> 
          <Route path="/auth"  exact component={Auth}/>   
          <Route path="/checkout" component={Checkout}/>
          <Route path="/orders"  exact component={Orders}/>
          <Route path="/logout"  exact component={Logout}/>
          <Route path="/"  exact component={BurgerBuilder}/>
          <Redirect to="/"/>
          </Switch>

        )
      }
    return(
    <div>
      <Layout>    
          {routes}
      </Layout>
    </div>
    )
  };
}
const mapStateToProps=state=>{
  return {
    isAuthenticated:state.auth.token!==null,
  }
  }

const mapDispatchToProps=dispatch=>{
  return{
  ontryautosignup:()=>dispatch(actions.authCheckstate())
  };
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
