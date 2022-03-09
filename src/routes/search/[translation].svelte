<script context="module">
    import {bibleInstance} from '$lib/bible';
    export async function load({fetch,params}){
        const translation = params.translation;
        const bible = await bibleInstance(fetch,{translation});
        if(!bible.translation) return {fallthrough: true}
        return {
            props:{
                bible,
                translation:bible.translation,
            }
        };
    }
</script>
<script>
    import { afterNavigate } from '$app/navigation';
    import { page } from '$app/stores';
    export let bible = {search:(q)=>[]};
    let results = []; 
    let query = '';
    const translation = bible.translation;
    afterNavigate(()=>{
        query = $page.url.searchParams.get('q');
        results = bible.search(query);

    })
    function highlight(text){
        if(!text) return;
        let result = '';
        query.split(' ').forEach(q=>{
            const regEx = new RegExp(q,'gi');
            const originalCase = regEx.exec(text);
            text = text.replace(regEx,`<strong>${originalCase}</strong>`);
        });
        return text;
    }
</script>
<style>
    section{
        border-bottom:solid 1px var(--primary);
        padding:20px;
        margin-bottom: 5px;
        margin-top:5px;
    }
</style>
<svelte:head>
    <meta name="description" content="Bible search results">    
    <title>Bible Search</title>
</svelte:head>
<h1>Results:</h1>
{#each results as result }
<section>
    <p>{@html highlight(result.verse)}</p>
    <a href="/Bible/{translation}/{result.book}/{result.chapter}?verse={result.verseNumber}">
        {result.book} {result.chapter}:{result.verseNumber}
    </a>
</section>
{/each}
