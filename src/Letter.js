import React from 'react'
import './Letter.css'

const Letter = ({ letter, selected, onClick }) => (
    <div className= {`${selected}`} onClick={() => onClick(letter)}>
        <button>{ letter }</button>
    </div>
)

export default Letter