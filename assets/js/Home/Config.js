window.addEventListener('load',function (){
    console.log('load hoiche')

    const body = document.body;
    const head = document.head;

    function facadesLoad(){
        
    }

    window.addEventListener('scroll',function(){
        if(window.scrollY > 1000){
            if(!window.rh){
                window.rh = true;
                facadesLoad();
            }
        }
    })


    setTimeout(() => {

        // Google Font Load Here
        const google_font = document.createElement('link')
        google_font.href = 'https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,700;1,400&family=Noto+Sans+JP:wght@400;500;700;900&display=swap'
        google_font.rel = 'stylesheet';
        head.appendChild(google_font)
    },7000)
})