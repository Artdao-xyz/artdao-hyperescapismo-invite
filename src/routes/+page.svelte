<script>
    import '/src/style.css';
    import { onMount } from 'svelte';
    import { t, locale, locales } from "$lib/i18n";

    $locale = 'en';

</script>

<div class="gradient-down -z-10 fixed w-screen top-0 left-0">
    <img class="w-full h-fit" src="/background-full.png" alt="">
</div>

<div class="font-arizona-flare h-screen w-full flex flex-col items-center justify-between">
    <div class="text-base my-6 flex justify-center items-center min-w-full gap-3">
        <button class="{$locale == "pt" ? "opacity-100" :"opacity-30"}" on:click={()=> $locale = 'pt'}>PT</button>
        <span class="opacity-30">/</span>
        <button class="{$locale == "en" ? "opacity-100" :"opacity-30"}" on:click={()=> $locale = 'en'}>EN</button>
    </div>
    
    <div class="lp:scale-50">
        <img class="w-full h-full lp:h-full" src="/title.png" alt="">
    </div>

    <div class="gradient-down-balls origin-top scale-50 lp:scale-100 lp:-translate-y-1/2">
        <img class="w-full h-full lp:h-full" src="/balls.png" alt="">
    </div>

    <div class="select-none text-center mb-2">
        <h1 class="font-thin uppercase text-2xl lp:text-5xl">{$t("invite.invite")}</h1>
        
        <p class="text-sm lp:text-lg my-2 lp:my-2 tracking-[3px]">{$t("invite.begin")}</p>
        <img class="mx-auto scale-75 lp:scale-100" src="/arrow.svg" alt="Scroll to begin">
    </div>
</div>

<div class="font-arizona-flare lp:text-xl text-center lp:w-1/3 mx-12 lp:mx-auto tracking-wider">
    <h1 class="uppercase text-3xl lp:text-5xl text-center mt-28 mb-8 lp:mt-22 lp:mb-16 ">{$t("invite.drop")}</h1>
    <div class="leading-8">
        <p>{$t("invite.p1")}</p>
        <br>
        <p>{$t("invite.p2")}</p>
        <br>
        <p>{$t("invite.p3")}</p>
        <br>
        <p class=" text-red-500 ">{$t("invite.p4")}</p>
    </div>
    <div class="scale-[65%] lp:scale-75">
        <a target="_blank" href={"https://discord.gg/aUD8SSTD"}><img class="mx-auto" src="/join.png" alt=""></a>
    </div>
</div>

<div class="gradient-up w-screen -z-10 fixed bottom-0 left-0">
    <img class="w-full h-fit" src="/background-bottom.png" alt="">
</div>