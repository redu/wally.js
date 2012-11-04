if ('undefined' === typeof Redu){
  Redu = {}
}

(function(Redu){
  /**
  * Communicates with the provider to resize the iframe as
  * needed by the iframed application.
  */
  Redu.Resizer = function(opts){
    var resizer = this;
    var options = {
      containerSelector: 'body > div:first'
    }
    $.extend(options, opts);

    this.containerSelector = options.containerSelector;
    this.socket = this.initSocket();
  };

  Redu.Resizer.prototype.initSocket = function(){
    var resizer = this;
    var socket = new easyXDM.Socket({
      onReady: function(){
        $(resizer.containerSelector).bind('resize', function(e){
          var $this = $(this);

          var json = resizer.prepareMessage(e.type, {
            height: $this.height(),
            width: $this.width()
          })
          resizer.socket.postMessage(json);
        })
      }
    });

    return socket;
  };

  Redu.Resizer.prototype.prepareMessage = function(e, payload){
    var message = {
      'event': e,
      'payload': payload
    }

    return JSON.stringify(message);
  };
})(Redu);
