import React from 'react'
import {usePhysicianListQuery} from '../../../generated/graphql';
import PhysicianSelect from "./PhysicianSelect";

interface Props  {
    physicianString:string;
    physician_graph_id:string;
    set_physicianString: (id:string) => void;
    set_physician_graph_id: (id:string) => void;
}

const className = 'PhysicianSelect';

const PhysicianSelectContainer: React.FC<Props> = ({ physicianString,physician_graph_id,set_physicianString,set_physician_graph_id}) => {

    const { data, error, loading } = usePhysicianListQuery(
        { variables: { str: '' } });



    if (loading) {
        return <span></span>;
    }

    if (error) {
        return <span></span>;
    }

    if (!data) {
        return <span></span>;
    }

    return (
        <PhysicianSelect data={data} physicianString={physicianString} physician_graph_id={physician_graph_id} set_physicianString={set_physicianString} set_physician_graph_id={set_physician_graph_id} />
     )
};

export default PhysicianSelectContainer;

