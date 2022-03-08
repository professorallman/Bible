<script context="module">
    import { bibleInstance } from '$lib/bible';
    export async function load({fetch,params}){
        const {translation,book} = params;
        const bible = await bibleInstance(fetch,{translation,book});
        if(!bible.translation || bible.book == undefined) return {fallthrough:true};
        return {
            props:{
                translation:bible.translation,
                book:bible.book,
                chapters:bible.chapters.map(ch=>ch.chapter)
            }
        };
    }
</script>
<script>
import BackFooter from '$lib/BackFooter.svelte';

import LinkCard from "$lib/LinkCard.svelte";

    export let translation;
    export let book;
    export let chapters;
</script>
<style>
    ol{
        margin:0;
        padding:0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        list-style:none;
        margin-bottom:100px;
    }
    
</style>
<svelte:head>
    <meta name="description" content="Select a chapter from {book} to read">    
    <title>{book} Chapter Selection</title>
</svelte:head>
<h1>{book}</h1>
<h2>Chapter:</h2>
<ol>
    {#each chapters as chapter}
    <li value={chapter}>
        <LinkCard href="/{translation}/{book}/{chapter}" text={chapter}/>
    </li>
 {/each}

</ol>
<BackFooter/>