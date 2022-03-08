<script>
    export let href;
    export let text;
    export let smallList = false;
</script>
<style>
     a,a:visited{
        text-decoration: none;
        color:var(--primary);
        background-color:var(--secondary);
        display: flex;
        align-items: center;
        justify-content: center;
        border:solid 1px var(--primary);
        border-radius: 5px;
        font-size:larger;
        margin:20px;
        min-width:75px;
        min-height:75px;
    }
    a.smallList{
        width:100%;
    }
    a:hover{
        color:var(--secondary);
        background-color: var(--primary);
        border-color: var(--secondary);
        
    }
    @media screen and ( min-width:500px ){
        a,a.smallList{
            width:150px;
        }
        
    }
</style>
<a {href} class:smallList={smallList}>{text}</a>   
