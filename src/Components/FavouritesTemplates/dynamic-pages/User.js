import {useParams} from 'react-router-dom'
import {user} from './Profile';

function User(props)
{
    const params = useParams();
    const {id} = params
    // console.warn(user)
    const getName = (arr , id) =>{
        for(let i = 0 ; i < arr.length ; i++){
            console.log(arr[i])
            if (arr[i].id == id){
                return arr[i].name
            }
        }
        return 'none'
    }
    return(
    <div><h1>User is {getName(user,id).toUpperCase()}</h1>
    </div>
    )
}

export default User;