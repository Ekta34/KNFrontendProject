import React from 'react'
import './Admin.scss'
import Toolbar from './Toolbar'
import SideDrawer from './SideDrawer'
import Backdrop from './Backdrop'
import Home from './Home'
import Footerbar from './Footerbar';

class Admin extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        isSideDrawerOpen:false
    }
  }

  toggleDrawer = () => {
    this.setState((prevState)=>{
      return {isSideDrawerOpen: !prevState.isSideDrawerOpen};
    })
  }

  onClickBackDrop = () => {
      this.setState({isSideDrawerOpen:false});
  }

  render(){
    
    let backdrop ;

    if(this.state.isSideDrawerOpen){
      backdrop = <Backdrop onClickBackDrop={this.onClickBackDrop} />;
    }

    return(
      <div>
          <Toolbar toggleDrawer={this.toggleDrawer}/>
          <SideDrawer show={this.state.isSideDrawerOpen} />
          {backdrop}
          <main>
              <Home />
          </main>
          <Footerbar/>
      </div>
    )
  }
}

export default Admin
