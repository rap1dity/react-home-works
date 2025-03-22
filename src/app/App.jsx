import './App.css'
import { UserList } from "../entities/user";

const users = [
  { fullName: 'Andrew Konovalov', email: 'timeworstseal@gmail.com'},
  { fullName: 'Andrew2 Konovalov2', email: 'tempmail@mail.ru'},
  { fullName: 'Andrew3 Konovalov3', email: 'someemail@gmail.com'},
]

export const App = () => {

  return (
      <div className='container' >
        <h1>Список пользователей</h1>
        <UserList users={users} />
      </div>
  )
}
