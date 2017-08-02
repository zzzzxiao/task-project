import Fetch from 'axios';
const doAjax =(option)=>{
// export function doAjax (option){
    const defaultOpt = {
        url:null,
        method:'get',
        data:{},
        domain:null,
        timeout:1000
    }
    const options = Object.assign({},defaultOpt,option);
    return Fetch(options).then(result=>{
        return result;
    }).catch(error=>{
        throw error;
    });
}
export {doAjax};
export const PI = 3.1415926;
