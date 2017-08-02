import Mock from 'mockjs';
export default Mock.mock('/getUser',{
    'name':'@name',
    'age|1-100':100,
    'color':'@color'
});