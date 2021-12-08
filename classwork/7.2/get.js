let images = getImages();
let texts = getText();
let headlines = getHeadLine();

    for (let index = 0; index < images.length; index++) {
        const image = images[index];
        const text = texts[index];
        const headline = headlines[index];
        let template = '<h2>{{headline}}</h2><div class="flex-container"> <div class="flex-child magenta"> <div class="iframe"> <iframe width="560" height="315" src="{{photo}}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div></div><div class="flex-child green"> <div class="text">{{text}}</div></div></div>';
        template = template.replace('{{photo}}', image);
        template = template.replace('{{text}}', text);
        template = template.replace('{{headline}}', headline);
        
    
        document.querySelector('.flex').innerHTML += template;
    }

