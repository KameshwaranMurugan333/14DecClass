import MyClassComponent from './MyClassComponent';
import { MyFunctionalComponent } from './MyFunctionalComponent';

function App() {
  return (
    <div>
        <MyClassComponent count={5} name={"Abdul"} bulb={false} />
        <MyFunctionalComponent count={5} name={"Abdul"} class={"React"} />
    </div>
  );
}

export default App;
