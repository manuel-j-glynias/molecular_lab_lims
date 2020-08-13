import * as React from 'react'
import './styles.css'
import {OntologicalDiseaseComponentsQuery} from "../../../generated/graphql";
import GoDiseaseContainer from "../GODisease";



const className = 'ContentContainer';

export interface Props {
    data: OntologicalDiseaseComponentsQuery;
    editing_description: boolean;
    editing_synonyms: boolean;
}

const ContentContainer: React.FC<Props> = ({
                                               data,
                                               editing_synonyms,editing_description
                                           }) => {

    const [show_DODisease, set_show_DODisease] = React.useState(false);
    const [show_GODisease, set_show_GODisease] = React.useState(false);
    const [show_jaxDisease, set_show_jaxDisease] = React.useState(false);
    const [show_oncoTreeDiseases, set_show_oncoTreeDiseases] = React.useState(false);

    if (!data.OntologicalDisease){
        return <div>Please select a disease from the panel</div>
    }
    if (!data.OntologicalDisease[0]){
        return <div>Please select a disease from the panel</div>
    }

    return (

        <div className={className}>
            <h3 className={'ContentContainer__title'}>Content</h3>

            <div className="form-group">
                <button className="btn btn-primary my-1" onClick={() => set_show_DODisease(!show_DODisease)}>
                    {show_DODisease ? <span>Hide DO Disease</span> : <span>Show DO Disease</span>}
                </button>
                <button className="btn btn-primary my-1" onClick={() => set_show_GODisease(!show_GODisease)}>
                    {show_GODisease ? <span>Hide GO Disease</span> : <span>Show GO Disease</span>}
                </button>
                <button className="btn btn-primary my-1" onClick={() => set_show_jaxDisease(!show_jaxDisease)}>
                    {show_jaxDisease ? <span>Hide Jax Disease</span> : <span>Show Jax Disease</span>}
                </button>
                <button className="btn btn-primary my-1" onClick={() => set_show_oncoTreeDiseases(!show_oncoTreeDiseases)}>
                    {show_oncoTreeDiseases ? <span>Hide OncoTree Disease</span> : <span>Show OncoTree Disease</span>}
                </button>
            </div>
            <div className = {`${className}__Wrapper`}>

            <div>
                {show_DODisease ?
                <div>
                    DO Disease
                </div>
                 : <span></span>}
            </div>

            <div> {show_GODisease ?

                <div>
                    { data.OntologicalDisease[0].goDiseases.list[0] && <GoDiseaseContainer id={data.OntologicalDisease[0].goDiseases.list[0].id} editing_description={editing_description} />}

                </div>

                 : (<span></span>) }
            </div>

            <div> {show_jaxDisease ?
                <div>
                    Jax Disease
                </div>
                 : (<span></span>) }
            </div>
            <div> {show_oncoTreeDiseases ?
                <div>
                    OncoTree Disease
                </div>
                : (<span></span>) }
            </div>
            </div>
        </div>
    )


}

export default ContentContainer;