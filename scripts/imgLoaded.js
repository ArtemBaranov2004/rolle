console.log('Hello from index JS');

function imgLoaded(img){
    var $img = $(img);
 
    $img.parent().addClass('loaded');
};