//import React, { Fragment } from 'react'
import React from 'react'
import './Panel.css'

const Panel = ({name, children} ) => { 
	return (
		<div className="wrapperPanel clearfix">
			<div>
				<strong>24°C</strong><span>avg house temp</span>
			</div>
			<div>
				<strong>69%</strong><span>humidity</span>
			</div>
			<div>
				<strong>36°C</strong><span>outside temp</span>
			</div>
			<div>
				<strong>8</strong><span>devices on</span>
			</div>
		</div>
	)
}

export default Panel