import { useState ,createContext } from "react";
import "./AddData.css";
import ExpenseItem from "../Expense/ExpenseItem";
 
const AppState = createContext();

const AddData = () => {
    const[form , setForm] = useState({}) ;
    const[data , setData] = useState([]) ;
   
    
       
      const addData =()=>{
        if(form.Title && form.Date && form.Amount){
        setData([...data , form]) ;
        setForm({});
     }

    }

  return (
    <AppState.Provider value={[data,setData]}>
      {/* To pass multiple values in AppState.Provider, you can simply provide an array or an object as the value prop. */}
    <div className="wrap_container">
       
      <div className="add_container">
        <div className="blue">
          <div>
            <div className="name">Title</div>
            <input className="inputClass" type="text"
            value={form.Title || " "}
            onChange={(event)=> setForm({...form , Title:event.target.value})} />
          </div>
          <div>
            <div className="name">Amount</div>
            <input className="inputClass" type="number" 
            value={form.Amount || " "}
            onChange={(event)=> setForm({...form , Amount:event.target.value})}/>
          </div>
        </div>
        <div>
          <div className="name">Date</div>
          <input className="inputClass" type="date" 
          value={form.Date || ""}
          onChange={(event)=> setForm({...form , Date:event.target.value})}/>
        </div>

        <button className="buttonClass"
        onClick={()=>addData()}>ADD EXPENSE</button>

      </div>
     
     
    </div>
    <ExpenseItem/>
    </AppState.Provider>




  );
};

export default AddData;
export {AppState} ;
