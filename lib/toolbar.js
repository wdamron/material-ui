/** @jsx React.DOM */

var Classable = require('./mixins/classable');
var Paper = require('./paper');
var React = require('Bodhi5/react');
var ToolbarGroup = require('./toolbar-group');

var Toolbar = React.createClass({

  propTypes: {
    groups: React.PropTypes.array.isRequired
  },

  mixins: [Classable],

  getInitialState: function() {
    return {
    }
  },

  getDefaultProps: function() {
    return {
    };
  },

  render: function() {
    var classes = this.getClasses('mui-toolbar', {
    })

    return (
      <div className={classes}>
        {this._getChildren()}
      </div>
    );
  },

  _getChildren: function() {
    var children = [],
        group;

    for (var i=0; i < this.props.groups.length; i++) {
      group = this.props.groups[i];

      children.push(group);
    }

    return children;
  },

});

module.exports = Toolbar;
