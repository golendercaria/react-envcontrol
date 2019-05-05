import React from 'react'
import './Routines.css' 

const Routines = ({ actions, event }) => { 

	return (
		<div className="wrapperRoutine clearfix">
			{
				actions.map((action, index, ) => {
					return <button id={`routine_${index}`} key={index} onClick={ (el) => event(action, 'routine_' + index, el)}>{action}</button>
				})
			}
		</div>
	)
}

export default Routines