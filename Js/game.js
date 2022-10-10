
    const inuptTxt=document.querySelector('#input');
    const checkBtn=document.querySelector('#search');
    const divEl=document.querySelector('#mainPara');
    const messagePara=document.querySelector('#message');
    const resetBtn=document.querySelector('#reset');
    const para=document.querySelector("#para")
    const sound=new Audio("/swish.m4a")
    const sound2=new Audio("/hbd.mp3")
    const sound3=new Audio("/warm.mp3")
    resetBtn.addEventListener('click',function(){
        inuptTxt.value='';
        para.textContent='Enter a number from 1 to 9 and press the check button, then press reset button to enter another number to see next result..';
        divEl.textContent='';       
    })
    checkBtn.addEventListener('click' ,function(){
        let value=inuptTxt.value;
        if(value=='1'){
            sound2.pause();
            sound3.play();
            divEl.textContent="First of all happy birthday, hope your special day brings you all that your heart desires!! ";
            para.textContent="Good Job, You are kind of smart!!";
            
        }
        else if(value=='2'){
            sound2.pause();
            if(sound3.play() == false){
                sound3.play();
            }
            divEl.textContent="You are absolutely irreplaceable.";
            para.textContent="Good Job again!!👌👌"
        }
        else if(value=='3'){
            sound2.pause();
            if(sound3.play() == false){
                sound3.play();
            }
            divEl.textContent="You are gorgeous ."
            para.textContent="Good Job again!!👌👌"
        }
        else if(value=='4'){
            sound2.pause();
            if(sound3.play() == false){
                sound3.play();
            }
            divEl.textContent="May you be gifted with life's greatest joys and never-ending bliss.";
            para.textContent="Good Job again!!👌👌";
        }
        else if(value=='5'){
            sound2.pause();
            if(sound3.play() == false){
                sound3.play();
            }
            divEl.textContent="You are the most precious gift, I have ever been gifted with ." ;
       para.textContent="Good Job again!!👌👌";
    }
    else if(value=='6'){
        sound2.pause();
        if(sound3.play() == false){
            sound3.play();
        }
        divEl.textContent="You are such a positive and fresh vive to me .";
        para.textContent="Good Job again!!👌👌"
    }
    else if(value=='7'){
        sound2.pause();
        if(sound3.play() == false){
            sound3.play();
        }
        divEl.textContent="Oh!! By the way you have a mesmerizing voice and great taste in song, obviously how can I forget about your songs🤩. ";
        para.textContent="Good Job again!!👌👌";
    }
    else if(value=='8'){
        sound2.pause();
        if(sound3.play() == false){
            sound3.play();
        }
        divEl.textContent="You are such a mood freshner for me , like whenever I somehow feel like exhausted or something like that, and at that moment if I get to talk to you , it's like a sweet , pleasant raindrops in drastic summer days for me.";
        para.textContent="Good Job again!!👌👌";
    }
    else if(value=='9'){
        divEl.textContent=" Happy Birthday To You, Happy Birthday To You, Happy Birthday Tooo Mishti ,Happy Birthday To You. Now probably you searched for 9 and came to almost end of my tiny surprise, look I just have expressed as much poetic lines as I knew, if you like this tiny effort , not only this but my each and every effort will be worth making, So Rajeswari Das I hope you liked it.";
        para.textContent="Hey happy birthday dear.";
        sound3.pause();
        sound2.play();
    }
    else if(value==''){
        divEl.textContent="Atleast put something in the textbox.";
        sound.play();
    }
    else{
        divEl.textContent="I didn't arrange anything for "+value+ " Please search something from 1 to 9.";
        sound.play();
    }
});

