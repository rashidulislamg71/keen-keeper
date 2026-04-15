import React from 'react';

const RelationshipGoal = () => {
    return (
            <div className='flex justify-between p-5 rounded bg-white shadow mt-5'>
                <div>
                    <h3 className='text-gray-600 font-bold mb-3'>Relationship Goal</h3>
                    <p className='text-gray-500'>Connect every <span className='font-bold text-gray-800'>30 days</span></p>
                </div>
                <button className='btn '>Edit</button>
            </div>
       
    );
};

export default RelationshipGoal;