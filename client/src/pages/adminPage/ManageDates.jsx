import React from 'react'
import '../../styles/manageDatesContainer.scss'
import { Link } from 'react-router-dom'

const ManageDates = () => {
  return (
    <section className='manageDates'>
      <h1>Manages Dates</h1>
      <div className="btnContainer">
        <Link to="/admin/manage-dates/booktype-one">1. 1 Day Legoland Themepark</Link>
        <Link to="/admin/manage-dates/booktype-two">2. 1 Day Legoland Waterpark</Link>
        <Link to="/admin/manage-dates/booktype-three">3. 1 Day Legoland Sealife</Link>
        <Link to="/admin/manage-dates/booktype-four">4. 1 Day Legoland Combo : Themepark + Sealife</Link>
        <Link to="/admin/manage-dates/booktype-five">5. 1 Day Legoland Combo : Themepark + Waterpark + Sealife</Link>
      </div>
    </section>
  )
}

export default ManageDates