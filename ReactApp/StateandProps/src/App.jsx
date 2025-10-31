import { useState } from 'react';   // usestate is a predefined function

function Student(props){
  return <h2>{props.name} scored {props.score} marks</h2>;
}

function App(){
  const [marks, setMarks]=useState(85);
  return (
    <div>
          <Student name ="Amar" score ={marks}/>
          <button onClick={() => setMarks(marks+5)}>Increase Marks</button>
    </div>
  );
}
export default App;
// state will determine the state of the function
// props is about passing the properties to other functions. 