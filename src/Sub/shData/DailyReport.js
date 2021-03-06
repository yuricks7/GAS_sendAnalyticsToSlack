class DailyReport extends spDataSheet {

  constructor() {
    // スプレッドシートからデータを取得する
    super('Daily Report'); // 親クラスのコンストラクタを引き継ぐ（=オーバーライド）
    const values    = this.dataRange.getValues();
    const numFormat = new NumFormat();
    const decimalPoint = 2;

    const amounts = values[11];
    this.data.total = {
      pageviews          : numFormat.toInteger(amounts[1]),
      avgTimeOnPage      : numFormat.toDecimalPoints(amounts[2], decimalPoint),
      sessions           : numFormat.toInteger(amounts[3]),
      pageviewsPerSession: numFormat.toDecimalPoints(amounts[4], decimalPoint),
      newUsers           : numFormat.toInteger(amounts[5]),
      users              : numFormat.toInteger(amounts[6]),
      bounceRate         : numFormat.toPercentage(amounts[7]),
      avgSessionDuration : numFormat.toDecimalPoints(amounts[8], decimalPoint),
    };

    const prevValues = values[15];
    this.data.lastDay = {
      pageviews          : numFormat.toInteger(prevValues[1]),
      avgTimeOnPage      : numFormat.toDecimalPoints(prevValues[2], decimalPoint),
      sessions           : numFormat.toInteger(prevValues[3]),
      pageviewsPerSession: numFormat.toDecimalPoints(prevValues[4], decimalPoint),
      newUsers           : numFormat.toInteger(prevValues[5]),
      users              : numFormat.toInteger(prevValues[6]),
      bounceRate         : numFormat.toPercentage(prevValues[7]),
      avgSessionDuration : numFormat.toDecimalPoints(prevValues[8], decimalPoint),
    };
  }
}
