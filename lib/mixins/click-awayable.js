var closest = require('bh5/closest');
var events = require('bh5/event');

module.exports = {

  //When the component mounts, listen to click events and check if we need to
  //Call the componentClickAway function.
  componentDidMount: function() {
    var self = this;

    function onClick(e) {
      if (self.isMounted() && !closest(e.target, self.getDOMNode())) {
        if (self.componentClickAway) {
          self.componentClickAway();
        }
      }
    }

    events.bind(document, 'click', onClick);
    this.setState({
      _clickAwayHandler: onClick
    });
  },

  componentWillUnmount: function() {
    events.unbind(document, 'click', this.state._clickAwayHandler);
  }

}
