import { KyoYYYYMMDD } from '../kyo-yyyymmdd'

describe('KyoYYYYMMDD', () => {
  const converter = new KyoYYYYMMDD()
  beforeEach(() => {
    converter.now = () => new Date(1983, 3, 8, 9, 10, 11, 12)
  })

  test('年()', () => {
    expect(converter.年(new Date(1983, 3, 8, 0, 0, 0, 0))).toEqual('1983年')
  })

  test('年月日()', () => {
    expect(converter.年月日(new Date(1983, 3, 8, 0, 0, 0, 0))).toEqual('1983年4月8日')
  })

  test('today()', () => {
    expect(converter.today()).toEqual(new Date(1983, 3, 8, 0, 0, 0, 0))
  })

  test('yesterday()', () => {
    expect(converter.yesterday()).toEqual(new Date(1983, 3, 7, 0, 0, 0, 0))
  })

  test('yesterday(start of month)', () => {
    converter.now = () => new Date(1983, 3, 1, 9, 10, 11, 12)
    expect(converter.yesterday()).toEqual(new Date(1983, 2, 31, 0, 0, 0, 0))
  })

  test('tomorrow()', () => {
    expect(converter.tomorrow()).toEqual(new Date(1983, 3, 9, 0, 0, 0, 0))
  })

  test('tomorrow(end of month)', () => {
    converter.now = () => new Date(1983, 3, 30, 9, 10, 11, 12)
    expect(converter.tomorrow()).toEqual(new Date(1983, 4, 1, 0, 0, 0, 0))
  })

  test('lastYear()', () => {
    expect(converter.lastYear()).toEqual(new Date(1982, 3, 8, 0, 0, 0, 0))
  })

  test('nextYear()', () => {
    expect(converter.nextYear()).toEqual(new Date(1984, 3, 8, 0, 0, 0, 0))
  })

  describe('date()', () => {
    test('could not be converted.', () => {
      expect(() => {
        converter.date('hoge')
      })
        .toThrowError('"hoge" could not be converted.')
    })

    test('今日', () => {
      expect(converter.date('今日')).toEqual(new Date(1983, 3, 8, 0, 0, 0, 0))
    })

    test('昨日', () => {
      expect(converter.date('昨日')).toEqual(new Date(1983, 3, 7, 0, 0, 0, 0))
    })

    test('明日', () => {
      expect(converter.date('明日')).toEqual(new Date(1983, 3, 9, 0, 0, 0, 0))
    })

    test('今年', () => {
      expect(converter.date('今年')).toEqual(new Date(1983, 3, 8, 0, 0, 0, 0))
    })

    test('去年', () => {
      expect(converter.date('去年')).toEqual(new Date(1982, 3, 8, 0, 0, 0, 0))
    })

    test('昨年', () => {
      expect(converter.date('昨年')).toEqual(new Date(1982, 3, 8, 0, 0, 0, 0))
    })

    test('来年', () => {
      expect(converter.date('来年')).toEqual(new Date(1984, 3, 8, 0, 0, 0, 0))
    })

  })

  describe('convert()', () => {
    test('could not be converted.', () => {
      expect(() => {
        converter.convert('hoge')
      })
        .toThrowError('"hoge" could not be converted.')
    })

    test('今日', () => {
      expect(converter.convert('今日')).toEqual('1983年4月8日')
    })

    test('昨日', () => {
      expect(converter.convert('昨日')).toEqual('1983年4月7日')
    })

    test('明日', () => {
      expect(converter.convert('明日')).toEqual('1983年4月9日')
    })

    test('今年', () => {
      expect(converter.convert('今年')).toEqual('1983年')
    })

    test('去年', () => {
      expect(converter.convert('去年')).toEqual('1982年')
    })

    test('昨年', () => {
      expect(converter.convert('昨年')).toEqual('1982年')
    })

    test('来年', () => {
      expect(converter.convert('来年')).toEqual('1984年')
    })
  })
})
