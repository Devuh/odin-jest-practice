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

describe('Reverse String', () => {
  it('Missing argument returns empty string', () => {
    expect(practice.reverseString()).toBe('');
  });

  it('Empty string returns itself', () => {
    expect(practice.reverseString('')).toBe('');
  });

  it('Word returns droW', () => {
    expect(practice.reverseString('Word')).toBe('droW');
  });

  it('racecar returns racecar', () => {
    expect(practice.reverseString('racecar')).toBe('racecar');
  });

  it('w returns w', () => {
    expect(practice.reverseString('w')).toBe('w');
  });

  it('two words returns sdrow out', () => {
    expect(practice.reverseString('two words')).toBe('sdrow owt');
  });

  it('12345 returns 54321', () => {
    expect(practice.reverseString('12345')).toBe('54321');
  });
});

describe('Calculator', () => {
  describe('Addition', () => {
    it('No arguments returns error', () => {
      expect(() => practice.Calculator.add()).toThrow(Error);
    });

    it('Only one argument returns error', () => {
      expect(() => practice.Calculator.add(1)).toThrow(Error);
    });

    it('0 + 0 = 0', () => {
      expect(practice.Calculator.add(0,0)).toBe(0);
    });

    it('1 + 3 = 4', () => {
      expect(practice.Calculator.add(1,3)).toBe(4);
    });

    it('0.4 + 0.36 = 0.76', () => {
      expect(practice.Calculator.add(0.4,0.36)).toBe(0.76);
    });

    it('-1 + -5 = -6', () => {
      expect(practice.Calculator.add(-1,-5)).toBe(-6);
    });
  });

  describe('Subtraction', () => {
    it('No arguments returns error', () => {
      expect(() => practice.Calculator.subtract()).toThrow(Error);
    });

    it('Only one argument returns error', () => {
      expect(() => practice.Calculator.subtract(1)).toThrow(Error);
    });

    it('0 - 0 = 0', () => {
      expect(practice.Calculator.subtract(0,0)).toBe(0);
    });

    it('1 - 3 = -2', () => {
      expect(practice.Calculator.subtract(1,3)).toBe(-2);
    });

    it('0.4 - 0.36 = 0.04', () => {
      expect(practice.Calculator.subtract(0.4,0.36)).toBeCloseTo(0.04);
    });

    it('-1 - -5 = 4', () => {
      expect(practice.Calculator.subtract(-1,-5)).toBe(4);
    });
  });
});