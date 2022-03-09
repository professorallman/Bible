<script>
    import { goto } from '$app/navigation';
    export let translation = 'CPDV';
    let searchQuery = '';
    function doSearch(e){
        e.preventDefault();
        goto(`/Bible/search/${translation}?q=${searchQuery}`);
        searchQuery = '';
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
<form on:submit={doSearch}>
    <label aria-label="Search">
        <span>Search:</span>
        <input bind:value={searchQuery}/>
    </label>
    <button>Go</button>
</form>
</section>