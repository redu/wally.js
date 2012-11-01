$.fn.compactResponses = function(opts){
  return this.each(function(opts){
    var options = opts;
    var $this = $(this);

    var maxResponses = options.maxResponses|| 3;
    var $responses = $this.find('.responses');
    var qttResponses = $responses.find('> li').length;
    var qttHiddenResponses = qttResponses - maxResponses;

    $responses.refreshQttResponses({ qttResponses : qttResponses});
    if(qttResponses > maxResponses){
      $responses.find('> li:lt('+ qttHiddenResponses + ')').hide();
      $responses.find('> li:visible:first .border-post').hide();
    } else if (qttResponses === 0) {
      $responses.hideCompactedElements();
      $responses.hide();
    } else {
      $responses.hideCompactedElements();
    }

    $responses.find('.all-responses a').click(function(e){
      e.preventDefault();
      $responses.find('li:hidden').showNewAnswer();
    });
  });
};

$.fn.hideCompactedElements = function(){
  return this.each(function(){
    var $this = $(this);
    $this.find('.last-responses').hide();
    $this.find('.all-responses').hide();
    $this.find('> li:first .border-post').hide();
  });
};

$.fn.showNewAnswer = function(){
  return this.each(function(){
    var $this = $(this);
    // In case .responses is hidden
    $this.parent().slideDown(150, 'swing');

    $this.slideDown(150, 'swing');
    $this.parent().find('.border-post').show();
    $this.parent().hideCompactedElements();
  });
};

$.fn.refreshQttResponses = function(opts){
  return this.each(function(){
    var options = {};
    var $this = $(this);
    $.extend(options, opts);

    var qttResponses = options.qttResponses || $this.find('> li').length;
    $this.find('.all-responses .qtt').html(qttResponses);
  });
};

$.fn.hideLastHr = function(){
  var $this = $(this);
  $this.parent().find('.status > hr').show();
  $this.parent().find(".status:visible:last > hr").hide();
};
