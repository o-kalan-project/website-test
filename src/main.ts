import '../main.css';
document.querySelector<HTMLDivElement>('#app')!.insertAdjacentHTML('beforeend', `
  <div class="flex justify-between items-center gap-4">
  <div class="animate-slide-in-bck-left text-[min(3vw,34px)] animation-delay-600">
      <h1 class="text-[min(4vw,50px)]">応歌ランとは</h1><BR>
      応歌ラン(おうか らん)とは、2024年6月8日のニコニコ動画サイバー攻撃事件を発端とし、ニコニコ動画を応援することを目的に有志が集まり制作したオリジナルキャラクターです。
    </div>
    <img src="./model.webp" class="animate-slide-in-bck-bottom size-[70%] max-w-[518px] max-h-[751px]" />
  </div>
`)

addEventListener("scroll", () => {
  document.querySelector<HTMLDivElement>('#app')!.insertAdjacentHTML('beforeend', `
    <div class="flex justify-between items-center gap-4">
  <div
    class="animate-slide-in-bck-bottom text-[min(3vw,34px)] animation-delay-300"
  >
    <h1 class="text-[min(4vw,50px)]">プロフィール</h1>
    <br />
    <table class="table-auto">
      <tbody>
        <tr class="animate-slide-in-bck-bottom animation-delay-400">
          <td>名前</td>
          <td>応歌ラン</td>
        </tr>
        <tr class="animate-slide-in-bck-bottom animation-delay-500">
          <td>CV</td>
          <td>未定</td>
        </tr>
        <tr class="animate-slide-in-bck-bottom animation-delay-600">
          <td>誕生日</td>
          <td>ニコニコ動画の復旧した日</td>
        </tr>
        <tr class="animate-slide-in-bck-bottom animation-delay-700">
          <td>愛称</td>
          <td>不明</td>
        </tr>
        <tr class="animate-slide-in-bck-bottom animation-delay-800">
          <td>身長</td>
          <td>155cm</td>
        </tr>
        <tr class="animate-slide-in-bck-bottom animation-delay-900">
          <td>体重</td>
          <td>不明</td>
        </tr>
        <tr class="animate-slide-in-bck-bottom animation-delay-1000">
          <td>年齢</td>
          <td>35歳</td>
        </tr>
        <tr class="animate-slide-in-bck-bottom animation-delay-1100">
          <td>好きな人</td>
          <td>ニコふぁんちゃん</td>
        </tr>
        <tr class="animate-slide-in-bck-bottom animation-delay-1200">
          <td>得意なこと</td>
          <td>弾幕形成</td>
        </tr>
        <tr class="animate-slide-in-bck-bottom animation-delay-1300">
          <td>苦手なこと</td>
          <td>勉強</td>
        </tr>
        <tr class="animate-slide-in-bck-bottom animation-delay-1400">
          <td>好きな国</td>
          <td>ニコニ公国</td>
        </tr>
        <tr class="animate-slide-in-bck-bottom animation-delay-1500">
          <td>決め台詞</td>
          <td>レッツゴー!!</td>
        </tr>
        <tr class="animate-slide-in-bck-bottom animation-delay-1600">
          <td>キャッチコピー</td>
          <td>これからのニコ動の話しをしよう</td>
        </tr>
        <tr class="animate-slide-in-bck-bottom animation-delay-1700">
          <td>性格</td>
          <td>ノリのいいオタク</td>
        </tr>
      </tbody>
    </table>
    <br />
    <h1 class="text-[min(4vw,50px)] animate-slide-in-bck-bottom animation-delay-1800">外見</h1>
    <br />
    <table class="table-auto">
      <tbody>
        <tr class="animate-slide-in-bck-bottom animation-delay-1900">
          <td>髪色</td>
          <td>白ベース、虹色のインナーカラー</td>
        </tr>
        <tr class="animate-slide-in-bck-bottom animation-delay-2000">
          <td>髪型</td>
          <td>レインボーポンデリングヘアー</td>
        </tr>
        <tr class="animate-slide-in-bck-bottom animation-delay-2100">
          <td>持ち物</td>
          <td>ニコニ広告のメガホン</td>
        </tr>
        <tr class="animate-slide-in-bck-bottom animation-delay-2200">
          <td>武器</td>
          <td>鉈</td>
        </tr>
        <tr class="animate-slide-in-bck-bottom animation-delay-2300">
          <td>服装</td>
          <td>和服セーラー</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
  `)

}, {once: true});