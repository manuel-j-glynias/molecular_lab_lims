
import * as React from 'react'
import { GeneListQuery } from '../../../generated/graphql'
import './styles.css'


export interface OwnProps {
    query_str: string;
    gene_id: string;
    handleGeneIdChange: (newId: string) => void;
    set_gene_query_string: (newQueryString: string) => void;
}

interface Props extends OwnProps {
    data: GeneListQuery;
}

const className = 'GeneList';



const GeneList: React.FC<Props> = ({data,
                                       handleGeneIdChange, gene_id}) => {

    return (
    <div className={className} >

        <ol className={`${className}__list`} >
            {!!data.OmniGene &&
            data.OmniGene.map(
                (gene, i: string | number ) =>
                    !!gene && (
                        <li key={i}
                            className={ gene.id===gene_id ?  `${className}__selected_item` :  `${className}__item`  }
                            onClick={() => handleGeneIdChange(gene.id!)}
                        >
                            {gene.name}
                        </li>
                    ),
            )}
        </ol>

    </div>
)
}

export default GeneList;