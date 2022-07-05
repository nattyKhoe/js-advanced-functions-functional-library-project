const myEach = function (collection, callback){
    let val = Object.values(collection);
    for (let i =0; i< val.length ; i++) {
        callback(val[i]);
    }
    return collection;
}

const myMap = function (collection, callback) {
    let result = [];

    for (let i = 0; i < collection.length ; i++){
        result.push(callback(collection[i]));
    };

    return result;
}

const unmodifiedTestArr = [1, 2, 3, 4];
const unmodifiedTestObj = { one: 1, two: 2, three: 3, four: 4 };
const callback = (x) => x * 3;
const objResult = myMap(testObj, callback);
 console.log(objResult);

