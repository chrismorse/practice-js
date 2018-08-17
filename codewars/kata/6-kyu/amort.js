// https://www.codewars.com/kata/59c68ea2aeb2843e18000109/solutions/javascript

function amort(rate, bal, term, num_payments) {
	
  let r = rate / 1200; 
  let n = r * bal;
  let d = 1 - Math.pow((1 + r),(-term))
  let c = n / d;
  
  let amount_owed = (Math.pow(1 + r,num_payments) * bal) - (((Math.pow(1 + r,num_payments) - 1) / r) * c)
  let prev_amount_owed = (Math.pow(1 + r,num_payments-1) * bal) - (((Math.pow(1 + r,num_payments-1) - 1) / r) * c)
  let interest = r * prev_amount_owed;
  
  return "num_payment " + num_payments + " c " + c.toFixed(0) + " princ " + (c-interest).toFixed(0) + " int " + interest.toFixed(0) + " balance " + amount_owed.toFixed(0);
  
}