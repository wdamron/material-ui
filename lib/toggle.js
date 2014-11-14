/**
 * @jsx React.DOM
 */

var React = require('Bodhi5/react'),
    Paper = require('./paper'),
    Classable = require('./mixins/classable'),
    RadioButton = require('./radio-button')

var Toggle = React.createClass({

  propTypes: {
    onToggle: React.PropTypes.func
  },

  mixins: [Classable],

  getInitialState: function() {
    return {
      toggled: false
    }
  },

  render: function() {
    var classes = this.getClasses('mui-toggle', {
      'mui-toggled': this.state.toggled === true
    })

    return (
      <div className={classes} onClick={this._onClick}>
        <div className="mui-toggle-bar">
        </div>
        <RadioButton ref="radioButton" />
      </div>
    );
  },

  _onClick: function(e) {
    var toggledState = !this.state.toggled;

    this.setState({ toggled: toggledState });
    this.refs.radioButton.toggle();

    if (this.props.onToggle) this.props.onToggle(e, toggledState);
  }

});

module.exports = Toggle;
