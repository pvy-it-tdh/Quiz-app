import React from 'react'
import './Quiz.css'
const Quiz = () => {
  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr />
        <h2>Tôi là gì?</h2>
        <ul>
          <li>Phúc Vy</li>
          <li>Phúc Vi</li>
          <li>Phúc Duy</li>
          <li>Phúc Vỹ</li>
        </ul>
        <button>Next</button>
        <div className="index">1 of 5 question</div>
    </div>
  )
}

export default Quiz