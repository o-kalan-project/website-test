import '../main.css';
document.body.insertAdjacentHTML('afterbegin',`
<header class="fixed flex items-center w-screen -bottom-100 top-0 bg-white z-10 shadow-xl">
<a href="./"
  ><img
    src="./logo.webp"
    width="90%"
    height="90%"
    class="block p-1 md:ml-10 max-w-[183px] max-h-[79px] min-w-[78px] min-h-[33px]"
/></a>
<nav class="ml-auto py-auto justify-between p-3 md:mr-10">
  <ul class="flex items-center gap-4 whitespace-nowrap">
    <li>
      <a
        href="./about"
        style="color: pink"
        class="text-[min(3vw,24px)]"
        >応歌ランについて</a
      >
    </li>
    <li>
      <a
        href="./eula"
        style="color: pink"
        class="text-[min(3vw,24px)]"
        >利用規約</a
      >
    </li>
    <li>
      <a
        href="./utau"
        style="color: pink"
        class="text-[min(3vw,24px)]"
        >UTAU</a
      >
    </li>
    <li>
      <a
        href="./changelog"
        style="color: pink"
        class="text-[min(3vw,24px)]"
        >更新履歴</a
      >
    </li>
  </ul>
</nav>
</header>
`);
