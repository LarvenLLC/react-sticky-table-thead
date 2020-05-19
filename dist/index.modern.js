import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var StickyTable = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(StickyTable, _React$Component);

  function StickyTable(props) {
    return _React$Component.call(this, props) || this;
  }

  var _proto = StickyTable.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var el = this.tableContainer;
    $(el).on("scroll", function () {
      var translate = "translate(0," + $(this).scrollTop() + "px)";
      $(this).find("thead").css("transform", translate);
    });
  };

  _proto.render = function render() {
    var _this = this;

    var props = this.props;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden",
        height: props.hiddenHorizontalScrollbar ? props.height - 15 : ""
      }
    }, /*#__PURE__*/React.createElement("div", {
      ref: function ref(el) {
        return _this.tableContainer = el;
      },
      className: this.props.className,
      style: {
        overflow: "auto",
        height: props.height,
        width: props.hiddenVerticalScrollbar ? "calc(100% + 15px)" : "100%"
      }
    }, props.children));
  };

  return StickyTable;
}(React.Component);
StickyTable.defaultProps = {
  height: 600,
  hiddenVerticalScrollbar: false,
  hiddenHorizontalScrollbar: false,
  className: ""
};
StickyTable.propTypes = {
  height: PropTypes.number,
  hiddenVerticalScrollbar: PropTypes.bool,
  hiddenHorizontalScrollbar: PropTypes.bool,
  className: PropTypes.string
};

export { StickyTable };
//# sourceMappingURL=index.modern.js.map
