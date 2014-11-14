/**
 * @jsx React.DOM
 */

var React = require('Bodhi5/react'),
  getOffset = require('Bodhi5/polly').offset,
  ClassList = require('bh5/classes'),
  css = require('bh5/css'),
  events = require('bh5/events'),
  vendorProps = require('bh5/vendor-property'),
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
    var ripple = this.getDOMNode();
    var offset = getOffset(ripple.parentNode);
    var x = e.pageX - offset.left;
    var y = e.pageY - offset.top;

    css(ripple, {
      transition: 'none',
      top: y,
      left: x
    });

    var classList = ClassList(ripple);

    classList.add('mui-show');

    function onAnimationEnd(e) {
      classList.remove('mui-show');
      if (callback) {
        callback();
      }
      events.unbind(ripple, vendorProps.animationend, onAnimationEnd);
    }

    events.bind(ripple, vendorProps.animationend, onAnimationEnd);
  }

});

module.exports = Ripple;
