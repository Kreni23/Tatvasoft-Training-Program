import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import Conditions from './components/Conditions'
import IndexasKey from './components/IndexasKey'
import ApplyCss from './components/ApplyCss'
import FormHandling from './components/FormHandling'
import LifecycleA from './components/LifecycleA'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import ComponentC from './components/ComponentC'
import {UserProvider} from './components/UserContext'


function App() {
  return (
    <div className="App">
      {/* <Greet />
      <Welcome />
      <Message/> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <EventBind /> */}
      {/* <Conditions/> */}
      {/* <IndexasKey/> */}
      {/* <ApplyCss primary='true' /> */}
      {/* <FormHandling /> */}
      {/* <LifecycleA/> */}
      {/* <ClickCounter />
      <HoverCounter name='Kreni' /> */}
      <UserProvider value='Kreni'>
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
