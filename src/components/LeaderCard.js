const LeaderCard = ({user, rank, authedUser}) => {
    const qCount = user.questions.length
    const aCount = Object.keys(user.answers).length

    return (
        <tr className={rank % 2 === 0 ? 'bg-dark text-light' : undefined}>
            <td className='pl-4'>{rank === 1 
                ? (<span>&#127942;</span>)
                : rank === 2 
                    ? (<span>&#129352;</span>) 
                    : rank === 3 
                        ? (<span>&#129353;</span>) 
                        : rank}
            </td>
            <td className='pl-2'>
                <img className='rounded-circle w-25 h-25 mr-1'src={user.avatarURL} alt={`avatar of ${user.id}`} />
                {user.id === authedUser ? 'You' : user.id}
            </td>
            <td className='pl-5'>{qCount}</td>
            <td className='pl-5'>{aCount}</td>
            <td className='pl-5 font-weight-bold' color='yellow'>{qCount + aCount}</td>
        </tr>
    )
}

export default LeaderCard