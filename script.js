
function concatenateString(text, maxLength) {
    if (typeof text !== 'string' || typeof maxLength !== 'number') {
        return "Invalid input"; 
    }
    if (text.length <= maxLength) {
        return text.toUpperCase;  
    } 
    else {
        return text.slice(0, maxLength).toUpperCase() + '...';
    }
}

console.log(concatenateString('Longer than expected', 5));  


