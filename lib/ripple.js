/**
 * @jsx React.DOM
 */

var $ = require('jquery'),
  React = require('Bodhi5/react'),
  CssEvent = require('./utils/css-event'),
  Classable = require('./mixins/classable');

var Ripple = React.createClass({

  mixins: [Classable],

  render: function() {
    var classes = this.getClasses('mui-ripple');

    return (
      <div className={classes} />
    );
  },

  animate: function(e, callback) {
    var $ripple = $(this.getDOMNode()),
      $offset = $ripple.parent().offset(),
      x = e.pageX - $offset.left,
      y = e.pageY - $offset.top;

    $ripple.css({
      transition: 'none',
      top: y,
      left: x
    });

    $ripple.addClass('mui-show');

    CssEvent.onAnimationEnd($ripple, function() {
      $ripple.removeClass('mui-show');
      if (callback) callback();
    });
  }

});

module.exports = Ripple;
