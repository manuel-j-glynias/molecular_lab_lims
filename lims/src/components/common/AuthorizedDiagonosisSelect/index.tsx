import React from 'react'
import {useTestByIdQuery} from '../../../generated/graphql';
import AuthorizedDiagnosisSelect from "./AuthorizedDiagonosisSelect";

interface Props  {
    authorized_diagnosisString: string;
    set_authorized_diagnosisString: (s:string) => void;
    test_graph_id:string;
}

const className = 'AuthorizedDiagnosisSelect';
const AuthorizedDiagnosisSelectContainer: React.FC<Props> = ({ authorized_diagnosisString,set_authorized_diagnosisString,test_graph_id}) => {

    const { data, error, loading,refetch } = useTestByIdQuery(
        { variables: { str: test_graph_id } });



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
        <AuthorizedDiagnosisSelect data={data}  authorized_diagnosisString={authorized_diagnosisString}
                                   set_authorized_diagnosisString={set_authorized_diagnosisString}/>
    )
};

export default AuthorizedDiagnosisSelectContainer;

