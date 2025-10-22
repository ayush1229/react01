import { Bookmark } from 'lucide-react'
import React from 'react'

const Card = () => {
    return (
        <div className="card">

            <div>
                <div className="top">
                    <img src="https://i.pinimg.com/736x/36/ff/72/36ff72fc8d310f1353ecb2e5862296ab.jpg" alt="ImageLogo" />
                    <button>Save <Bookmark size={15} /></button>
                </div>

                <div className="centre">
                    <h3>Amazon <span>5 days ago</span></h3>
                    <h2>Senior UI/UX Designer</h2>
                    <div className='tag'>
                        <h4>Part-Time</h4><h4>Senior-Level</h4>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h3>$120/hr</h3>
                    <p>Mumbai, India</p>
                </div>
                <button>Apply Now</button>
            </div>

        </div>
    )
}

export default Card