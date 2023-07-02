import PropsTypes from 'prop-types';

export function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionHistoryItem.PropsTypes = {
    type: PropsTypes.string.isRequired,
    amount: PropsTypes.string.isRequired,
    currency: PropsTypes.string.isRequired,
};