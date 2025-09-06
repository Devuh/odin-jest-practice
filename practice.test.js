import * as practice from './practice.js';

describe('Capitalize', () => {
  it('Missing argument returns empty string', () => {
    expect(practice.capitalize()).toBe('');
  });

  it('Empty string returns itself', () => {
    expect(practice.capitalize('')).toBe('');
  });

  it('Word returns Word', () => {
    expect(practice.capitalize('Word')).toBe('Word');
  });

  it('word returns Word', () => {
    expect(practice.capitalize('word')).toBe('Word');
  });

  it('WORD returns WORD', () => {
    expect(practice.capitalize('WORD')).toBe('WORD');
  });

  it('wORD returns WORD', () => {
    expect(practice.capitalize('wORD')).toBe('WORD');
  });

  it('w returns W', () => {
    expect(practice.capitalize('w')).toBe('W');
  });

  it('two words returns Two words', () => {
    expect(practice.capitalize('two words')).toBe('Two words');
  });

  it('1word returns 1word', () => {
    expect(practice.capitalize('1word')).toBe('1word');
  });
});