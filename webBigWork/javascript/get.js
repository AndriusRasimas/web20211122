let headlines = getHeadline();
let iFramees = getIFrames();
let texts = getText();

for (let index = 0; index < headlines.length; index++){
    const headline = headlines[index];
    const iFramee = iFramees[index];
    const text = texts[index];
    let template = '<h2>{{headline}}</h2> <div class="flex-container"> <div class="flex-child magenta"> <div class="iframe"> <iframe align="right" width="560" height="315" src="{{iframee}}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div></div><div class="flex-child green"> <div class="test">{{text}}</div></div></div>';
    template = template.replace('{{headline}}', headline);
    template = template.replace('{{iframee}}', iFramee);
    template = template.replace('{{text}}', text);

    document.querySelector('.flex').innerHTML += template;

}