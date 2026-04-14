import React from 'react'
import { CiClock2 } from 'react-icons/ci';
import { FaFileArchive } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router-dom';

function FriendDetailsPage() {
    const { friendId } = useParams();
    const friends = useLoaderData();
    const friend = friends.find(f => f.id === parseInt(friendId));

    const { name, picture, days_since_contact, tags, status, bio, email, next_due_date, goal } = friend || {};

    const statueStyle = (status) => {
        if (status === "Overdue") {
            return "bg-red-500";
        }
        else if (status === "Almost Due") {
            return "bg-yellow-500";
        }
        else if (status === "On-Track") {
            return "bg-[#244d3f] ";
        }
    }

    const dateFormat = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined,options);
   
    }

    return (
        <div className='px-4 md:px-20 py-10 md:py-16'>

            <div className='grid grid-cols-3 gap-4'>
                <div className='col-span-1'>
                    <div className='hover:shadow-2xl transition-all duration-300  text-center m-auto h-auto w-auto flex flex-col justify-center items-center gap-2 bg-white shadow p-5 rounded ' >
                        <img className='rounded-full w-15 h-15 border border-gray-300 p-1' src={picture} alt={name} />
                        <h4 className='font-bold '>{name}</h4>
                        <p className='text-gray-500 text-[12px] '>{days_since_contact}d ago</p>
                        <div className='flex gap-2'>
                            {
                                tags.map(tag => (
                                    <span className='text-[11px] bg-green-200 text-green-800 px-2 
                                    rounded-full' key={tag}>{tag.toUpperCase()}</span>
                                ))
                            }
                        </div>
                        <p className={`w-fit rounded-full text-white px-2
                                 text-[12px] ${statueStyle(status)}`} >
                            {status}
                        </p>
                        <p>{bio}</p>
                        <p>{email}</p>
                    </div>
                    {/* buttons  */}
                    <div className='space-y-2 mt-5'>
                        <button className="btn w-full shadow bg-white text-black border-[#e5e5e5]">
                            <CiClock2 />
                            Snooze 2 Weeks
                        </button>
                        <button className="btn w-full shadow bg-white text-black border-[#e5e5e5]">
                            <FaFileArchive />
                            Archive
                        </button>
                        <button className="btn w-full text-red-500 shadow bg-white  border-[#e5e5e5]">
                            <MdDelete />
                            Delete
                        </button>

                    </div>
                </div>
                <div className='col-span-2'>
                    <div className='grid grid-cols-3 gap-4'>
                        <div className='text-center bg-white shadow p-5 rounded '>
                            <h3 className='text-xl font-bold text-gray-700'>{days_since_contact} </h3>
                            <p className='text-gray-600' >days since contact</p>
                        </div>
                        <div className='text-center bg-white shadow p-5 rounded '>
                            <h3 className='text-xl font-bold text-gray-700'>{goal} </h3>
                            <p className='text-gray-600' >Goal(Days)</p>
                        </div>
                        <div className='text-center bg-white shadow p-5 rounded '>
                            <h3 className='text-xl font-bold text-gray-700'>{dateFormat(next_due_date)} </h3>
                            <p className='text-gray-600' >Next Due</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendDetailsPage