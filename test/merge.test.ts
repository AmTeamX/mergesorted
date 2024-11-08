import { describe, expect, test } from '@jest/globals';
import { merge } from "../src/main";

describe('Test merge-sorted function', () => {
    test('Normal Array', () => {
        const collection1 = [1,2,3]
        const collection2 = [4,5,6]
        const collection3 = [9,8,7]
        
        const testResult = merge(collection1,collection2,collection3)
        expect(testResult).toEqual([1,2,3,4,5,6,7,8,9])
    });
  });