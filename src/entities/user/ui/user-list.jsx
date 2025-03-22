export const UserList = ({ users }) => {

    return (
        <div className='user-list-container'>
            {users.map((user) =>
                <div className='user-item' key={user.email}>
                    <h2>{user.fullName}</h2>
                    <p>{user.email}</p>
                </div>
            )}
        </div>
    )
}