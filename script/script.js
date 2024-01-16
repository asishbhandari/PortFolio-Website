
// typwritter script
function sleep(delay){
    return new Promise((resolve) => setTimeout(resolve, delay))
}

const el= document.getElementById("typewritter")

const phrases= ["JavaScript", "React", "NodeJS", "Full-Stack Web"];
let index=0, sleepTime=100;
const writeLoop= async()=>{
    while(true){
        let currentPhrase= phrases[index];
        for(let i=0; i<currentPhrase.length; i++){
            el.innerText = currentPhrase.slice(0,i+1)
            await sleep(sleepTime)
            // console.log(currentPhrase)
        }
        await sleep(sleepTime*10);
                
        for(let i=currentPhrase.length; i>0; i--){
            el.innerText = currentPhrase.slice(0,i-1)
            await sleep(sleepTime)
        }
        await sleep(sleepTime*5);
            
        if(phrases.length-1 === index){
            index=0;
        }
        else index++
    }
}

writeLoop();