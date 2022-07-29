import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import axios from 'axios';


const SinglePost = () => {
    const {_id}= useParams();

    return (
        <div>
            <p>post: {_id}</p>
        </div>
    );
};

export default SinglePost;