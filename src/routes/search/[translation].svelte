<script context="module">
    export const prerender = false;
    import {bibleInstance} from '$lib/bible';
    export async function load({fetch,params,url}){
        const query = url.searchParams.get('q');
        const translation = params.translation;
        
        if(!query) return {
            props:{results:[]}
        }
        const bible = await bibleInstance(fetch,{translation});
        if(!bible.translation) return {fallthrough: true}
        const results = bible.search(query);
        return {
            props:{
                translation:bible.translation,
                results,
                query
            }
        };
    }
</script>
<script>
    export let translation;
    export let results;
    export let query;
    function highlight(text){
        if(!text) return;
        return text.replace(new RegExp(query,'g'),`<strong>${query}</strong>`);
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