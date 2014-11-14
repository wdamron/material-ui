/**
 * @jsx React.DOM
 */

var $ = require('jquery'),
  React = require('Bodhi5/react'),
  Classable = require('./mixins/classable'),
  ClickAwayable = require('./mixins/click-awayable'),
  KeyLine = require('./utils/key-line'),
  Paper = require('./paper'),
  Icon = require('./icon'),
  Menu = require('./menu');

var DropDownMenu = React.createClass({

  mixins: [Classable, ClickAwayable],

  propTypes: {
    onChange: React.PropTypes.func,
    menuItems: React.PropTypes.array.isRequired
  },

  getInitialState: function() {
    return {
      open: false,
      selectedIndex: this.props.selectedIndex || 0
    }
  },

  componentClickAway: function() {
    this.setState({ open: false });
  },

  componentDidMount: function() {
    var $el = $(this.getDOMNode()),
      $menuItems = $(this.refs.menuItems.getDOMNode());

    $el.css('width', $menuItems.width());
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.hasOwnProperty('selectedIndex')) this.setState({selectedIndex: nextProps.selectedIndex});
  },

  render: function() {
    var classes = this.getClasses('mui-drop-down-menu', {
      'mui-open': this.state.open
    });

    return (
      <div className={classes}>
        <div className="mui-menu-control" onClick={this._onControlClick}>
          <Paper className="mui-menu-control-bg"zDepth={0} />
          <div className="mui-menu-label">
            {this.props.menuItems[this.state.selectedIndex].text}
          </div>
          <Icon className="mui-menu-drop-down-icon" icon="navigation-arrow-drop-down" />
        </div>
        <Menu ref="menuItems" selectedIndex={this.state.selectedIndex} menuItems={this.props.menuItems} hideable={true} visible={this.state.open} onItemClick={this._onMenuItemClick} />
      </div>
    );
  },

  _onControlClick: function(e) {
    this.setState({ open: !this.state.open });
  },

  _onMenuItemClick: function(e, key, payload) {
    if (this.props.onChange && this.state.selectedIndex !== key) this.props.onChange(e, key, payload);
    this.setState({
      selectedIndex: key,
      open: false
    });
  }

});

module.exports = DropDownMenu;
