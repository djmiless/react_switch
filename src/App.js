import React from "react" 
import './App.css';
import Books from './Components/Books/Books';
import Themer from './Components/Themer/Themer';


class App extends React.Component{

  constructor(){
    super()

    this.state = {
      // backgroundColor: localStorage.getItem('themer')
      backgroundColor: localStorage.getItem('themer')
     
      
    
    }

  } 

  changeTheme = (theme) => {
    let background_color;
    switch(theme){
      case 'dark':
        background_color = 'black'
        this.setState({
          backgroundColor: background_color
        })
        break;
      case 'danger':
        background_color = 'red'
        this.setState({
          backgroundColor: background_color
        }) 
        break;

        default:

    }
    localStorage.setItem('themer', background_color)
  }
 

  // changeTheme(theme){
  
    

  //   // if(theme == "danger"){
  //   //   this.setState({
  //   //     backgroundColor: 'red'
  //   //   })
  //   // }

  // }

  render(){
    return (
      <div className="App" style={{backgroundColor: this.state.backgroundColor, color: 'white'}}>
  
        <header className="App-header">
            <Themer changeTheme={this.changeTheme}/>
            <Books />
        </header>
      
      </div>
    );
  }


}

export default App
