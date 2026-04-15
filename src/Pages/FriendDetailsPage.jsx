import React from 'react'
import { CiClock2 } from 'react-icons/ci';
import { FaFileArchive } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router-dom';
import DashboardCard from '../Components/DashboardCard/DashboardCard';
import RelationshipGoal from '../Components/FriendDetailsPageComponents/RelationshipGoal';
import QuickCheck from '../Components/FriendDetailsPageComponents/QuickCheckIn/QuicCheck';
import { dateFormat } from '../utils/DateFormat';
import { findData } from '../utils/DataFind';

function FriendDetailsPage() {
    const { friendId } = useParams();
    const friends = useLoaderData();
    // find data by id
    const friend = findData(friends, friendId);

    const { id, name, picture, days_since_contact, tags, status, bio, email, next_due_date, goal } = friend || {};

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

    return (

        <div className='px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-12 lg:py-16'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {/* LEFT SIDE */}
                <div className='lg:col-span-1'>
                    <div className='hover:shadow-2xl transition-all duration-300 text-center flex flex-col items-center gap-3 bg-white shadow p-5 rounded-lg'>
                        <img
                            className='rounded-full w-20 h-20 border border-gray-300 p-1'
                            src={picture}
                            alt={name}
                        />
                        <h4 className='font-bold text-lg'>{name}</h4>
                        <div className='flex flex-wrap justify-center gap-2'>
                            {
                                tags?.map(tag => (
                                    <span
                                        className='text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full'
                                        key={tag}
                                    >
                                        {tag.toUpperCase()}
                                    </span>
                                ))
                            }
                        </div>

                        <p className={`w-fit rounded-full text-white px-3 py-1 text-xs ${statueStyle(status)}`}>
                            {status}
                        </p>
                        <p className='text-sm text-gray-600 text-center'>{bio}</p>
                        <p className='text-xs text-gray-500 break-all'>{email}</p>
                    </div>

                    {/* Buttons */}
                    <div className='space-y-2 mt-5 flex justify-around md:flex-col '>
                        <button className="btn w-auto md:w-full shadow bg-white text-black border hover:bg-gray-100">
                            <CiClock2 /> Snooze 2 Weeks
                        </button>
                        <button className="btn w-auto md:w-full shadow bg-white text-black border hover:bg-gray-100">
                            <FaFileArchive /> Archive
                        </button>
                        <button className="btn w-auto md:w-full text-red-500 shadow bg-white border hover:bg-red-50">
                            <MdDelete /> Delete
                        </button>
                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className='lg:col-span-2'>

                    {/* Stats Cards */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        <DashboardCard number={days_since_contact} title="Days Since Contact" />
                        <DashboardCard number={goal} title="Goal (Days)" />
                        <DashboardCard title="Next Due" number={dateFormat(next_due_date)} />
                    </div>

                    {/* Relationship Goal */}
                    <div className='mt-6'>
                        <RelationshipGoal />
                    </div>

                    {/* Quick Check */}
                    <div className='mt-6'>
                        <QuickCheck friendId={id} />
                    </div>

                </div>

            </div>

        </div>

    )
}

export default FriendDetailsPage