var app = app || {};

app.toolBar = (function(){

    var counterText = 0;

    function ToolBar() {}

    ToolBar.prototype.render = function(){
        $("#menu").append("<button id='button1' class='mainButtons' name='realButtons'>Add Text</button><button id='button2' class='mainButtons'>Add Link</button>");
        $('.mainButtons').draggable({cancel:false});
    };

    ToolBar.prototype.init = function(){
        this.render();
        var _this = this;
        $('#button1').click(function(){
            _this.createDiv(false, '#001a13', 'someText');
        });
        $("#button2").click(function(){
            _this.createDiv(true, '#cccc33', 'someLink');
        });
    };


    ToolBar.prototype.createDiv = function(isItLink, color, text){
        var newInstance1 = app.button.load(color, text, counterText);
        console.log(counterText);
        newInstance1.render(isItLink);
        var el;
        if(isItLink){
            el = '#l_' + counterText;
        }
        else{
            el = '#t_' + counterText;
        }
        $(el).draggable();
            $(el).ColorPicker({
                color: newInstance1.getBackgroundColor(),
                eventName: "dblclick",
                onShow: function(colpkr) {
                    $(colpkr).fadeIn(300);
                    return false;
                },
                onHide: function(colpkr) {
                    $(colpkr).fadeOut(300);
                    return false;
                },
                onChange: function(hsb, hex, rgb) {
                    $(el).css('background-color', '#' + hex);
                    newInstance1.setBackgroundColor(hex);
                }
            });
        counterText++;
    };

   return {
       load: function(){
           return new ToolBar();
       }
   }
}());