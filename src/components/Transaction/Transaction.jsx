import css from "../Transaction/Transaction.module.css";

const Transaction = ({ items: { type, amount, currency } }) => {
  return (
    <>
      <tr className={css.tr}>
        <td className={css.tdFirst}>{type}</td>
        <td className={css.td}>{amount}</td>
        <td className={css.td}>{currency}</td>
      </tr>
    </>
  );
};

export default Transaction;
