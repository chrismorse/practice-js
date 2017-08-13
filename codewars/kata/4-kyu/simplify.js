// https://www.codewars.com/kata/55f89832ac9a66518f000118/

function simplify(poly){

    const parsePolynomials = poly => {
        let allPolynomials = [], polynomial = {isPositive: false, variableStr: '', numStr: ''};

        let sortAndClean = polynomial => {
            polynomial.numStr = polynomial.numStr === '' ? "1" : polynomial.numStr;
            polynomial.variableStr = polynomial.variableStr.split('').sort().join('');
            return polynomial;
        }

        for (let i = 0; i < poly.length + 1; i++) {

            if (i === poly.length) {
                allPolynomials.push(sortAndClean(polynomial))
                break;
            }

            // check if first polynomial is positive
            if (i === 0) {
                if (poly[i] === '-') {   
                    polynomial.isPositive = false;
                    continue;
                } else {
                    polynomial.isPositive = true;
                }
            }
            
            if (poly[i] === '-' || poly[i] === '+') { 
                allPolynomials.push(sortAndClean(polynomial));
                polynomial = {isPositive: false, variableStr: '', numStr: ''}
                polynomial.isPositive = poly[i] === '+' ? true : false;
            } else if (!isNaN(poly[i])) {
                polynomial.numStr += poly[i];
            } else {
                polynomial.variableStr += poly[i];
            }
        }
        return allPolynomials;
    }


    let polys = parsePolynomials(poly);
    polys.sort((a,b) => {return a.variableStr > b.variableStr ? 1 : -1} )
    
    // addition / subraction
    let polynomial = {variableStr: '', number: 0};
    result = [];
    for (let i = 0; i < polys.length + 1; i++) {
        if (i === polys.length) {
            result.push(polynomial);                
            continue;
        }
        
        if (polys[i].variableStr !== polynomial.variableStr) {
            if (i !== 0) {
                result.push(polynomial);                
            } 
            polynomial = {};
            polynomial.variableStr = polys[i].variableStr;
            polynomial.number = polys[i].isPositive ? parseInt(polys[i].numStr) : parseInt("-" + polys[i].numStr);
        } else {
            polynomial.number += polys[i].isPositive ? parseInt(polys[i].numStr) : parseInt("-" + polys[i].numStr);
        }
    }

    // sort the results
    result.sort((a,b) => {return a.variableStr.length > b.variableStr.length})
    
    // format results
    let resultStr = '';
    for (let i = 0; i < result.length; i++) {
        if (result[i].number === 0)
            continue;

        resultStr += (resultStr === '' && result[i].number > 0) ? '' : result[i].number > 0 ? '+' : '';
        resultStr += result[i].number === 1 ? '' : result[i].number === -1 ? "-" : result[i].number.toString() 
        resultStr += result[i].variableStr;
    }

    return resultStr;

}
