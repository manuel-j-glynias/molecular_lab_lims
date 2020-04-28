import * as React from 'react';
import { useMyGeneInfo_GeneQuery } from '../../../generated/graphql';
import MyGeneInfo from './MyGeneInfo'

interface OwnProps {
    id: string;
    editing_description: boolean;
}

const MyGeneInfoContainer = ({ id, editing_description }: OwnProps) => {
    const { data, error, loading, refetch } = useMyGeneInfo_GeneQuery(
        { variables: { id: id } });
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
        return <div>No MyGeneInfo</div>;
    }

    return <MyGeneInfo data={data} editing_description={editing_description} />;
};

export default MyGeneInfoContainer;
