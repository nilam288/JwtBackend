import logo from './logo.svg';
import './App.css';
import './component/Login.css';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import SiderDemo from './SiderDemo';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './component/Login';
import MenCompo from './component/MenCompo';
import {Provider} from 'react-redux';
import store from'./store';
import MensAdd  from './component/MensAdd';
import FootwareItem from './component/FootwareItem';
import Footware from './component/Footware';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
      <SiderDemo/>
     
       <Route path="/Login" component={Login}/>   
       <Route path="/MenCompo" component={MenCompo}/>   
       <Route path="/MensAdd" component={MensAdd}/>  
       <Route path="/Footware" component={Footware}/> 
      </Router>
           <Button type="primary">Primary Button</Button>

    </div>
    </Provider>
  );
}

export default App;
