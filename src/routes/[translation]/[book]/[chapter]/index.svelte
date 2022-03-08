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
                verses:bible.translationVerses
            }  
        };
    }
</script>
<script>
    import { goto,afterNavigate } from '$app/navigation';
    import { page } from '$app/stores';
    export let translation;
    export let book;
    export let chapter;
    export let verses = [];
    let verseQuery = '';
    let startVerse,endVerse;
    afterNavigate(()=>{
        verseQuery = ($page.url.searchParams.get('verse') || '').split('-');
        if(verseQuery[0] == ''){
            startVerse = verses[0].verse_number;
            endVerse = verses[verses.length - 1].verse_number;
        }else if(!verseQuery[1]){
            startVerse = verseQuery[0];
            endVerse = verseQuery[0]
        }else{
            startVerse = verseQuery[0];
            endVerse = verseQuery[1];
        }
    });
    function readFullChapter(){
        const toGoto = `/Bible/${translation}/${book}/${chapter}#${startVerse}`;
        startVerse = verses[0].verse_number;
        endVerse = verses[verses.length - 1].verse_number;
        verseQuery = ''
        goto(toGoto);
    }
    $: displayVerses = verses.filter(v=> v.verse_number >= startVerse && v.verse_number <= endVerse);
</script>
<style>
    li{
        font-size: large;
    }
    nav ul{
        margin:0;
        padding:0;
        display: flex;
        list-style: none;
    }
    nav ul li{
        flex-grow: 1;
    }
    nav ul a,nav ul a:visited{
        text-decoration: none;
        display:block;
        padding:20px;
        border:solid 1px var(--primary);
        color:var(--primary);
        background-color:var(--secondary);

    }
    a{
        color:var(--primary);
    }
    button{
        font-size: larger;
        cursor: pointer;
        border:none;
        color:var(--primary);
        background-color: inherit;
        text-decoration: underline;
    }
</style>
<svelte:head>
    <meta name="description" content="{book} {chapter} ({translation})">    
    <title>{book} {chapter} ({translation})</title>
</svelte:head>

<nav>
    <ul>
        <li><a href="/Bible/{translation}">{book}</li>
        <li><a href="/Bible/{translation}/{book}">{chapter}</li>
        <li>
            <a href="/Bible/{translation}/{book}/{chapter}/verses">
                {#if verseQuery != ''}
                    {startVerse}{(startVerse == endVerse)? '' : `-${endVerse}`}
                {:else}
                    Verses
                {/if}
            </a>
        </li>
    </ul>
</nav>
<ol>
    {#if displayVerses && displayVerses.length > 0}
        {#each displayVerses as v}
        <li value={v.verse_number} id={v.verse_number}>{v.verse}</li>
        {/each}
    {:else}
        {#each verses as v}
        <li value={v.verse_number} id={v.verse_number}>{v.verse}</li>
        {/each}
    {/if}
</ol>
{#if verseQuery != ''}
    <button on:click={readFullChapter}>Read full chapter</button>
{/if}
