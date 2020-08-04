import apiClient from "../../../axios/Axios";


export const extract_pmids_from_description =  (description:string) : Array<string> => {
    let pmids: Array<string> = []
    const regex = /PMID:\s+\d{7,}/g;
    const found = description.match(regex);
    if (found!=null){
        for (var i=0;i<found.length;i++){
            const toks = found[i].split(" ")
            if (toks.length>0){
                const pmid = toks[1]
                if (!pmids.includes(pmid)){
                    pmids.push(pmid)
                }
            }

        }
    }
    return pmids
}
export const extract_pubmeds_from_description =  (description:string) : Array<string> => {
    let pmids: Array<string> = []
    //    pattern = r'PubMed:\d{8}'
    const regex = /PubMed:\d{7,}/g;
    const found = description.match(regex);
    if (found!=null){
        for (var i=0;i<found.length;i++){
            const toks = found[i].split(":")
            if (toks.length>0){
                const pmid = toks[1]
                if (!pmids.includes(pmid)){
                    pmids.push(pmid)
                }
            }

        }
    }
    return pmids
}
export const parse_description =  (description:string): Array<string> => {
    let pmids: Array<string> = extract_pmids_from_description(description)
    let pubmeds: Array<string> = extract_pubmeds_from_description(description)
    for (var j=0;j<pubmeds.length;j++){
        let pubmed = pubmeds[j]
        if (!pmids.includes(pubmed)){
            pmids.push(pubmed)
        }
    }
    return pmids;
}


export type preflightResult = {
    result: string;
    refs: string[]
}

export const preflight = async (pmids:string ) => {
    try {
        // @ts-ignore
        const response = await apiClient.get<preflightResult>("/reference_preflight/" + pmids);
        const preflightResult = response.data;
        return preflightResult;
    } catch (err) {
        if (err && err.response) {
            // const axiosError = err as AxiosError<ServerError>
            return err.response;
        }

        throw err;
    }
};
export const preflight_IR = async (urls:string ) => {
    try {
        // @ts-ignore
        const response = await apiClient.get<preflightResult>("/internet_reference_preflight/" + urls);
        const preflightResult = response.data;
        return preflightResult;
    } catch (err) {
        if (err && err.response) {
            // const axiosError = err as AxiosError<ServerError>
            return err.response;
        }

        throw err;
    }
};
export type DescriptionWithPmids = {
    text: string;
    pmid: string;
}
export const add_hyperlinks = (description: string): DescriptionWithPmids[] => {
    let d: DescriptionWithPmids[] = []
    let pmids: Array<string> = []
    const regex = /PMID:\s+\d{8}/g;
    const found = description.match(regex);
    if (found != null) {
        var splitted = description.split(regex);
        for (var i = 0; i < found.length; i++) {
            const toks = found[i].split(" ")
            if (toks.length > 0) {

                const pmid = toks[1]
                if (!pmids.includes(pmid)) {
                    pmids.push(pmid)
                }

                const dwp: DescriptionWithPmids = {
                    text: splitted[i],
                    pmid: pmid
                }
                d.push(dwp)
            }
        }
        const last_dwp: DescriptionWithPmids = {
            text: splitted[found.length],
            pmid: ''
        }
        d.push(last_dwp)
    }
    else {
        const no_dwp: DescriptionWithPmids = {
            text: description,
            pmid: ''
        }
        d.push(no_dwp)
    }
    return d;
}
export const humanify_date =  (date_string:string) : string => {
    const toks = date_string.split("-")
    //2020-04-14-08-26-11-045455
    const d = toks[1] + '/' + toks[2]  + '/' + toks[0] + ' at ' + toks[3] + ':' + toks[4]
    return d
}

export const get_ref_array = (references: any) : string[] => {
    let refs : string[] = []
    for (let r of references) {
        console.log(r)
        if (r.__typename== "LiteratureReference"){
            console.log(r.PMID)
            refs.push(r.PMID)
        }
    }

    return refs
}