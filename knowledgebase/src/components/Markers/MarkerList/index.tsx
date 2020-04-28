import React, {useState} from 'react';
import {Redirect} from "react-router-dom";


interface Props {
    logged_in: boolean;
}

// DNAMarker ProteinExpressionMarker Variant Marker
const className = 'MarkerList';
const MarkerListContainter: React.FC<Props> = ({logged_in}) => {
    const [dna, set_dna] = useState(true)
    const [protein, set_protein] = useState(true)
    const [variant, set_variant] = useState(true)
    const [composite, set_composite] = useState(true)

    if (!logged_in) {
        return <Redirect to="/"/>
    }
    return (
        <div className={`${className}__Container`}>
            <div className={`${className}__Panel_Wrapper`}>
                <div className={`${className}__Panel`}>
                    <div className={`${className}__Buttons`}>
                        <div className={`${className}__Title`}>Markers to View:</div>
                        <div className={`${className}__Checkbox`}>
                            <label className={`${className}__Label`}>
                                <input
                                    name="dna"
                                    type="checkbox"
                                    checked={dna}
                                    onChange={() => set_dna(!dna)}/> DNA Markers
                            </label>
                        </div>
                        <div className={`${className}__Checkbox`}>
                            <label className={`${className}__Label`}>
                                <input
                                    name="protein"
                                    type="checkbox"
                                    checked={protein}
                                    onChange={() => set_protein(!protein)}/> Protein Expression Markers
                            </label>
                        </div>
                        <div className={`${className}__Checkbox`}>
                            <label className={`${className}__Label`}>
                                <input
                                    name="variant"
                                    type="checkbox"
                                    checked={variant}
                                    onChange={() => set_variant(!variant)}/> Genomic Variants
                            </label>
                        </div>
                        <div className={`${className}__Checkbox`}>
                            <label className={`${className}__Label`}>
                                <input
                                    name="composite"
                                    type="checkbox"
                                    checked={composite}
                                    onChange={() => set_composite(!composite)}/> Composite Markers
                            </label>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MarkerListContainter;