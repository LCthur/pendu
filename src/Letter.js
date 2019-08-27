import React from 'react'
import './Letter.css'

const Letter = ({ letter, selected, onClick }) => (
    <button className= {`${selected}`} onClick={() => onClick(letter)}> { letter }</button>
)

export default Letter