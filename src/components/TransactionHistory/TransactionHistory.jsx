import css from "./TransactionHistory.module.css";
import Transaction from "../Transaction/Transaction.jsx";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>
      <tbody key={items.id}>
        {items.map((transaction) => (
          <>
            <Transaction items={transaction} />
          </>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
