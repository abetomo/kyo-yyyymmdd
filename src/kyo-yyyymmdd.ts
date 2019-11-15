export class KyoYYYYMMDD {
  date (dateString: string): Date {
    switch (true) {
      case ['今日', '今年'].includes(dateString):
        return this.today()
      case dateString === '昨日':
        return this.yesterday()
      case dateString === '明日':
        return this.tomorrow()

      case ['去年', '昨年'].includes(dateString):
        return this.lastYear()
      case dateString === '来年':
        return this.nextYear()
    }
    throw new Error(`"${dateString}" could not be converted.`)
  }

  convert (dateString: string): string {
    switch (true) {
      case ['今日', '昨日', '明日'].includes(dateString): {
        const date = this.date(dateString)
        return this.年月日(date)
      }

      case ['今年', '去年', '昨年', '来年'].includes(dateString): {
        const date = this.date(dateString)
        return this.年(date)
      }
    }
    throw new Error(`"${dateString}" could not be converted.`)
  }

  年 (date: Date): string {
    return `${date.getFullYear()}年`
  }

  年月日 (date: Date): string {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
  }

  now (): Date {
    return new Date()
  }

  today (): Date {
    const date = this.now()
    date.setHours(0, 0, 0, 0)
    return date
  }

  yesterday (): Date {
    const date = this.today()
    date.setDate(date.getDate() - 1)
    return date
  }

  tomorrow (): Date {
    const date = this.today()
    date.setDate(date.getDate() + 1)
    return date
  }

  lastYear (): Date {
    const date = this.today()
    date.setFullYear(date.getFullYear() - 1)
    return date
  }

  nextYear (): Date {
    const date = this.today()
    date.setFullYear(date.getFullYear() + 1)
    return date
  }
}
