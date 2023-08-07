function hidebtn() {
    document.getElementById('bulbi').style.display = 'none'
    document.getElementById('salameche').style.display = 'none'
    document.getElementById('carapuce').style.display = 'none'
}

function checkerStater(e) {
    if (localStorage.getItem('pokemon')) {
        const starter = localStorage.getItem('pokemon')
        if (starter === "bulbi") {
            document.getElementById('body').classList.add('start_Bulbi')
        } else if(starter === "salameche") {
            document.getElementById('body').classList.add('start_Salameche')
        }else{
            document.getElementById('body').classList.add('start_Carapuce')
        }
    }
}

window.addEventListener('load', (e) => {
    checkerStater();
    if (document.getElementById('bulbi') && document.getElementById('salameche') && document.getElementById('carapuce')) {
        hidebtn()
    }
    
    const imgList = document.querySelectorAll('.pkb_size');
    imgList.forEach((img) => {
        img.addEventListener('click', (e) => {
            for (let i = 0; i < imgList.length; i++) {
                imgList[i].classList.remove('pkb_anim')
                
            }
            hidebtn()
            if (e.target.id.slice(3,4) == 0) {
                document.getElementById('bulbi').style.display = 'block'
            } else{
                if (e.target.id.slice(3,4) == 1) {
                    document.getElementById('salameche').style.display = 'block'
                } else{
                    document.getElementById('carapuce').style.display = 'block'
                }
            }
            img.classList.toggle('pkb_anim')
        });
    });

    const starterList = document.querySelectorAll('.pkm_starter');

    starterList.forEach((starter) =>{
        starter.addEventListener('click', (e) =>{
            for (let i = 0; i < imgList.length; i++) {
                imgList[i].classList.remove('pkb_anim')
                
            }
            hidebtn()
            if (e.target.id == 0) {
                document.getElementById('bulbi').style.display = 'block'
            } else{
                if (e.target.id == 1) {
                    document.getElementById('salameche').style.display = 'block'
                } else{
                    document.getElementById('carapuce').style.display = 'block'
                }
            }
            imgList[e.target.id].classList.toggle('pkb_anim')
        })
    })
    if (document.getElementById('bulbi')) {
        document.getElementById('bulbi').addEventListener('click', (e)=>{
            localStorage.clear()
            localStorage.setItem('pokemon', "bulbi");
            setTimeout(() => {
                
            }, 200);
        })
    }
    if (document.getElementById('salameche')) {
        document.getElementById('salameche').addEventListener('click', (e)=>{
            localStorage.clear()
            localStorage.setItem('pokemon', "salameche");
            setTimeout(() => {
                
            }, 200);
        })
        
    }
    if (document.getElementById('carapuce')) {
        document.getElementById('carapuce').addEventListener('click', (e)=>{
            localStorage.clear()
            localStorage.setItem('pokemon', "carapuce");
            setTimeout(() => { 

            }, 200);
        })
    }

    document.getElementById('exit').addEventListener('click', (e)=>{
        localStorage.clear();
    })
});