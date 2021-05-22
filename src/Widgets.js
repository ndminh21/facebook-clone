import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <div className='widgets'>
            <iframe 
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik&width=340px"
                title="W3Schools Free Online Web Tutorials"
                width="240px"
                height="500px"
                stype={{border: "none", overflow: "hidden"}}
                scrolling="no"
                frameBorder="0"
                allowTransparency="true"
                allow="encrypted-media"
            ></iframe>
        </div>
    )
}

export default Widgets
