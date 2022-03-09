<script context="module">
    import {bibleInstance} from '$lib/bible';
    export async function load({fetch,params}){
        const bible = await bibleInstance(fetch,{translation:params.translation});

        if(!bible.translation) return {fallthrough:true};
        return{
            props:{
                translation:bible.translation,
                books:bible.booksByTestament
            }
        }
    }
</script>
<script>
import BackFooter from "$lib/BackFooter.svelte";
import LinkCard from "$lib/LinkCard.svelte";

    export let translation;
    export let books;
    let selected = 'old';
</script>
<style>
    section{
        text-align: center;
        padding-bottom:100px;
    }
    div{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        grid-template-columns: repeat(2,1fr);
    }
    header{
        display:grid;
        grid-template-columns: 1fr 1fr;
    }

    header button{
        font-size: larger;
        color:var(--primary);
        background-color:var(--secondary);
        border:solid 1px var(--primary);
    }
    .left-rounded{
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
    }
    .right-rounded{
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
    }

    header button.selected{
        color:white;
        background-color:var(--highlight);
    }
    .hide{
        display:none;
    }
</style>
<svelte:head>
    <meta name="description" content="Select a book to read">    
    <title>Book Selection</title>
</svelte:head>
<section>
    <h1>Book</h1>
    <header>
        <button class="left-rounded" class:selected={selected == 'old'}
                on:click={()=>selected = 'old'}
        >
        Old Testament</button>
        <button class="right-rounded" class:selected={selected == 'new'}
            on:click={()=>selected = 'new'}
        >New Testament</button>
    </header>
    <div class:hide={selected == 'new'}>
        {#each books['old'] as book}
            <LinkCard href="/Bible/{translation}/{book}/1" text={book} smallList/>
        {/each}
    </div>
    <div class:hide={selected == 'old'}>
        {#each books['new'] as book}
            <LinkCard href="/Bible/{translation}/{book}/1" text={book} smallList/>
        {/each}
    </div>
</section>
<BackFooter/>
