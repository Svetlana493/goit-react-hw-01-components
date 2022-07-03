import PropTypes from "prop-types";
import s from './Statistics.module.css';

function Statistics({title, stats}) { 
    // stats = { id, label, percentage };
      return (
          <section className={s.Statistics}>
              {title && <h2 className={s.Title}>{title}</h2>}
              <ul className={s.List}>

                {stats.map(({id, label, percentage}) => {
          
                    return (<li className={s.Item} key={id}
                        style={{
                            background: getRandomHexColor(),
                        }}>
                        <span className={s.Label}>{label}</span>
                        <span className={s.Percentage}>{percentage}%</span>
                    </li>)
                })}  
   </ul>
</section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default Statistics