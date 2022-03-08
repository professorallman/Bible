<script>
    import { afterNavigate} from '$app/navigation';
    import { slide } from 'svelte/transition';
    import Search from '$lib/Search.svelte';
import QuickLookup from '$lib/QuickLookup.svelte';
    let show = false;
    afterNavigate(()=>show=false);
</script>
<style>
    :root{
        margin:0;
        padding:0;
        font-family: sans-serif;
    }
    :global(body){
        margin:0;
        padding:0;
        --primary:black;
        --secondary:white;
        --highlight:#565678;
        background-color: var(--secondary);
        color: var(--primary);
        transition: background-color 0.3s;
    }
    :global(body.dark-mode){
        --primary:#b69518;
        --secondary:black;
        --highlight:yellow;
    }
    button.menu{
        font-size: larger;
        width:100%;
        border:none;
        border-style:none;
        border-bottom:solid 1px var(--primary);
        color:var(--primary);
        background-color: var(--secondary);
        margin-bottom:20px;
    }
    button.menu.show{
        border:1px solid var(--primary);
    }
    nav{
        padding:20px;
    }
    nav ul{
        padding:0;
        margin:0;
        list-style: none;
    }
    nav a{
        color:var(--primary);
        font-size: larger;
    }
</style>
{#if show}
    <nav transition:slide>
        <header>
            <h1>The Bible</h1>
            <p>Catholic Public Domain Version (CPDV)</p>
        </header>
        <ul>
            <li>
                <Search/>
            </li>
            <li>
                <QuickLookup/>
            </li>
            <li>
                <a href="/">Home</a>
            </li> 
        </ul>
    </nav>
{/if}
<main>
    <button on:click={()=>show = !show} class="menu" class:show={show}>
        {#if show}
        Close
        {:else}
        Menu
        {/if}
    </button>
    <slot></slot>
</main>