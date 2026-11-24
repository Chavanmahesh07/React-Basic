import { useState } from "react";

// {items: [], heading: string}
interface Props{
  items: string[];
  heading: string;
  onSelectItem:(item: string)=> void;
}
function ListGroup(Props:Props) {
  let items =['New Yourk','San Francisco','Tokyo', 'Loandan','Paris'];
  const [selectedIndex, setSelectedIndex] = useState(-1);
 
return (
  <>
   <h1>List</h1>
   { items.length === 0 && <p>NO items found</p> }
  
    {}
    <ul className="list-group">
     {items.map((item,index) => (
      <li
       className={
        selectedIndex === index
         ? "list-group-item active"
         : "list-group-item"
       }
       key={item}
       onClick={() => {
         setSelectedIndex(index);
        }}
      > 
         {item}  
      </li>))}
     
    </ul>
  </>
  );
}

export default ListGroup;