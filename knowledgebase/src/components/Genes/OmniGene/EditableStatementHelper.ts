import {
    AddOmniGeneGeneDescriptionMutationVariables,
    AddOmniGeneOncogenicCategoryMutationVariables,
    AddSynonymStringMutationVariables
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
    let dateTimeString: string = now.getFullYear().toString() + '-' + get_number_as_two_digit_string(1+now.getMonth()) + '-' + get_number_as_two_digit_string(now.getDate()) + '-' + get_number_as_two_digit_string(now.getHours()) + '-' + get_number_as_two_digit_string(now.getMinutes()) + '-' + get_number_as_two_digit_string(now.getSeconds()) + '-' + get_number_as_two_digit_string(now.getMilliseconds()) + '000'
    return dateTimeString
}
const get_date_as_string = (): string => {
    const now: Date = new Date();
    // getMonth is zero based so add 1!
    let dateTimeString: string = now.getFullYear().toString() +  get_number_as_two_digit_string(1+now.getMonth()) + get_number_as_two_digit_string(now.getDate()) + get_number_as_two_digit_string(now.getHours()) + get_number_as_two_digit_string(now.getMinutes()) + get_number_as_two_digit_string(now.getSeconds()) + get_number_as_two_digit_string(now.getMilliseconds()) + '000'
    return dateTimeString
}


export const get_synonym_mutation_object = (geneID:string, oldESID:string, esField:string, synonyms:string, userID:string): AddSynonymStringMutationVariables=> {
    const  variables :AddSynonymStringMutationVariables = {
        gene_id:geneID,
        old_es_id:oldESID,
        date: get_date_as_hyphenated_string(),
        es_field: esField,
        es_statement:synonyms,
        es_id: 'es_' + get_date_as_string(),
        user_id: userID
    }
    return variables;
}

export const get_category_mutation_object = (geneID:string, oldESID:string, esField:string, category:string, userID:string): AddOmniGeneOncogenicCategoryMutationVariables=> {
    const  variables :AddOmniGeneOncogenicCategoryMutationVariables = {
        gene_id:geneID,
        old_es_id:oldESID,
        date: get_date_as_hyphenated_string(),
        es_field: esField,
        es_statement:category,
        es_id: 'es_' + get_date_as_string(),
        user_id: userID
    }
    return variables;
}

export const get_description_mutation_object = (geneID:string, oldESID:string, esField:string, description:string, userID:string, refs:Array<string>): AddOmniGeneGeneDescriptionMutationVariables=> {
    let refs_array :Array<string> = []
    for (let i=0;i<refs.length;i++){
        const ref = 'ref_' + refs[i]
        refs_array.push(ref)
    }
    const  variables :AddOmniGeneGeneDescriptionMutationVariables = {
        gene_id:geneID,
        old_es_id:oldESID,
        date: get_date_as_hyphenated_string(),
        es_field: esField,
        es_statement:description,
        es_id: 'es_' + get_date_as_string(),
        user_id: userID,
        ref_aray:refs_array
    }
    return variables;
}
