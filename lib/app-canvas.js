/**
 * @jsx React.DOM
 */

var React = require('Bodhi5/react'),
  Classable = require('./mixins/classable');

var AppCanvas = React.createClass({

  mixins: [Classable],

  propTypes: {
    predefinedLayout: React.PropTypes.number
  },

  render: function() {
    var classes = this.getClasses({
      'mui-app-canvas': true,
      'mui-predefined-layout-1': this.props.predefinedLayout === 1
    });

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }

});

module.exports = AppCanvas;
