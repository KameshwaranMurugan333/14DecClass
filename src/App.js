import { ConditionalRendering } from './ConditionalRendring';
import { EventHandling } from './EventHandling';
import MyClassComponent from './MyClassComponent';
import { MyFunctionalComponent } from './MyFunctionalComponent';

function App() {
  return (
    <div>
        <MyClassComponent count={5} name={"Abdul"} bulb={false} />
        <MyFunctionalComponent count={5} name={"Abdul"} class={"React"} />
        <EventHandling />
        <ConditionalRendering showTitle={true} showDifferentCompoent={false} title={"I am your title"} />
    </div>
  );
}

export default App;
