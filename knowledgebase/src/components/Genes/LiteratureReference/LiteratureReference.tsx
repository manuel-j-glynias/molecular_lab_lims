import * as React from 'react';
import './styles.css';
import {LiteratureReferenceQuery} from "../../../generated/graphql";

interface Props {
    data: LiteratureReferenceQuery;
}

const className = 'LiteratureReference';



const LiteratureReference: React.FC<Props> = ({ data }) => {
    if (!data.LiteratureReference) {
        return <div></div>;
    }
    if (!data.LiteratureReference[0]) {
        return <div></div>;
    }

    return (

        <div className={className}>


            <div className={`${className}__Wrapper`}>
                <div><strong>{data.LiteratureReference[0].title }</strong></div>
                <div><i>{data.LiteratureReference[0].journal.name }</i>({data.LiteratureReference[0].publication_Year }) {data.LiteratureReference[0].volume }
                    {data.LiteratureReference[0].first_page !== 'None' ? <span>: {data.LiteratureReference[0].first_page}</span>  : <span></span>}
                    {data.LiteratureReference[0].last_page !== 'None' ? - data.LiteratureReference[0].last_page  : <span></span> }</div>
                <div><strong>PMID: </strong>
                    <a href={'https://pubmed.ncbi.nlm.nih.gov/' + data.LiteratureReference[0].PMID} target="_blank"
                       rel="noopener noreferrer">{data.LiteratureReference[0].PMID }</a>&nbsp;&nbsp;
                    <strong>
                DOI: </strong>{data.LiteratureReference[0].DOI }</div>
                <div><strong>Abstract: </strong><small>{data.LiteratureReference[0].abstract }</small></div>
                <div><strong>Authors: </strong>{data.LiteratureReference[0].authors.map((item, index) => (<span key={index}><span>{item.surname}, {item.first_initial}; </span></span>))}</div>

            </div>

            <br/>
        </div>

    );
};
export default LiteratureReference;