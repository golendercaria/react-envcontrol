import React from 'react'
import './Title.css'

var style = {
	backgroundImage: "url(https://secure.gravatar.com/avatar/25d9ea3c2ee75a904ddd760e321cd617)"
};

const Title = ({name, location, children} ) => { 
	return (
		<div className="wrapperTitle clearfix">
			<div className="who">
				{name}'s {location}
			</div>
			<div className="picture" style={style}>

			</div>
		</div>
	)
}

export default Title