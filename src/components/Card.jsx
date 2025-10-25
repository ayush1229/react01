import { Bookmark } from 'lucide-react'
import React from 'react'

const Card = (props) => {
    return (
        <div className="card">

            <div>
                <div className="top">
                    <img src={props.logo} alt="ImageLogo" />
                    <button>Save <Bookmark size={15} /></button>
                </div>

                <div className="centre">
                    <h3>{props.name} <span>{props.time}</span></h3>
                    <h2>{props.post}</h2>
                    <div className='tag'>
                        {props.tags.map(function (elem) {
                            return <h4>{elem}</h4>
                        })}
                    </div>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h3>{props.salary}</h3>
                    <p>{props.place}</p>
                </div>
                <button>Apply Now</button>
            </div>

        </div>
    )
}

export default Card