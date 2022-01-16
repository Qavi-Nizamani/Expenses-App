import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = ({addNewExpense}) => {
    
  return (
    <div className='new-expense'>
      <ExpenseForm addNewExpense={addNewExpense} />
    </div>
  );
};

export default NewExpense;