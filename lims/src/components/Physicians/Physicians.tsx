import * as React from 'react'
import {Maybe, Physician, PhysicianListQuery} from '../../generated/graphql';
import './styles.css'

interface Props  {
    data: PhysicianListQuery;
    selected_physician: string;
    set_selected_physician: (s:string) => void;
    set_selected_physician_obj: (physician:Maybe<Physician>)=> void;
}

const className = 'Physicians';



const Physicians: React.FC<Props> = ({data,selected_physician,set_selected_physician, set_selected_physician_obj}) => {
    const handlePhysician_select =  (id:string)  => {
        set_selected_physician(id)
        if (data !=null && data.Physician!=null && data.Physician.length>0){
            let index : number = 0;
            for (index = 0; index < data.Physician.length; index++){
                let physician = data.Physician[index];
                if (physician != null && physician.id==id){
                    // @ts-ignore
                    set_selected_physician_obj(physician)
                }
            }

        }
    }
    return (
        <div className={className} >

            <ol className={`${className}__list`} >
                {!!data.Physician &&
                data.Physician.map(
                    (physician, i: string | number ) =>
                        !!physician && (
                            <li key={i}
                                className={ physician.id===selected_physician ?  `${className}__selected_item` :  `${className}__item`  }
                                onClick={() => handlePhysician_select(physician.id!)}
                            ><span>{physician.first_name} {physician.last_name.replace('_','-')} {physician.degrees}</span>

                            </li>
                        ),
                )}
            </ol>

        </div>
    )
}

export default Physicians;