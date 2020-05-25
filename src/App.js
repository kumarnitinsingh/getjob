import React,{Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js';
import { InstantSearch } from 'react-instantsearch-dom';


import Rank from './Components/Rank/Rank.js';
import Particles from 'react-particles-js';
import SignIn from './Components/SignIn/SignIn.js';
import Register from './Components/Register/Register.js';
import CardList from './Components/CardList/CardList.js';
import SearchBox from './Components/SearchBox/SearchBox.js';
import Scroll from './Components/Scroll/Scroll.js';
import JobBoard from './Components/JobBoard/JobBoard.js'



const particlesoptions={
                particles: {
                  numbers:{
                    value:30,
                    density:{
                      value:500,
                      enable:true,
                      value_area :800
                    }

                  }
                  }
                }
              



class App extends Component {
  constructor(){
    super();
    this.state={
      robots:[],
      searchfield:'',
      input:'',
      box:{},
      route:'signin',
      isSignedIn:false
    }
  }
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=>this.setState({robots:users}));
  
  }

onSearchChange =(event)=>{
  this.setState({searchfield:event.target.value})
}

  onRouteChange=(route)=>{
    if(route==='signout'){
      this.setState({isSignedIn:false})
    }
    else if (route==='home'){
      this.setState({isSignedIn:true})
    }

    this.setState({route :route});

  }
  
render(){
 const {isSignedIn,imageUrl,route,box} = this.state;
    return(
    <div className="App">
    <Particles className='particles'
    params={particlesoptions}
    />
    
    <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
    {route==='home'?
    <div>
   <Rank/>
   <div>
   <script src="https://polyfill.io/v3/polyfill.min.js?features=Promise%2CObject.entries%2CObject.assign"></script>

</div>
      
    <SearchBox />
    <Scroll>
    
    <JobBoard/>
    </Scroll>
    

  
    
    </div>
   : ( route==='signin'
   ?<SignIn onRouteChange={this.onRouteChange}/>
   :<Register onRouteChange={this.onRouteChange}/>
   )
  }
     
    </div>
  );

}
}

export default App;
 
