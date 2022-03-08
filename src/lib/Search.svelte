<script>
    import { goto } from '$app/navigation';
    export let translation = 'CPDV';
    let searchQuery = '';
    function doSearch(){
        goto(`/search/${translation}?q=${searchQuery}`);
        searchQuery = '';
    }
    function keypress(e){
        if(e.code !== 'Enter') return;
        doSearch();
    }
    
</script>
<style>
label{
    display:flex;
    flex-direction: column;
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
        <span>Search:</span>
        <input bind:value={searchQuery}

                on:keypress={keypress}
        />
    </label>
    <button on:click={doSearch}>Go</button>
</section>