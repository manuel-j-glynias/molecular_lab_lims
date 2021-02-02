import * as React from 'react'
import {Maybe, Molecular_Lab_Test, TestsListQuery} from '../../generated/graphql';
import './styles.css'

interface Props  {
    data: TestsListQuery;
    selected_test: string;
    set_selected_test: (s:string) => void;
    set_selected_test_obj: (test:Maybe<Molecular_Lab_Test>)=> void;
}

const className = 'Tests';



const Tests: React.FC<Props> = ({data,selected_test,set_selected_test,set_selected_test_obj}) => {
    const handleTest_select =  (id:string)  => {
        set_selected_test(id)
        if (data != null && data.Molecular_Lab_Test!=null && data.Molecular_Lab_Test.length>0){
            let index : number = 0;
            for (index = 0; index < data.Molecular_Lab_Test.length;index++){
                let test = data.Molecular_Lab_Test[index];
                if (test!=null && test.id==id){
                    // @ts-ignore
                    set_selected_test_obj(test);
                }
            }
        }
    }
    return (
        <div className={className} >

            <ol className={`${className}__list`} >
                {!!data.Molecular_Lab_Test &&
                data.Molecular_Lab_Test.map(
                    (test, i: string | number ) =>
                        !!test && (
                            <li key={i}
                                className={ test.id===selected_test ?  `${className}__selected_item` :  `${className}__item`  }
                                onClick={() => handleTest_select(test.id!)}
                            ><span>{test.name} </span>

                            </li>
                        ),
                )}
            </ol>

        </div>
    )
}

export default Tests;