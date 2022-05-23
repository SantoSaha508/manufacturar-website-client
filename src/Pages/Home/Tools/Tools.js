import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect( () => {
        fetch(`http://localhost:5000/tool`)
        .then(res => res.json())
        .then(data => setTools(data))
    },[])

    return (
        <div  className='text-center font-bold text-3xl p-4 text-black my-20'>
            <h2 className=''>Our Tools</h2>

            <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-6 p-10'>
                {
                    tools.map(tool => <Tool
                    key={tool._id}
                    tool={tool}
                    ></Tool>).slice(0, 6)
                }
            </div>
        </div>
    );
};

export default Tools;