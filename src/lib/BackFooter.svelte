<style>
    footer{
        position: fixed;
        width:100%;
        bottom:0;
        left: 0;
    }
    footer button{
        width:100%;
        padding:30px;
        font-size: larger;
        background-color: var(--secondary);
        color:var(--primary);
        border:solid 1px var(--primary);
    }
    footer button:hover{
        color:var(--secondary);
        background-color: var(--primary);
        border-color: var(--primary);
    }
</style>

<footer>
    <button on:click={()=>history.back()}>Cancel</button>
</footer>