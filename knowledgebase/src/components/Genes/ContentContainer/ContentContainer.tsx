import * as React from 'react'
import './styles.css'
import {OmniGeneComponentsQuery} from "../../../generated/graphql";

import MyGeneInfoContainer from "../MyGeneInfo";
import JaxGeneContainer from "../JaxGene";
import UniProtContainer from "../UniProt";

const className = 'ContentContainer';

export interface Props {
    data: OmniGeneComponentsQuery;
    editing_description: boolean;
    editing_category: boolean;
    editing_synonyms: boolean;
}

const ContentContainer: React.FC<Props> = ({
                                               data,editing_synonyms,editing_category,editing_description
                                           }) => {

    const [show_myGeneInfo, set_show_myGeneInfo] = React.useState(false);
    const [show_uniprot, set_show_uniprot] = React.useState(false);
    const [show_jaxGene, set_show_jaxGene] = React.useState(false);

    if (!data.OmniGene) {
        return <div>Please select a gene from the panel</div>;
    }
    if (!data.OmniGene[0]) {
        return <div>Please select a gene from the panel</div>;
    }

    return (

        <div className={className}>
            <h3 className={'ContentContainer__title'}>Content</h3>

            <div className="form-group">
                <button className="btn btn-primary my-1" onClick={() => set_show_myGeneInfo(!show_myGeneInfo)}>
                    {show_myGeneInfo ? <span>Hide myGeneInfo</span> : <span>Show myGeneInfo</span>}
                </button>
                <button className="btn btn-primary my-1" onClick={() => set_show_uniprot(!show_uniprot)}>
                    {show_uniprot ? <span>Hide Uniprot</span> : <span>Show Uniprot</span>}
                </button>
                <button className="btn btn-primary my-1" onClick={() => set_show_jaxGene(!show_jaxGene)}>
                    {show_jaxGene ? <span>Hide JaxGene</span> : <span>Show JaxGene</span>}
                </button>
            </div>
            <div className = {`${className}__Wrapper`}>
            <div>
                {show_myGeneInfo ?
                <div>
                    <MyGeneInfoContainer id={data.OmniGene[0].myGeneInfoGene.id } editing_description={editing_description} />
                </div>
                 : <span></span>}
            </div>
            <div> {show_uniprot ?
                <div>
                     { data.OmniGene[0].uniprotEntry ? <UniProtContainer id={data.OmniGene[0].uniprotEntry.id} editing_description={editing_description} /> : <p>None</p> }

                </div>
                 : (<span></span>) }
            </div>
            <div> {show_jaxGene ?
                <div>
                    { data.OmniGene[0].jaxGene ? <JaxGeneContainer id={data.OmniGene[0].jaxGene.id} editing_description={editing_description} editing_synonyms={editing_synonyms}/> : <p>None</p> }
                </div>
                 : (<span></span>) }
            </div>
            </div>
        </div>
    )


}

export default ContentContainer;