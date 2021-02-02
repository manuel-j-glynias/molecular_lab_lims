import React from 'react'
import {useTestsListQuery} from '../../../generated/graphql';
import TestSelect from "./TestSelect";

interface Props  {
    testString:string;
    set_testString: (s:string) => void;
    test_graph_id:string;
    set_test_graph_id: (id:string) => void;

}

const className = 'TestSelect';
const TestSelectContainer: React.FC<Props> = ({ testString,set_testString,test_graph_id,set_test_graph_id}) => {

    const { data, error, loading } = useTestsListQuery(
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
        <TestSelect data={data} testString={testString} set_testString={set_testString} test_graph_id={test_graph_id} set_test_graph_id={set_test_graph_id}/>
    )
};

export default TestSelectContainer;

