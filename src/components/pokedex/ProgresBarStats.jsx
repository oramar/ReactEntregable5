import React from 'react'
import '../style/progresBarStats.css'
const ProgresBarStats = ({ bgcolor, height, max, stat }) => {
    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
       
    }

    const Childdiv = {
        height: '100%',
        width: `${Math.floor((stat.base_stat * 100) / max)}%`,
        backgroundColor: bgcolor,
        borderRadius: 40,       
    }

    return (
        <li className='stats'>
            <div className="stats-header">
                <span className='card-info__label'>{stat.stat.name}</span>
                <span className={`card-info__number`}>{`${stat.base_stat}/${max}`}</span>
            </div>
            <div className='stats__parent' style={Parentdiv}>
                <div style={Childdiv}> </div>
            </div>
        </li>
    )
}

export default ProgresBarStats