import './App.css';
import "./ships/ships";
import task from "./ships/img/task.png";

function App() {
  return (
      <div className="wrapper"> <b>&#11015; <u>Must be in the task!</u> &#11015;</b>
        <img src={task} alt='task'/>
          <b>&#11015; <u>Resault</u> &#11015;</b>
     <ol className="wrapperOl">
     </ol>
    </div>
  );
}

export default App;
