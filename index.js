function myEach (collection, callback) {
    let val = Object.values (collection);

    for ( let i = 0; i< val.length; i++){
        callback(val[i]);
    }

    return collection;
}

function myMap (collection, callback) {
    let val = Object.values (collection);
    let result = [];

    for ( let i = 0; i <val.length; i++){
        result.push (callback(val[i]));
    }

    return result;
}

function myReduce (collection, callback, acc=0) {
    let val = Object.values (collection);
    let result = 0;

    //i = 0
    
    // result = acc + callback(val[0]);
    for ( let i = 0; i <val.length; i++){
        if (i === 0){
            result = callback(acc, val[i], collection);
        } else {
            result = result + callback(0, val[i], collection);
        }
    }    

    return result;
}

function myFind (collection, predicate) {
    let val = Object.values (collection);
    
    for ( let i = 0; i <val.length; i++) {
        if (predicate(val[i]) === true){
            return val[i];
        }
    }
}

function myFilter (collection, predicate){
    let val = Object.values (collection);
    let result =[];

    for ( let i = 0; i<val.length; i++){
        if (predicate(val[i]) === true) {
            result.push(val[i]);
        }
    }

    return result;
}

function mySize (collection) {
    if (collection.length){
    return collection.length;
    } else {
        return Object.keys(collection).length;
    }
}

function myFirst (array, n=1){
    if (n==1){
        return (array[0]);
    } else {
        return array.splice(0, n);
    }
}

function myLast (array, n=1){
    if (n==1){
        return (array[array.length-1]);
    } else {
        return array.splice(array.length-n,array.length)
    }
}

function myKeys (object){
    return Object.keys(object);
}

function myValues (object){
    return Object.values(object);
}

function mySortBy (array, callback){
    let result = myMap(array, callback);

    if (typeof result[0]  === "string"){
        return result.sort();
    } else {
    let result = [...array];
    return result.sort(function(a,b) {return callback(a)-callback(b)});
    };
}

function myFlatten (array, value, newArr =[]){
    newArr.push(array);

    if (value === true){
        
        return newArr.flat(2);

    } else {
    
    for (let i = 0; i< newArr.length; i++){
        if(Array.isArray(newArr[i]) === true){
            newArr = newArr.flat();
        }
    }

    return newArr;

    }
    // if (value) {
    //     return array.flat();
    // } else {
    //     return array.flat (Infinity);  
    // }
    
}



const nestedArr = [1, [2, 3], [[4, 5], 6, [7, [8, 9]]]]

console.log(myFlatten(nestedArr));
