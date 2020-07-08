import {
    AddOmniGeneGeneDescriptionMutationVariables,
    AddOmniGeneOncogenicCategoryMutationVariables, AddSynonymsMutationVariables
} from "../../../generated/graphql";

const get_number_as_two_digit_string = (n: Number): string => {
    let s: string = n.toString()
    if (s.length === 1) {
        s = '0' + s
    }
    return s
}
const get_date_as_hyphenated_string = (): string => {
    const now: Date = new Date();
    // getMonth is zero based so add 1!
    let dateTimeString: string = now.getFullYear().toString() + '-' + get_number_as_two_digit_string(1+now.getMonth()) + '-' + get_number_as_two_digit_string(now.getDate()) + '-' + get_number_as_two_digit_string(now.getHours()) + '-' + get_number_as_two_digit_string(now.getMinutes()) + '-' + get_number_as_two_digit_string(now.getSeconds())
    return dateTimeString
}
function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(1000000));
}

const get_unique_graph_id = (tag:string): string => {
    const now: Date = new Date();
    let end:string = getRandomInt().toString().padStart(6, "0")
    // getMonth is zero based so add 1!
    let dateTimeString: string = now.getFullYear().toString() +  get_number_as_two_digit_string(1+now.getMonth()) + get_number_as_two_digit_string(now.getDate()) + get_number_as_two_digit_string(now.getHours()) + get_number_as_two_digit_string(now.getMinutes()) + get_number_as_two_digit_string(now.getSeconds())
    let graph_id = tag + dateTimeString + '_' + end;
    return graph_id
}


export const get_synonym_mutation_object = (geneID:string, oldESID:string, esField:string, synonyms:string[], userID:string): AddSynonymsMutationVariables=> {
    const  variables :AddSynonymsMutationVariables = {
        gene_id:geneID,
        old_esyn_id:oldESID,
        date: get_date_as_hyphenated_string(),
        esyn_field: esField,
        esyn_list:synonyms,
        esyn_id: get_unique_graph_id('esl_' ),
        user_id: userID
    }
    return variables;
}

export const get_category_mutation_object = (geneID:string, oldESID:string, esField:string, category:string, userID:string, refs_array:Array<string>): AddOmniGeneOncogenicCategoryMutationVariables=> {
    const  variables :AddOmniGeneOncogenicCategoryMutationVariables = {
        gene_id:geneID,
        old_es_id:oldESID,
        date: get_date_as_hyphenated_string(),
        es_field: esField,
        es_statement:category,
        es_id: get_unique_graph_id('es_' ),
        user_id: userID,
        ref_aray:refs_array
    }
    return variables;
}

export const get_description_mutation_object = (geneID:string, oldESID:string, esField:string, description:string, userID:string, refs_array:Array<string>): AddOmniGeneGeneDescriptionMutationVariables=> {
    // let refs_array :Array<string> = []
    // for (let i=0;i<refs.length;i++){
    //     const ref = 'ref_' + refs[i]
    //     refs_array.push(ref)
    // }
    console.log('refs_array='+refs_array.join(','))
    const  variables :AddOmniGeneGeneDescriptionMutationVariables = {
        gene_id:geneID,
        old_es_id:oldESID,
        date: get_date_as_hyphenated_string(),
        es_field: esField,
        es_statement:description,
        es_id: get_unique_graph_id('es_' ),
        user_id: userID,
        ref_aray:refs_array
    }
    return variables;
}
