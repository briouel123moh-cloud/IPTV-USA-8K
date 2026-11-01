import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { compareQuote } from '../src/lib/cost-comparison.mjs';
test('user quotes include each entered extra exactly once and normalize by term and screens',()=>{
 assert.deepEqual(compareQuote({quote:120,extras:12,setup:48,months:12,screens:3}),{total:180,monthly:15,monthlyPerScreen:5});
 assert.deepEqual(compareQuote({quote:.1,extras:.2,months:1,screens:1}),{total:.3,monthly:.3,monthlyPerScreen:.3});
});
test('calculator rejects missing, negative, nonfinite and zero-divisor inputs',()=>{
 for(const patch of [{quote:0},{quote:-1},{quote:Infinity},{extras:-.1},{months:0},{screens:0},{months:1.5},{screens:7},{quote:'120'}])assert.throws(()=>compareQuote({quote:120,months:12,screens:1,...patch}),RangeError);
});

test('calculator is safe without JavaScript and exposes a manual calculation fallback',async()=>{
 {
  const html=await readFile('dist/guides/iptv-cost-usa/index.html','utf8');
  assert.match(html,/<button[^>]*data-calculate-cost[^>]*disabled/);
  assert.match(html,/<noscript>/);
 }
});
