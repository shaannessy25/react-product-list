
import data from './data.json';
import { exists } from 'fs';





const stringCategories = data.map((object) => {
    
    return object.category
});


const categorieSet = new Set(stringCategories);
const categoriesUnique = Array.from(categorieSet);


const categoriesWithCount = data.reduce((obj, item) => {
    if (obj[item.category] !== undefined) {
        obj[item.category] += 1
    } else{
        obj[item.category] = 1
    }
    return obj;
}, {})

const categoriesWithName = Object.entries(categoriesWithCount).reduce((acc, item) => {
    const [key, value] = item
    acc.push({name: key, count: value})
    return acc
}, [])
console.log(categoriesWithName)


console.log(stringCategories);
console.log(categoriesUnique);
console.log(categoriesWithCount);
console.log(categoriesWithName);

export default data;
export { categoriesUnique, categoriesWithCount, categoriesWithName }



