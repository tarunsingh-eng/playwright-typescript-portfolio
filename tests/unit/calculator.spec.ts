import { test, expect } from '@playwright/test'
import calc from '../../apps/calculator-app/calculator.js'

test('add number', () => {
    expect(calc.add(2,3)).toBe(5)
})

test('divide by zero', () => {
    expect(() => calc.divide(5,0)).toThrow()
})

test('multiple number', () => {
    expect (calc.multiply(2,5)).toBe(10)
})

test('divide number', () => {
    expect(calc.divide(10,2)).toBe(5)
})

