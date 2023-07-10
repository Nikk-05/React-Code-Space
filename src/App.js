import './App.css';
import FormData from './Components/Form';
import LifeCycleMounting from './Components/LifeCycleMounting';
import RegularPureParent from './Components/PureComponentReact/Parent'
import ParentMemo from './Components/MemoComponent/ParentMemo'
import ClickCounter from './Components/HigherOrderComponent/ClickCounter';
import HoverCount from './Components/HigherOrderComponent/HoverCount';

function App() {
  return (
    <div className="container">
     {/* <FormData/> */}
     {/* <LifeCycleMounting/> */}
     {/* <RegularPureParent/> */}
     {/* <ParentMemo/> */}
     <ClickCounter/>
     <HoverCount/>
    </div>
  );
}

export default App;
