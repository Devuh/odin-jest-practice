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
      expect(practice.Calculator.subtract(0.4,0.36)).toBe(0.04);
    });

    it('-1 - -5 = 4', () => {
      expect(practice.Calculator.subtract(-1,-5)).toBe(4);
    });
  });

  describe('Division', () => {
    it('No arguments returns error', () => {
      expect(() => practice.Calculator.divide()).toThrow(Error);
    });

    it('Only one argument returns error', () => {
      expect(() => practice.Calculator.divide(1)).toThrow(Error);
    });

    it('3 / 1 = 3', () => {
      expect(practice.Calculator.divide(3,1)).toBe(3);
    });

    it('-1 / -3 = 0.33', () => {
      expect(practice.Calculator.divide(-1,-3)).toBe(0.33);
    });

    it('8 / -5 = 1.6', () => {
      expect(practice.Calculator.divide(8,-5)).toBe(-1.6);
    });

    it('0.33 / 4 = 0.08', () => {
      expect(practice.Calculator.divide(0.33,4)).toBe(0.08);
    });

    it('0 / 3 = 0', () => {
      expect(practice.Calculator.divide(0,3)).toBe(0);
    });

    it('3 / 0 returns an error', () => {
      expect(() => practice.Calculator.divide(3,0)).toThrow(Error);
    });
  });

  describe('Multiplication', () => {
    it('No arguments returns error', () => {
      expect(() => practice.Calculator.multiply()).toThrow(Error);
    });

    it('Only one argument returns error', () => {
      expect(() => practice.Calculator.multiply(1)).toThrow(Error);
    });

    it('3 * 4 = 12', () => {
      expect(practice.Calculator.multiply(3,4)).toBe(12);
    });

    it('3 * 1.5 = 4.5', () => {
      expect(practice.Calculator.multiply(3,1.5)).toBe(4.5);
    });

    it('-3 * 4 = -12', () => {
      expect(practice.Calculator.multiply(-3,4)).toBe(-12);
    });

    it('-3 * -4 = 12', () => {
      expect(practice.Calculator.multiply(-3,-4)).toBe(12);
    });

    it('4 * 0.33 = 1.32', () => {
      expect(practice.Calculator.multiply(4,0.33)).toBe(1.32);
    });

    it('0 * 4 = 0', () => {
      expect(practice.Calculator.multiply(0,4)).toBe(0);
    });
  });
});

describe('Caesar Cipher', () => {
  it('No arguments returns error', () => {
    expect(() => practice.Calculator.multiply()).toThrow(Error);
  });

  it('Only one argument returns error', () => {
    expect(() => practice.Calculator.multiply('abc')).toThrow(Error);
  });

  it('abc with shift 2 returns cde', () => {
    expect(practice.caesarCipher('abc',2)).toBe('cde');
  });

  it('HeLLo with shift 3 returns KhOOr', () => {
    expect(practice.caesarCipher('HeLLo',3)).toBe('KhOOr');
  });

  it('Hello, World! with shift 3 returns Khoor, Zruog!', () => {
    expect(practice.caesarCipher('Hello, World!',3)).toBe('Khoor, Zruog!')
  });

  it('XyZ with shift 3 returns AbC', () => {
    expect(practice.caesarCipher('XyZ',3)).toBe('AbC');
  });

  it('XyZ! with shift 30 returns BcD!', () => {
    expect(practice.caesarCipher('XyZ!',30)).toBe('BcD!');
  });

  it('XyZ! with shift -30 returns TuV!', () => {
    expect(practice.caesarCipher('XyZ!',-30)).toBe('TuV!');
  });
});

describe('Analyze Array', () => {
  it('Long array', () => {
    expect(practice.analyzeArray([1,8,3,4,2,6])).toStrictEqual({average: 4, min: 1, max: 8, length: 6});
  });

  it('Array with no items', () => {
    expect(() => practice.analyzeArray([])).toThrow(Error);
  });

  it('Array with one item', () => {
    expect(practice.analyzeArray([4])).toStrictEqual({average: 4, min: 4, max: 4, length: 1});
  });

  it('Array with negative numbers', () => {
    expect(practice.analyzeArray([-4,-5,-6,-2])).toStrictEqual({average: -4.25, min: -6, max: -2, length: 4});
  });

  it('Array with decimal numbers', () => {
    expect(practice.analyzeArray([2.5,3.75,1.25])).toStrictEqual({average: 2.5, min: 1.25, max: 3.75, length: 3})
  });
});