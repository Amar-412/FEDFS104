
//property is passing the property from the parent to child

function App(){ // This is a parent function
  return (
    <div>
         <Student name ="Amar"/>
         <Student name ="Aman"/>
    </div>
  );
}

function Student(props){     // This is a child function
   return <h2>Hello , {props.name}!</h2>;
}

export default App;