// Dateクラスのインスタンス生成
const date = new Date();

// 年月日を設定
date.setFullYear(2024);
date.setMonth(10);
date.setDate(12);

// 年月日を取得し、出力する
console.log(date.getFullYear() + '年' + date.getMonth() + '月' + date.getDate() + '日');