import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card'


const ExpenseItem = (props) => {
    let title = props.title;
    const clickHandler = () => {
        title = 'Updated!'; //will not work
    };

    return (
        <Card className="expense-item">

            <ExpenseDate
                date={props.date}
                month={props.month}
                year={props.year} />

            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* <button onClick={() => {console.log('click')}}>Change Title</button> */}
            <button onClick={clickHandler}>Change Title</button>
        </Card>


    );
}
export default ExpenseItem;

