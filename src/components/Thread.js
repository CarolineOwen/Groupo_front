import React from 'react';


const Thread = ({props}) => {
    console.log(props)
    return (
        <div className='global'>
            <div className='comments'>
                <p>Message:{props.comments}</p>
                <div>{props.imageUrl && <img src={props.imageUrl} alt="legende"/>}</div>
                <div className="pouces">
                <button><i className="fa-solid fa-thumbs-up"></i></button>
            <button><i className="fa-solid fa-thumbs-down"></i></button>
            </div>
            </div>
                      

        </div>
    );
};

export default Thread;