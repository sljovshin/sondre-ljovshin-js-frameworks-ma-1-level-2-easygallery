$.easyGallery = function(options) {
    let container = document.getElementById('easy-gallery-container');
    let images = [...container.children];

    container.classList.add('.easy-gallery-container');

    $.setContainer(container, images)
    $.imageWidth(images)
    $.setOptions(options, container, images)
}


$.setContainer = function(cont, imgs)
{
    cont.style.display = 'grid';
    cont.style.width = '100%';
    cont.style.gridTemplateColumns = `repeat(auto-fit, minmax(19rem, 1fr))`;
}

$.imageWidth = function(imgs) 
{
    imgs.forEach(img => {
        img.style.width = `100%`;
    });
}
$.setOptions = function(opt, cont, imgs)
{
    if(opt.image_width) 
    {
        if(opt.image_width.min) 
        {
            cont.style.gridTemplateColumns = `repeat(auto-fit, minmax(${opt.image_width.min}%, 1fr))`;
        }
        if(opt.image_width.max)
        {
            cont.style.gridTemplateColumns = `repeat(auto-fit, minmax(19rem, ${opt.image_width.max}%))`;
        }
    }
    if(opt.gap)
    {
        if(opt.gap.size) 
        {
            cont.style.gap = `${opt.gap.size}px`
        }
        if(opt.gap.shadow)
        {
            imgs.forEach(img => {
                img.style.boxShadow = '0px 2px 33px -5px rgba(0,0,0,0.49)';
            });
        }
    }
}