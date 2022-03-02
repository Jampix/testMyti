// Fibonacci

let fibonacci = ['1', '1'];
let index = 2;
let next = '0';

// How much characters we want
let chars = 1000;

// Since Javascript is unable to process a number higher than 2^53 -1 with bigint
// we will use strings and create function to proceed with the

// The greater number must be always to the right (b)

let sum = (a, b) => {
    
    a = a.toString().split('');
    b = b.toString().split('');

    let a_size = a.length;
    let b_size = b.length;

    let plus_one = 0;
    let result = b;

    for (let i = 1; i <= a.length; i++) {
        
        let local_sum = parseInt(a[a_size - i]) + parseInt(b[b_size - i]);

        // columnar sum
        if (local_sum < 9) {
            result[b_size - i] = local_sum + plus_one;
            plus_one = 0;
        }
        else if (local_sum == 9) {
            result[b_size - i] = plus_one ? '0' : '9';
            plus_one = plus_one ? 1 : 0;
        } 
        else {
            local_sum = (local_sum + plus_one).toString();
            result[b_size - i] = local_sum[1];
            plus_one = 1;
        }
        
    }

    if (b_size > a_size)
        result[0] = parseInt(b[0]) + plus_one;
    else if (plus_one)
        result.unshift(1);
    
    return result.join('');
        
}

// We are doing the fibonacci calculation based
// on the number of chars we want
while (next.length < chars) {
    next = sum(fibonacci[index - 2], fibonacci[index - 1]);
    fibonacci[index] = next;
    index++;
}

console.log('position: ' + index);
console.log('fibonacci with ' + chars + ' chars: ' + next);