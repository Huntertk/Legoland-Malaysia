import '../styles/preferenceTour.scss'
import { preferenceData } from '../data'
import {useDispatch, useSelector} from 'react-redux'
import { countTotalBookingAmount, setPreference } from '../features/booking/bookingSlice'
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const CardData = ({data, day}) => {
    const {pref, pricing}  = useSelector(state => state.booking)
    const dispatch = useDispatch()
    return (
        <div className="prefrenceTabCard">
        <h1>{data.title}</h1>
        <div className="content">
        
            {data.title === 'Non Malaysian Citizens'  && <p>MYR {pricing.nonMalaysian.adult}</p>}

            {data.title === 'Malaysian Citizens'  && <p>MYR { pricing.malaysian.adult}</p>}

            <button onClick={() => {
                dispatch(setPreference({pref: data.title}))
                dispatch(countTotalBookingAmount({totalAmount: data.price}))
            }}>{pref === data.title ? "✔ Selected": "Select"}</button>
        </div>
        <ul>
            {
                data.details.map((d, index) => (
                    <li key={index}>{d}</li>
                ))
            }
        </ul>
    </div>
    )
}

const PreferenceTour = ({day}) => {
  return (
    <section className='prefrenceTab'>
        <h1>Select your preference</h1>
        <div className="prefrenceTabCardContainer">
            {
                preferenceData.map((data) => (
                    <CardData key={data.id} data={data} day={day} />
                ))
            }
            
        </div>
    </section>
  )
}

export default PreferenceTour