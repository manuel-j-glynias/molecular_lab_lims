import * as React from 'react'
import {Maybe, Molecular_Lab_User, UsersListQuery} from '../../generated/graphql';
import './styles.css'

interface Props  {
    data: UsersListQuery;
    selected_user: string;
    set_selected_user: (s:string) => void;
    set_selected_user_obj: (user:Maybe<Molecular_Lab_User>)=> void;
}

const className = 'Users';



const Users: React.FC<Props> = ({data,
                                    selected_user,set_selected_user, set_selected_user_obj}) => {
    const handleUser_select =  (id:string)  => {
        set_selected_user(id)
        if (data !=null && data.Molecular_Lab_User!=null && data.Molecular_Lab_User.length>0){
            let index : number = 0;
            for (index = 0; index < data.Molecular_Lab_User.length; index++){
                let user = data.Molecular_Lab_User[index];
                if (user != null && user.id==id){
                    // @ts-ignore
                    set_selected_user_obj(user)
                }
            }

        }
    }
    return (
        <div className={className} >

            <ol className={`${className}__list`} >
                {!!data.Molecular_Lab_User &&
                data.Molecular_Lab_User.map(
                    (user, i: string | number ) =>
                        !!user && user.id!='user_system' && (
                            <li key={i}
                                className={ user.id===selected_user ?  `${className}__selected_item` :  `${className}__item`  }
                                onClick={() => handleUser_select(user.id!)}
                            ><span>{user.first_name} {user.last_name.replace('_','-')} </span>

                            </li>
                        ),
                )}
            </ol>

        </div>
    )
}

export default Users;