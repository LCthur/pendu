import React from 'react'


const Letter = ({ letter, className, onClick }) => (
    <button className={className} onClick={() => onClick(letter)}> { letter }</button>
)

export default Letter