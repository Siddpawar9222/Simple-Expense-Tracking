import { useContext } from "react";
import { AppState } from "../UI/AddData";
import "./ExpenseItem.css" ;
import ExpenseDate from "./ExpenseDate";

function ExpenseItem() {  
    const [data, setData] = useContext(AppState);
    
    const removeElement =(index)=>{
          data.splice(index ,1) ;
          setData([...data]) ;
    }
    
    return (
          <>
        {
            data.map((element , index)=>{
                return(
                <div className="ExpenseItem_container" key={index+element} >
                    
                    <div className="pack">
                    <ExpenseDate date={element.Date} ></ExpenseDate>
                    <div className="ExpenseItemDetails">{element.Title}</div>
                    </div>
                    <div className="pack1">
                    <div className="ExpenseItemPrice">{element.Amount}</div>
                    <button className="remove"onClick={(index)=>removeElement(index)}>REMOVE</button>
                   </div>
                </div> 
                )
            })

        }
        </>
   
    ) ;
}

export default ExpenseItem ;