import React,{ Component }from 'react';
import Reactaux from '../reactaux';
import classes from './Layout.css'; 
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import {connect} from  'react-redux';
class Layout extends Component{
    state={
        showsideDrawer:false
    }
    SidedrawerToggleHandler=()=>{
        let a=this.state.showsideDrawer
        this.setState({showsideDrawer:!a});
    }
    SideDrawerClosedHandler=()=>{
        var temp=this.state.showsideDrawer
        this.setState({showsideDrawer:!temp})
    
    }
    render() {
    return(
    <Reactaux>
    <Toolbar 
        isAuth={this.props.isAuthenticated}
        drawerToggleclicked={this.SidedrawerToggleHandler} />
    <SideDrawer isAuth={this.props.isAuthenticated} open ={this.state.showsideDrawer} closed={this.SideDrawerClosedHandler}/>
    <main className={classes.content }>{this.props.children}</main>
    </Reactaux>

    );
}
} 
const mapStateToProps=state=>{
    return {
       isAuthenticated:state.auth.token!==null

    }
}


const mapDispatchToProps=dispatch=>{
    return{
    }
}
export default connect(mapStateToProps) (Layout);