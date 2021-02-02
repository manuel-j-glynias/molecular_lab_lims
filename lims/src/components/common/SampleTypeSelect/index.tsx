import React from 'react'
import {useSampleTypeListQuery} from '../../../generated/graphql';
import SampleTypeSelect from "./SampleTypeSelect";

interface Props  {
    sampleTypeString:string;
    set_sampleTypeString: (s:string) => void;
    sampleType_graph_id:string;
    set_sampleType_graph_id: (id:string) => void;

}

const className = 'SampleTypeSelect';
const SampleTypeSelectContainer: React.FC<Props> = ({ sampleTypeString,set_sampleTypeString,sampleType_graph_id,set_sampleType_graph_id}) => {

    const { data, error, loading } = useSampleTypeListQuery();



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
        <SampleTypeSelect data={data} sampleTypeString={sampleTypeString} set_sampleTypeString={set_sampleTypeString}
                          sampleType_graph_id={sampleType_graph_id} set_sampleType_graph_id={set_sampleType_graph_id}/>
    )
};

export default SampleTypeSelectContainer;

