
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let massive=[];
    if(matrix===undefined){
        return [];
    }
    for(let i=1;i<matrix.length;i+=2){
      matrix[i]=matrix[i].reverse();
    } 
    if(matrix.length===0){
        return [];
    }
    else{
        matrix.forEach(elem=>{
            for(let i=0;i<elem.length;i++){
                massive.push(elem[i]);
            }
        })
    }
    return massive;
}

