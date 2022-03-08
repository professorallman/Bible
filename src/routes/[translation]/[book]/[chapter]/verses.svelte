<script context="module">
    import { bibleInstance } from '$lib/bible';
    export async function load({fetch,params}){
        const {translation,book,chapter} = params;
        const bible = await bibleInstance(fetch,{translation,book,chapter});
        if(!bible.translation || bible.book === undefined || bible.chapter === undefined) return {fallthrough:true}

        return {
            props:{
                translation:bible.translation,
                book:bible.book,
                chapter:bible.chapter,
                verses:bible.verses.map(v=>v.verse),
            }  
        };
    }
</script>
<script>
import BackFooter from '$lib/BackFooter.svelte';

    import LinkCard from "$lib/LinkCard.svelte";

    export let translation;
    export let book;
    export let chapter;
    export let verses;
</script>
<style>
    ol{
        list-style: none;
        display:flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin:0;
        padding:0;
    }
</style>
<svelte:head>
    <meta name="description" content="Select a verse to read in {book} {chapter}">    
    <title>{book} {chapter} Verse Selection</title>
</svelte:head>
<h1>{book} {chapter}</h1>
<h2>Verse:</h2>
<ol>    
    {#each verses as v}
    <li value={v}>
        <LinkCard href="/{translation}/{book}/{chapter}?verse={v}" text={v}/>
    </li>    
    {/each}
</ol>

<BackFooter/>