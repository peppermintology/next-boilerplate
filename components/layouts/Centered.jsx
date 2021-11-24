import React from 'react'

const Centered = ({ children, classes }) => {
    return (
        <div className={ `flex flex-col h-screen bg-charade-500 ${ classes ? classes : '' }` }>
            <div className={ 'flex flex-grow items-center justify-center' }>
                { children }
            </div>
        </div>
    )
}

export default Centered;