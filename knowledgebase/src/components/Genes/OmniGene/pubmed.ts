import {XMLHttpRequest} from 'xmlhttprequest-ts';


function getRequest(url: string): Promise<any> {
    return new Promise<any>(
        function (resolve, reject) {
            const request = new XMLHttpRequest();
            request.onload = function () {
                if (this.status === 200) {
                    resolve(this.responseText);
                } else {
                    reject(new Error(this.statusText));
                }
            };
            request.onerror = function () {
                reject(new Error('XMLHttpRequest Error: ' + this.statusText));
            };
            request.open('GET', url);
            request.send();
        })
};

function parseXml(xmlStr:string) {
    var result;
    var parser = require('xml2js');
    parser.Parser().parseString(xmlStr, (e:string, r:string) => {result = r});
    return result;
}
// class Author  {
//     initials: string | undefined;
//     lastname: string | undefined;
// };

const test_pubmed = async (pubmed_id:string) => {
    let url_string : string = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?api_key=cde5c1a63fa16711994bfe74b858747cbb08&db=pubmed&retmode=xml&id=' + pubmed_id
    getRequest(url_string)
        .then(response => {
            // console.log("XML");
            // console.log(response);
            let j = parseXml(response)
            // console.log("json");
            // console.log(JSON.stringify(j));
            // @ts-ignore
           let article = j.PubmedArticleSet.PubmedArticle[0].MedlineCitation[0].Article[0]
            // console.log('article:'+ JSON.stringify(article))
            let title = article.ArticleTitle[0]
            console.log('title:'+ title)
             let abstract = article.Abstract[0].AbstractText[0]
            console.log('abstract:'+ abstract)
            let journal = article.Journal[0].Title[0]
            console.log('journal:'+ journal)
            let volume = article.Journal[0].JournalIssue[0].Volume[0]
            console.log('volume:'+ volume)
            let  year = article.Journal[0].JournalIssue[0].PubDate[0].Year[0]
            console.log('year:'+ year)
            // @ts-ignore
            let pmid = j.PubmedArticleSet.PubmedArticle[0].MedlineCitation[0].PMID[0]._
            console.log('pmid:'+ pmid)
            let doi = '-'
            // @ts-ignore
            let articleIdList = j.PubmedArticleSet.PubmedArticle[0].PubmedData[0].ArticleIdList[0].ArticleId
            for (var i = 0; i < articleIdList.length; i++) {
                let type = articleIdList[i].$.IdType;
                if (type==='doi'){
                    doi = articleIdList[i]._;
                    break;
                }
            }
            console.log('doi:'+ doi)

            // let authors = [Author]
            let authors_array = article.AuthorList[0].Author
            console.log('num authors:'+ authors_array.length)
            for (var ii = 0; ii < authors_array.length; ii++) {
                console.log(authors_array[ii].LastName[0]);
                console.log(authors_array[ii].Initials[0]);
            }
            if (article.Pagination != null){
                let pages = article.Pagination[0].MedlinePgn[0]
                console.log('pages:'+ pages)
                let page_array = pages.split("-")
                let first_page = page_array[0]
                let last_page = page_array[1]
                console.log('first_page:'+ first_page)
                console.log('last_page:'+ last_page)
            }
            else {
                console.log('no pages')
            }
        })
        .catch(error => {
            console.log(error);
        });
    console.log('test pubmed')
};


    export default test_pubmed;