import ListGroup from "./comonents/ListGroup";
import Message from "./message";
function App(){
    let items =['New Yourk','San Francisco','Tokyo', 'Loandan','Paris'];
  
    return ( 
      <div>
        <ListGroup items={items} heading="Cities" onSelectItem={items}/>
      </div>
    );
   
}

export default App;
