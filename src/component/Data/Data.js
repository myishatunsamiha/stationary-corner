import React, { useEffect, useState } from 'react';
import './Data.css';

const Data = () => {
    const [qna, setQna] = useState([]);

    useEffect(() => {
        fetch('qna.json')
            .then(res => res.json())
            .then(data => setQna(data))
    }, []);



    return (
        <div className='qna'>
            {
                qna.map(q => <div>
                    <h4>{q.id}. {q.ques}</h4>
                    <p>{q.ans}</p>
                </div>)
            }
        </div>
    );

};

export default Data;