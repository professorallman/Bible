<script>

    let mode = 'Dark';
    function toggle(){
        window.document.body.classList.toggle('dark-mode');
        mode = (mode == 'Light')? 'Dark' : 'Light'
    }
</script>
<style>
    button{
        background-color:var(--primary);
    }
</style>
<button on:click={toggle}>
    {mode}
</button>