
<script context="module">
    import { bibleInstance } from '$lib/bible';
    export async function load({fetch,params}){
        const bible = await bibleInstance(fetch,{translation:params.translation});
        if(!bible.translation) return {fallthrough:true};
        return {
            props:{
                translation:bible.translation,
                bible:bible
            }
        };

    }
</script>
<script>
    import { browser } from '$app/env';
    import VerseList from '$lib/VerseList.svelte';
    export let translation;
    export let bible;
    let verses = [];
    let doShuffle = false;
    function roll(){
        doShuffle = true;
        verses = bible.random(10);
    }
    let mobile =  false;
    let lastReading = 0;
    let shakeCount = 0;
    let shaking = false;
    if(browser && 'LinearAccelerationSensor' in window
            && ('ontouchstart' in document.documentElement 
            && /Mobi|Android/i.test(navigator.userAgent))){
        mobile = true;
        const accelerometer = new LinearAccelerationSensor();
        accelerometer.addEventListener('reading',(e)=>{
            const {x,y,z} = accelerometer;
            if(!lastReading) lastReading = accelerometer.timestamp;
            if(accelerometer.timestamp - lastReading < 100) return;
            lastReading = accelerometer.timestamp;

            if(Math.abs(x) > 1 || Math.abs(y) > 1 || Math.abs(z) > 1){
                if(shakeCount < 2){
                    shakeCount = shakeCount + 1;
                }else if(!shaking){
                    navigator.vibrate(900);
                    shaking = true;
                    roll();
                }
            }else{
                shakeCount = 0;
                shaking = false;
                navigator.vibrate(0);
            }
        });
        accelerometer.start();
    }
</script>
<style>
    button{
        background-color:var(--secondary);
        border:solid 1px var(--primary);
        padding:10px 20px;
    }
</style>
<button on:click={roll}>Random Verse</button>
{#if mobile}
or
<p>Shake your phone for a new verse</p>
{/if}
<VerseList {translation} {verses} bind:doShuffle={doShuffle} />