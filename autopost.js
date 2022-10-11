//SlackAPIで登録したボットのトークンを設定する
let token = PropertiesService.getScriptProperties().getProperty("SLACK_BOT_TOKEN");
//ライブラリから導入したSlackAppを定義し、トークンを設定する
let slackApp = SlackApp.create(token);

function post() {
  //Slackボットがメッセージを投稿するチャンネルを定義する
  let channelId = ["#部活同好会宣伝用チャンネル", "#なんでも宣伝チャンネル"];

  //宣伝文
  let message = "#ドローン同好会\nドローンに興味がある人・ドローンを飛ばしてみたい人が集まる同好会です！\n ドローンを飛ばせるようになるまでサポートします！！\n【こんな人を募集しています】\nドローンを飛ばしてみたい\nドローンを使って撮影してみたい\nドローンってなんだろう\nドローンに関することならなんでも少しでも興味がある方は覗いてみてください！\n参加を心よりお待ちしております！\n↓こちらから\nhttps://n-highschool.slack.com/archives/C03KWKM61FG";

  for (i = 0; i < 2; i++) {
    slackApp.postMessage(channelId[i], message);
    console.log(channelId[i]);
  }
}

function meeting() {
  let channelId = "ドローン同好会";
  let message = "@channel\nみなさん、おはようございます！\n今夜21時から、こちらのチャンネルにて、定例会を実施します！\n内容としては、ドローン関連の雑談です。\n・同好会のメンバーと仲良くなりたい方\n・ドローンについて語り合いたい方\n・ドローンの始め方に関する相談も大歓迎です！\n初心者の方から玄人の方まで時間の合う方は、ハドルミーティングに是非ご参加ください！";

  slackApp.postMessage(channelId, message);
  console.log(channelId);
}