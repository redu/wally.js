(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['application'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "Wally App\n";
  foundHelper = helpers.outlet;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.outlet; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\n";
  return buffer;});
templates['templates.js'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "(function() {\n  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};\ntemplates['application'] = template(function (Handlebars,depth0,helpers,partials,data) {\n  helpers = helpers || Handlebars.helpers;\n  \n\n\n  return \"Wally App\\n\";});\ntemplates['templates.js'] = template(function (Handlebars,depth0,helpers,partials,data) {\n  helpers = helpers || Handlebars.helpers;\n  \n\n\n  return \"(function() {\\n  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};\\ntemplates['application'] = template(function (Handlebars,depth0,helpers,partials,data) {\\n  helpers = helpers || Handlebars.helpers;\\n  var buffer = \\\"\\\", stack1, foundHelper, functionType=\\\"function\\\", escapeExpression=this.escapeExpression;\\n\\n\\n  buffer += \\\"Wally App\\\\n\\\";\\n  foundHelper = helpers.outlet;\\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }\\n  else { stack1 = depth0.outlet; stack1 = typeof stack1 === functionType ? stack1() : stack1; }\\n  buffer += escapeExpression(stack1) + \\\"\\\\n\\\";\\n  return buffer;});\\ntemplates['templates.js'] = template(function (Handlebars,depth0,helpers,partials,data) {\\n  helpers = helpers || Handlebars.helpers;\\n  \\n\\n\\n  return \\\"(function() {\\\\n  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};\\\\ntemplates['application'] = template(function (Handlebars,depth0,helpers,partials,data) {\\\\n  helpers = helpers || Handlebars.helpers;\\\\n  var buffer = \\\\\\\"\\\\\\\", stack1, foundHelper, functionType=\\\\\\\"function\\\\\\\", escapeExpression=this.escapeExpression;\\\\n\\\\n\\\\n  buffer += \\\\\\\"Wally App\\\\\\\\n\\\\\\\";\\\\n  foundHelper = helpers.outlet;\\\\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }\\\\n  else { stack1 = depth0.outlet; stack1 = typeof stack1 === functionType ? stack1() : stack1; }\\\\n  buffer += escapeExpression(stack1) + \\\\\\\"\\\\\\\\n\\\\\\\\n\\\\\\\";\\\\n  return buffer;});\\\\ntemplates['templates.js'] = template(function (Handlebars,depth0,helpers,partials,data) {\\\\n  helpers = helpers || Handlebars.helpers;\\\\n  \\\\n\\\\n\\\\n  return \\\\\\\"(function() {\\\\\\\\n  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};\\\\\\\\ntemplates['application'] = template(function (Handlebars,depth0,helpers,partials,data) {\\\\\\\\n  helpers = helpers || Handlebars.helpers;\\\\\\\\n  var buffer = \\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\", stack1, foundHelper, functionType=\\\\\\\\\\\\\\\"function\\\\\\\\\\\\\\\", escapeExpression=this.escapeExpression;\\\\\\\\n\\\\\\\\n\\\\\\\\n  buffer += \\\\\\\\\\\\\\\"Wally App\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\";\\\\\\\\n  foundHelper = helpers.outlet;\\\\\\\\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }\\\\\\\\n  else { stack1 = depth0.outlet; stack1 = typeof stack1 === functionType ? stack1() : stack1; }\\\\\\\\n  buffer += escapeExpression(stack1) + \\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\";\\\\\\\\n  return buffer;});\\\\\\\\ntemplates['templates.js'] = template(function (Handlebars,depth0,helpers,partials,data) {\\\\\\\\n  helpers = helpers || Handlebars.helpers;\\\\\\\\n  \\\\\\\\n\\\\\\\\n\\\\\\\\n  return \\\\\\\\\\\\\\\"(function() {\\\\\\\\\\\\\\\\n  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};\\\\\\\\\\\\\\\\ntemplates['application'] = template(function (Handlebars,depth0,helpers,partials,data) {\\\\\\\\\\\\\\\\n  helpers = helpers || Handlebars.helpers;\\\\\\\\\\\\\\\\n  var buffer = \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\", stack1, foundHelper, functionType=\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"function\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\", escapeExpression=this.escapeExpression;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n  buffer += \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Wally App\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";\\\\\\\\\\\\\\\\n  foundHelper = helpers.outlet;\\\\\\\\\\\\\\\\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }\\\\\\\\\\\\\\\\n  else { stack1 = depth0.outlet; stack1 = typeof stack1 === functionType ? stack1() : stack1; }\\\\\\\\\\\\\\\\n  buffer += escapeExpression(stack1) + \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";\\\\\\\\\\\\\\\\n  return buffer;});\\\\\\\\\\\\\\\\ntemplates['templates.js'] = template(function (Handlebars,depth0,helpers,partials,data) {\\\\\\\\\\\\\\\\n  helpers = helpers || Handlebars.helpers;\\\\\\\\\\\\\\\\n  \\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n  return \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"(function() {\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ntemplates['application'] = template(function (Handlebars,depth0,helpers,partials,data) {\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  helpers = helpers || Handlebars.helpers;\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  var buffer = \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\", stack1, foundHelper, functionType=\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"function\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\", escapeExpression=this.escapeExpression;\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  buffer += \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"<script type=\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"text/x-handlebars\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\" data-template-name=\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"application\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\">\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n    Wally App\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  foundHelper = helpers.outlet;\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  else { stack1 = depth0.outlet; stack1 = typeof stack1 === functionType ? stack1() : stack1; }\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  buffer += escapeExpression(stack1) + \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n</script>\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  return buffer;});\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ntemplates['templates.js'] = template(function (Handlebars,depth0,helpers,partials,data) {\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  helpers = helpers || Handlebars.helpers;\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  return \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"(function() {\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ntemplates['wall'] = template(function (Handlebars,depth0,helpers,partials,data) {\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  helpers = helpers || Handlebars.helpers;\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  var buffer = \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\", stack1, functionType=\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"function\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\", escapeExpression=this.escapeExpression;\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  buffer += \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"<script type=\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"text/x-handlebars\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\" data-template-name=\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"wall\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\">\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n    My wall<br/>\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  stack1 = depth0.content;\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  stack1 = typeof stack1 === functionType ? stack1() : stack1;\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  buffer += escapeExpression(stack1) + \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n</script>\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  return buffer;});\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n})();\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";});\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ntemplates['wall'] = template(function (Handlebars,depth0,helpers,partials,data) {\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  helpers = helpers || Handlebars.helpers;\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  var buffer = \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\", stack1, functionType=\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"function\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\", escapeExpression=this.escapeExpression;\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  buffer += \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"<script type=\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"text/x-handlebars\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\" data-template-name=\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"wall\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\">\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n    My wall<br/>\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  stack1 = depth0.content;\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  stack1 = typeof stack1 === functionType ? stack1() : stack1;\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  buffer += escapeExpression(stack1) + \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n</script>\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n  return buffer;});\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n})();\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";});\\\\\\\\\\\\\\\\ntemplates['wall'] = template(function (Handlebars,depth0,helpers,partials,data) {\\\\\\\\\\\\\\\\n  helpers = helpers || Handlebars.helpers;\\\\\\\\\\\\\\\\n  var buffer = \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\", stack1, functionType=\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"function\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\", escapeExpression=this.escapeExpression;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n  buffer += \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"My wall<br/>\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";\\\\\\\\\\\\\\\\n  stack1 = depth0.content;\\\\\\\\\\\\\\\\n  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;\\\\\\\\\\\\\\\\n  stack1 = typeof stack1 === functionType ? stack1() : stack1;\\\\\\\\\\\\\\\\n  buffer += escapeExpression(stack1) + \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";\\\\\\\\\\\\\\\\n  return buffer;});\\\\\\\\\\\\\\\\n})();\\\\\\\\\\\\\\\";});\\\\\\\\ntemplates['wall'] = template(function (Handlebars,depth0,helpers,partials,data) {\\\\\\\\n  helpers = helpers || Handlebars.helpers;\\\\\\\\n  var buffer = \\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\", stack1, functionType=\\\\\\\\\\\\\\\"function\\\\\\\\\\\\\\\", escapeExpression=this.escapeExpression;\\\\\\\\n\\\\\\\\n\\\\\\\\n  buffer += \\\\\\\\\\\\\\\"My wall<br/>\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\";\\\\\\\\n  stack1 = depth0.content;\\\\\\\\n  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;\\\\\\\\n  stack1 = typeof stack1 === functionType ? stack1() : stack1;\\\\\\\\n  buffer += escapeExpression(stack1) + \\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\";\\\\\\\\n  return buffer;});\\\\\\\\n})();\\\\\\\";});\\\\ntemplates['wall'] = template(function (Handlebars,depth0,helpers,partials,data) {\\\\n  helpers = helpers || Handlebars.helpers;\\\\n  var buffer = \\\\\\\"\\\\\\\", stack1, functionType=\\\\\\\"function\\\\\\\", escapeExpression=this.escapeExpression;\\\\n\\\\n\\\\n  buffer += \\\\\\\"My wall<br/>\\\\\\\\n\\\\\\\";\\\\n  stack1 = depth0.content;\\\\n  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;\\\\n  stack1 = typeof stack1 === functionType ? stack1() : stack1;\\\\n  buffer += escapeExpression(stack1) + \\\\\\\"\\\\\\\\n\\\\\\\\n\\\\\\\";\\\\n  return buffer;});\\\\n})();\\\";});\\ntemplates['wall'] = template(function (Handlebars,depth0,helpers,partials,data) {\\n  helpers = helpers || Handlebars.helpers;\\n  var buffer = \\\"\\\", stack1, functionType=\\\"function\\\", escapeExpression=this.escapeExpression;\\n\\n\\n  buffer += \\\"My wall\\\\n\\\";\\n  stack1 = depth0.content;\\n  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;\\n  stack1 = typeof stack1 === functionType ? stack1() : stack1;\\n  buffer += escapeExpression(stack1) + \\\"\\\\n\\\";\\n  return buffer;});\\n})();\";});\ntemplates['wall'] = template(function (Handlebars,depth0,helpers,partials,data) {\n  helpers = helpers || Handlebars.helpers;\n  \n\n\n  return \"My wall\\n\";});\n})();";});
templates['wall'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "My wall\n";
  stack1 = depth0.content;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\n";
  return buffer;});
})();