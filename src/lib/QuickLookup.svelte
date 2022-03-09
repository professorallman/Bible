<script>
    import { goto } from '$app/navigation';
    export let bible;
    let searchQuery = '';
    let notFound = false;
    function doSearch(e){
        e.preventDefault();
        const [bookChapter,verse] = searchQuery.split(':');
        const [book,chapter] = bookChapter.split(' ');
        bible.book = book;
        bible.chapter = chapter;
        const url = (bible.book)? `/Bible/${bible.translation}/${bible.book}/${bible.chapter? chapter : 1}`:
                    false;
        if(url){
            const verseQuery = (verse)? "?verse=" + verse : '';
            goto(`${url}${verseQuery}`);
            searchQuery = '';
        }else{
            notFound = true;
        }
    }    
</script>
<style>
    label{
        display: flex;
        flex-direction: column;
    }
    label p{
        margin:0;
    }
    button{
        cursor: pointer;
        color:var(--primary);
        background-color: var(--secondary);
        border:solid 1px var(--primary);
    }
    section{
        padding:10px 0px;
    }

</style>
<section>
    <form on:submit={doSearch}>
        <label aria-label="Search">
            <span>Quick Verse :</span>
            <p><small>Examples: g, genesis, genesis 1, genesis 1:1, genesis 1:1-5</small></p>
            <input bind:value={searchQuery} 
                    on:keydown={()=>notFound = false}
                    />
        </label>
        <button on:click={doSearch}>Go</button>
        {#if notFound}
        Not found, try again
        {/if}
    </form>
</section>