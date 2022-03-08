<script>
    import { goto } from '$app/navigation';
    export let translation = 'CPDV';
    let searchQuery = '';
    function doSearch(){
        const [bookChapter,verse] = searchQuery.split(':');
        const [book,chapter] = bookChapter.split(' ');
        const verseQuery = (verse)? "?verse=" + verse : '';
        goto(`/${translation}/${book}/${chapter? chapter : 1}${verseQuery}`);
        searchQuery = '';
    }

    function keypress(e){
        if(e.code !== 'Enter') return;
        doSearch();
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
    <label aria-label="Search">
        <span>Quick Verse :</span>
        <p><small>Examples: g, genesis, genesis 1, genesis 1:1, genesis 1:1-5</small></p>
        <input bind:value={searchQuery}
                on:keypress={keypress}
        />
    </label>
    <button on:click={doSearch}>Go</button>
</section>