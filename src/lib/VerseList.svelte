<script>
    import { flip } from 'svelte/animate';
    import VerseCard from '$lib/VerseCard.svelte';
    export let translation;
    export let verses;
    export let doShuffle = true;
    function shuffle(){
        verses = verses.sort(()=>.5-Math.random());
    }
    let interval;
    $:if(doShuffle){
        shuffle();
        interval = setInterval(shuffle,100);
        setTimeout(()=>{
            clearInterval(interval);
            doShuffle = false;
        },1000);
    }

</script>
<style>
    ul{
        margin:0;
        padding:0;
        list-style: none;
        display:flex;
        flex-direction: column;
    }
</style>
<ul>
    {#each verses as verse,i (verse.id)}
    <li animate:flip>
        <VerseCard href="/Bible/{translation}/{verse.book}/{verse.chapter}?verse={verse.verseNumber}" 
        text="{verse.book} {verse.chapter}:{verse.verseNumber}" />
    </li>
    {/each}
</ul>