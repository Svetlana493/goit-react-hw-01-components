import PropTypes from "prop-types";
import s from './TransactionHistory.module.css';

function Transaction({items}) { 
//    props = {id, type, amount, currency}
    return <table className={s.TransactionHistory}>
        <thead className={s.TableHead}>
            <tr className={s.TableTitle}>
      <th >Type</th>
      <th >Amount</th>
      <th >Currency</th>
    </tr>
  </thead>
        <tbody>
            {items.map(({ id, type, amount, currency }, ind) => { 
            
                return (
                    <tr key={id} className={ind % 2 === 0 ? s.TablePrimary : s.TableSecondary }
                        // style={{ background: ind % 2 === 0 ? 'grey' : 'white' }}
                    >
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
    </tr>
                )
            })
         
           }
        </tbody>
        </table>
}

Transaction.propTypes = { 
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }
        )
    )

}

export default Transaction