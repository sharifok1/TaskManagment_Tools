import React from 'react';
import Nav from '../Share/Nav';
import { Tldraw } from 'tldraw';
// import { Tldraw } from 'tldraw';
// import 'tldraw/tldraw.css'

const WhiteBoard = () => {
   


    return (
        <div>
            <Nav/>

            {/* WhiteBoard? */}
           
			<div className="fixed inset-0 md:mt-20 mt-14"> 
			<Tldraw />
		</div>
		
           
        </div>
    );
};

export default WhiteBoard;