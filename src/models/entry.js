(function(Wally){
  Wally.Entry = DS.Model.extend({
    author: DS.belongsTo('Redu.Wally.Author', { embedded: true }), //hasOne
    content: DS.attr('object'),
    links: DS.attr('object'), // array
    rule: DS.attr('object'),
    created_at: DS.attr('date'),

    isValid: function(){
      var isValid = true;
      var content = this.get('content');
      if(content == null || content.text == null || content.text == ''){
        isValid = false;
        this.set('errors', 'Por favor, digite o texto que deseja postar.')
      }

      return isValid;
    },

  });
})(Redu.Wally);
