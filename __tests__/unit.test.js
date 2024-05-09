// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('phone number true', () => {
  expect(isPhoneNumber('111-111-1111')).toBe(true);
});

test('phone number true', () => {
  expect(isPhoneNumber('324-234-1231')).toBe(true);
});

test('phone number false', () => {
  expect(isPhoneNumber('11a-111-1d11')).toBe(false);
});

test('phone number false', () => {
  expect(isPhoneNumber('aaa-aaa-aaaa')).toBe(false);
});


test('email true', () => {
  expect(isEmail('hello123@gmail.com')).toBe(true);
});

test('email true', () => {
  expect(isEmail('123whatsup@yahoo.com')).toBe(true);
});

test('email false', () => {
  expect(isEmail('@a@@yahoo')).toBe(false);
});

test('email false', () => {
  expect(isEmail('fff@.com')).toBe(false);
});

test('strong password true', () => {
  expect(isStrongPassword('hello123mailcom')).toBe(true);
});

test('strong password true', () => {
  expect(isStrongPassword('whatsup123_com')).toBe(true);
});

test('strong password false', () => {
  expect(isStrongPassword('@1a@@yahoo')).toBe(false);
});

test('strong password false', () => {
  expect(isStrongPassword('fff@.ffffffffffffffffffffffffcom')).toBe(false);
});

test('date true', () => {
  expect(isDate('11/12/2323')).toBe(true);
});

test('date true', () => {
  expect(isDate('1/1/2123')).toBe(true);
});

test('date false', () => {
  expect(isDate('111/111/111')).toBe(false);
});

test('date false', () => {
  expect(isDate('//2222')).toBe(false);
});

test('hex color true', () => {
  expect(isHexColor('BCEDE1')).toBe(true);
});

test('hex color true', () => {
  expect(isHexColor('1AA')).toBe(true);
});

test('hex color false', () => {
  expect(isHexColor('AA')).toBe(false);
});

test('hex color false', () => {
  expect(isHexColor('@#!@4A')).toBe(false);
});
