import React from 'react';


const Thread = ({todo}) => {
    console.log(todo)
    return (
        <div>
            <ul>
                <li>liste des posts</li>
                <li>le post:{todo.comments}</li>
                <li>le post:{todo.imageUrl}</li>
                <li>-----------------</li>
            </ul>
            
        </div>
    );
};

export default Thread;