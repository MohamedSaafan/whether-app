import React from 'react';
import logo from './logo.svg';
import './App.css';
const API_KEY = '046d8d7d9539eeafd2a4ee7181519d9b';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue:'',
      apiValue:{
        name:'cairo',
      sys:{
        country:'EG'
      },
      weather:[
        {description:'clear'},
      ],
      main:{
        humidity:40,
        pressure:100
      }
    }

    }
  }
  componentDidMount(){
    console.log(this.state.apiValue.weather[0].description + 'from component did mount')
  }
  handleEnputClick = (e)=>{
    this.setState({
      inputValue:e.target.value
    })
  }
  handleClick = ()=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValue},egypt&appid=e36ed364400282e43250b6c4c0274d44`)
    .then(res => res.json())
    .then(data =>{
       this.setState({apiValue:data})
    }
       );
    this.setState({inputValue:''})
  }
  render(){
    return (
      <div className="App">
            <header>
            <div className="heading">
                <h2>Just type the city name</h2>
                <p>you must spelling correctly</p>
                <input type = "text"  value={this.state.inputValue} onChange = {this.handleEnputClick}/>
                <button onClick = {this.handleClick}>find</button>
            </div>
            
            <ul>
                <li>{this.state.apiValue.name} ,{this.state.apiValue.sys.country}</li>
                <li className = "circle"><div></div></li>
                <li>{this.state.apiValue.weather[0].description}</li>
                <li>{this.state.apiValue.main.humidity}°</li>
                <li><span>{this.state.apiValue.main.pressure}P</span> <span>20°</span></li>
            </ul>
            
        </header>
      </div>
    );

  }

}

export default App;
