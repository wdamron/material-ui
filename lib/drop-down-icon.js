/**
 * @jsx React.DOM
 */

var React = require('Bodhi5/react'),
  Classable = require('./mixins/classable'),
  ClickAwayable = require('./mixins/click-awayable'),
  KeyLine = require('./utils/key-line'),
  Paper = require('./paper'),
  Icon = require('./icon'),
  Menu = require('./menu'),
  MenuItem = require('./menu-item');

var DropDownIcon = React.createClass({

  mixins: [Classable, ClickAwayable],

  propTypes: {
    onChange: React.PropTypes.func,
    menuItems: React.PropTypes.array.isRequired
  },

  getInitialState: function() {
    return {
      // Required by ClickAwayable:
      _clickAwayHandler: function(){},

      open: false
    }
  },

  componentClickAway: function() {
    this.setState({ open: false });
  },

  componentDidMount: function() {
    var el = this.getDOMNode();
    var menuItems = this.refs.menuItems.getDOMNode();

    el.style.width = menuItems.style.width;
  },

  render: function() {
    var classes = this.getClasses('mui-drop-down-icon', {
      'mui-open': this.state.open
    });

    return (
      <div className={classes}>
          <div className="mui-menu-control" onClick={this._onControlClick}>
              <Icon icon={this.props.icon} />
          </div>
          <Menu ref="menuItems" menuItems={this.props.menuItems} hideable={true} visible={this.state.open} onItemClick={this._onMenuItemClick} />
        </div>
    );
  },

  _onControlClick: function(e) {
    this.setState({ open: !this.state.open });
  },

  _onMenuItemClick: function(e, key, payload) {
    if (this.props.onChange) this.props.onChange(e, key, payload);
    this.setState({ open: false });
  }

});

module.exports = DropDownIcon;
