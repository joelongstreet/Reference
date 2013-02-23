// ----> Build Slides and Calculate Function
var slides = [
];

for(var i=0; i<slides.length; i++){
    $.container.addView(slides[i].getView());
}
// ---->


// ----> Listen for Global Events
    // -> Bubbles!
Ti.Gesture.addEventListener('shake', function(){
    for(var i = 0; i < 30; i++){
        bubble = Alloy.createController('Bubble');
        bubble.append_to_view($.index);
    }
});
    // -> Show and Hide the Help Screen
Ti.App.addEventListener('help', function(e) {
    if(e.value == 'close'){
        tooltip.close($.index, $.wrapper);
    } else {
        tooltip.open($.index, $.wrapper);
    }
});
// ---->


// ----> Some Eye Candy
var bubble_int = setInterval(function(){
    bubble = Alloy.createController('Bubble');
    bubble.append_to_view($.index);
}, 350);
// ---->


// ----> Fade Out StartUp
var fade_startup = Ti.UI.createAnimation({opacity : 0, duration : 500});
$.startup.animate(fade_startup)
fade_startup.addEventListener('complete', function(){
    $.index.remove($.startup);
});
// ---->


// ----> Make the Help Screens
var tooltip = Alloy.createController('Tooltip');
$.index.addEventListener('longpress', function(){
    Ti.App.fireEvent('help', { value : 'open' });
});
// ---->


// ----> Show Help if your first time opening app
var opened = Ti.App.Properties.getString('app_opened');
if(!opened){
    Ti.App.fireEvent('help', { value : 'open' });
    Ti.App.Properties.setString('app_opened', true);
}
// ---->


// ----> Start the app already
$.index.open();
// ---->