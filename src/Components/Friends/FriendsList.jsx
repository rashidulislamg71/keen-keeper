
import { Link } from 'react-router-dom';

function FriendsList({ friends }) {

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
        <div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10'>
                {
                    friends.map(friend => (
                       <Link to ={`/friendDetails/${friend.id}`} key={friend.id} >
                        <div className='hover:shadow-2xl transition-all duration-300  text-center m-auto h-auto w-40 md:h-50 md:w-50 flex flex-col justify-center items-center gap-2 bg-white shadow p-5 rounded ' >
                            <img className='rounded-full w-15 h-15 border border-gray-300 p-1' src={friend.picture} alt={friend.name} />
                            <h4 className='font-bold '>{friend.name}</h4>
                            <p className='text-gray-500 text-[12px] '>{friend.days_since_contact}d ago</p>
                            <div className='flex gap-2'>
                                {
                                    friend.tags.map(tag => (
                                        <span className='text-[11px] bg-green-200 text-green-800 px-2 
                                    rounded-full' key={tag}>{tag.toUpperCase()}</span>
                                    ))
                                }
                            </div>
                            <p className={`w-fit rounded-full text-white px-2
                                 text-[12px] ${statueStyle(friend.status)}`} >
                                {friend.status}
                            </p>
                        </div>
                       </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default FriendsList