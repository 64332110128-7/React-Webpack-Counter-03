import React from "react"

export default function SumInfo(props) {
    const stTitle = {
        color: '#8bd450',
        fontSize: '40px'
    }
    return (
        <div className='suminfo'>
            <h1 style={stTitle}>Sum = {props.total}</h1>
        </div>
    )
}