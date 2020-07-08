import * as React from 'react';
import {useLiteratureReferenceQuery} from "../../../generated/graphql";
import LiteratureReference from './LiteratureReference'


interface OwnProps {
    id: string;
}

const LiteratureReferenceContainer = ({ id }: OwnProps) => {
    const { data, error, loading, refetch } = useLiteratureReferenceQuery(
        { variables: { ref_id: id } });
    React.useEffect(() => {
        refetch();
    }, [id, refetch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR</div>;
    }

    if (!data) {
        return <div>No data for Protein</div>;
    }

    return <LiteratureReference data={data} />;
};

export default LiteratureReferenceContainer;
