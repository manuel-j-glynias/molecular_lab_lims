import * as React from 'react';
import {useUserContentState} from "../../../context/UserContentContext"
import {
    MarkerComponent, MarkerProfileAddComponentsMutationVariables,
    MarkerProfileAddConjuctionMutationVariables,
    OmniConjunction,
    useMarkerProfileAddComponentsMutation
} from "../../../generated/graphql";
import {useEffect} from "react";
import {get_date_as_hyphenated_string, get_unique_graph_id} from "../../common/Helpers/EditableStatementHelper";
import {preflight, preflightResult} from "../../common/Helpers/Ref_helpers";

interface Props {
    components: [MarkerComponent];
    set_editing: (b: boolean) => void;
    marker_id: string,
    id: string;
    field: string;
    selected_component: MarkerComponent;
    set_selected_component:(selected:MarkerComponent | null) => void;
    ref_array: string[];
    refetch: () => void;
}

const className = 'MarkerProfileEditor';

const ComponentEditor: React.FC<Props> = ({components, set_editing, id, field,marker_id,selected_component,set_selected_component,ref_array,refetch}) => {

    const [component_array, set_component_array] = React.useState(components.slice(0));
    const [pmid_list, set_pmid_list] = React.useState('');

    const [addComponentMutation, { loading: mutationLoading, error: mutationError, data:mutationData }] = useMarkerProfileAddComponentsMutation({variables:{marker_id:'', old_id:'',
                date: '', field: '', components:[], id: '', user_id: '',ref_array:[]}})


    const {
        UserContentState: {userID}
    } = useUserContentState();

    const user_ID : string = userID;

    function get_marker_ids(component_array: MarkerComponent[]) {
        let marker_ids : Array<string> = []
        for (var mc of component_array) {
            marker_ids.push(mc.id)
        }
        return marker_ids;
    }

    const get_MarkerProfileAddComponentsMutationVariables_object = (refs:Array<string>):MarkerProfileAddComponentsMutationVariables => {
        const variables : MarkerProfileAddComponentsMutationVariables= {
            marker_id: marker_id,
            old_id: id,
            date: get_date_as_hyphenated_string(),
            field: field,
            components:get_marker_ids(component_array),
            id: get_unique_graph_id('es_' ),
            user_id: user_ID,
            ref_array: refs
        }
        return variables;
    }
    async function doSave(refs: string[]) {
        // @ts-ignore
        const mutation_object = get_MarkerProfileAddComponentsMutationVariables_object(refs);
        await addComponentMutation({variables:mutation_object})
    }
    const save = async () => {
        let pmids:Array<string> = []
        if (ref_array.length>0 && ref_array[0] != "") {
            pmids = ref_array
        }

        let pmidstringarray = pmid_list.split(',')
        for (let pmid of pmidstringarray){
            if (pmid.includes(':')){
                pmid = pmid.split(':')[1].trim()
            }
            if (pmid!="" && !pmids.includes(pmid)){
                pmids.push(pmid)
            }
        }
        if (pmids.length>0){
            const preflight_input = pmids.join(',')

            // await extracted(refs);
            preflight(preflight_input).then( (response:preflightResult) => {
                doSave(response.refs)
            })

        }
        else {
            doSave([])
        }
    };
    const post_save = () => {
        if (mutationData!=null){
            refetch()
            set_editing(false)
        }
    }
    useEffect(post_save,[mutationData])

    const cancelEdit = async () => {
        console.log('cancelEdit')
        set_editing(false)
    };


    const notIn = (comp:MarkerComponent) : boolean => {
        let b = true
        if (comp.id===marker_id){
            b = false
        }
        else {
            for (var c of component_array){
                if (comp.id===c.id){
                    b = false
                    break
                }
            }
        }
        return b
    }

    const selected_component_changed = () => {
        if (selected_component != null){
            if (notIn(selected_component)){
                component_array.push(selected_component)
            }
            set_selected_component(null);
        }
    }

    useEffect(selected_component_changed,[selected_component])


    const delete_component = async (deleted: MarkerComponent) => {
        let comp_after: Array<MarkerComponent> = [];
        for (var mc of component_array) {
            if (mc != deleted){
                comp_after.push(mc)
            }
        }
        set_component_array(comp_after);
    }



    return (<div className="form-group">
            {component_array.length > 0 ?
                <div>{component_array.map((item, index) => (
                    <div className={`${className}__Component_Wrapper`} key={index}>
                        <div>{item.name.statement}</div>
                        <div>

                            <button className={`${className}__small-btn`}
                                    onClick={() => delete_component(item)}>Delete
                            </button>

                        </div>
                    </div>
                ))}</div>
                : <div>None</div>}
            <div className="form-group">
                <div><input type="text" placeholder="PMIDs" value={pmid_list} onChange={e => set_pmid_list(e.target.value )} required/></div>
                {/*<div><input type="text" placeholder="URLs" value={url_list} onChange={e => set_url_list(e.target.value )} required/></div>*/}
            </div>
            <button value="Save" className="btn btn-primary my-1" onClick={() => {
                 save()
            }}>Save
            </button>
            <button value="Cancel" className="btn btn-primary my-1"
                    onClick={() => cancelEdit()}>Cancel
            </button>
            <div>
                {mutationLoading && <p>Loading...</p>}
                {mutationError && <p>Error :( Please try again</p>}
                {mutationData && <p>Data</p>}
            </div>

        </div>
    )
}

export default ComponentEditor;