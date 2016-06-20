var app = app || {};

app.button = (function(){

    function Button(backgroundColor, text, id){
        this._backgroundColor = backgroundColor;
        this._text = text;
        this._id = id;
    }

    Button.prototype.getId = function(){
        return this._id;
    };

    Button.prototype.setId = function(id){
        this._id = id;
    };

    Button.prototype.getBackgroundColor = function(){
        return this._backgroundColor;
    };

    Button.prototype.setBackgroundColor = function(backgroundColor){
        this._backgroundColor = backgroundColor;
    };

    Button.prototype.render = function(isItLink){
        if(isItLink){
            $("#container").append("<div id='l_" + this._id + "' class='button' style='background-color:" + this.getBackgroundColor() +"'><span><a href='someLink.com'>" + this.getText() + "</a></span></div>");
        }
        else{
            $("#container").append("<div id='t_" + this._id + "' class='button' style='background-color:" + this.getBackgroundColor() +"'><span>" + this.getText() + "</span></div>");
        }
    };

    Button.prototype.getText = function(){
        return this._text;
    };

    Button.prototype.setText = function(text){
        this._text = text;
    };

    return {
        load: function(backgroundColor, text, id){
            return new Button(backgroundColor, text, id);
        }
    }
})();