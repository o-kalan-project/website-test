import '../main.css';
document.querySelector<HTMLDivElement>('#app')!.insertAdjacentHTML('afterbegin', `
  <div class="flex justify-between items-center gap-4">
  <div class="animate-slide-in-bck-left text-[min(3vw,34px)] animation-delay-600">
      <h1 class="text-[min(4vw,50px)]">応歌ランとは</h1><BR>
      応歌ラン(おうか らん)とは、2024年6月8日のニコニコ動画サイバー攻撃事件を発端とし、ニコニコ動画を応援することを目的に有志が集まり制作したオリジナルキャラクターです。
    </div>
    <img src="./model.webp" class="animate-slide-in-bck-bottom size-[70%] max-w-[518px] max-h-[751px]" />
  </div>
`)

addEventListener("scroll", () => {
  var elems = document.getElementsByClassName('slide-in-bck-bottom');

  for (var i = 0; i < elems.length; i++) {
    if (elems[i].classList.contains('invisible')) {
      elems[i].classList.remove('invisible');
    }
    elems[i].classList.toggle('animate-slide-in-bck-bottom');
  }

}, { once: true });