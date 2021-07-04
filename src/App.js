import Header from "./Components/header/Header";
import About from "./Components/about/About";
import Resume from "./Components/resume/Resume";
import Contact from "./Components/contact/Contact";
import Service from "./Components/services/Service";
import Footer from "./Components/footer/Footer";
import Intro from "./Components/intro/Intro";
import { Component } from "react";


import $ from 'jquery'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      resumeData: {}
    }
  }

   async getResumeData(){
    const response =  await fetch('/resumeData.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'cache': false,
       }
    });
    if(response.ok){
      const data = await response.json()
      this.setState({resumeData: data});
    }else{
      alert('Unexpected Error');
    }

        

  }

  componentDidMount(){
    window.$= $;
    window.jQuery =$;
    
    this.getResumeData();
    this.appendScript("js/plugins.js");
    this.appendScript("js/main.js");
  }

  appendScript = (scriptToAppend) => {
    const script = document.createElement("script");
    script.src = scriptToAppend;
    script.async = false;
    document.body.appendChild(script);
    }
  
  render(){
    return (
      <div className="App">
        <Header></Header>
        <Intro data={this.state.resumeData.intro}></Intro>
        <About data={this.state.resumeData.about}></About>
        <Resume data={this.state.resumeData.resume}></Resume>
        <Service data={this.state.resumeData.service}></Service>
        <Contact data={this.state.resumeData.contact}></Contact>
        <Footer data={this.state.resumeData.footer}></Footer>
      </div>
    );
  }
}
