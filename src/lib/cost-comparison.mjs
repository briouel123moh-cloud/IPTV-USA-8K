// User-supplied quotes only. No catalogue prices or currency conversion.
export function compareQuote({ quote, extras=0, setup=0, months, screens }) {
  if (![quote,extras,setup].every(n=>typeof n==='number' && Number.isFinite(n) && n>=0 && n<=100000) || quote===0) throw new RangeError('Enter a positive quote and valid non-negative extra costs.');
  if (!Number.isInteger(months)||months<1||months>24||!Number.isInteger(screens)||screens<1||screens>6) throw new RangeError('Select a duration and screen count.');
  const totalCents=[quote,extras,setup].reduce((sum,n)=>sum+Math.round(n*100),0);
  return { total:totalCents/100, monthly:totalCents/months/100, monthlyPerScreen:totalCents/months/screens/100 };
}
