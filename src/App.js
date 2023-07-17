import './App.css';
import FormData from './Components/Form';
import LifeCycleMounting from './Components/LifeCycleMounting';
import RegularPureParent from './Components/PureComponentReact/Parent'
import ParentMemo from './Components/MemoComponent/ParentMemo'
import ClickCounter from './Components/HigherOrderComponent/ClickCounter';
import HoverCount from './Components/HigherOrderComponent/HoverCount';
import User from './Components/Render Props/User';
import Counter from './Components/Render Props/Counter';
import ClickCounter2 from './Components/Render Props/ClickCounter2'
import HoverCounter2 from './Components/Render Props/HoverCounter2'

function App() {
  return (
    <div className="container">
     {/* <FormData/> */}
     {/* <LifeCycleMounting/> */}
     {/* <RegularPureParent/> */}
     {/* <ParentMemo/> */}
     {/* <ClickCounter name='Nikhil'/>
     <HoverCount name='Nikhil'/> */}
     {/* <User name = {()=> 'Nikhil'} render = {(isLogged)=> isLogged ? "Member" : "Guest"}/> */}

    {<Counter render={(count, incrementCount)=>
      <ClickCounter2 count={count} incrementCount={incrementCount}/>
    } />}

    {<Counter render={(count,incrementCount)=>
      <HoverCounter2 count={count} incrementCount={incrementCount}/>
     } />}
    </div>
  );
}

export default App;
