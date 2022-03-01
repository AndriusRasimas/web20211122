let headlines = getHeadline();
let iFramees = getIFrames();
let texts = getText();

for (let index = 0; index < headlines.length; index++){
    const headline = headlines[index];
    const iFramee = iFramees[index];
    const text = texts[index];
    const classh = headlines[index];
    let template = '<h2 id="{{classh}}">{{headline}}</h2> <div class="flex-container"> <div class="flex-child magenta"> <div class="iframe"> <iframe align="right" width="560" height="315" src="{{iframee}}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div></div><div class="flex-child green"> <div class="test">{{text}}</div></div></div>';
    template = template.replace('{{headline}}', headline);
    template = template.replace('{{iframee}}', iFramee);
    template = template.replace('{{text}}', text);
    template = template.replace('{{classh}}', classh);

    document.querySelector('.flex').innerHTML += template;
}

for (let index = 0; index < headlines.length; index++){
    const idA = headlines[index];
    const headlineA = headlines[index];
    let template = '<div class="statNavBarTxt"><p><a href="#{{idA}}">{{headline}}</a></p></div>';
    template = template.replace('{{idA}}', idA);
    template = template.replace('{{headline}}', headlineA);

    document.querySelector('.statNavBar').innerHTML += template;
}