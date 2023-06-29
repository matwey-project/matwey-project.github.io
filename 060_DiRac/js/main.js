function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

var TooltipApp = /*#__PURE__*/ (function () {
    /*
    {
        $tooltipWrapper: ".tooltip-wrapper123",
        $tooltip: ".tooltip-name",
        $tooltipElement: ".tooltip-elem",
        $tooltipElementActiveClass: ".tooltip-elem--active",
        $tooltipPopup: ".tooltip-elem__popup",
        $tooltipPopupActiveClass: ".tooltip-elem__popup--active",
    }
    * */
    function TooltipApp(options) {
        _classCallCheck(this, TooltipApp);

        this.$tooltipWrapper =
            options && options.$tooltipWrapper
                ? document.querySelector("".concat(options.$tooltipWrapper))
                : document.querySelector(".tooltip-wrapper");
        this.$tooltip =
            options && options.$tooltip
                ? document.querySelectorAll("".concat(options.$tooltip))
                : document.querySelectorAll(".tooltip");
        this.$tooltipElement =
            (options && options.$tooltipElement) || ".tooltip__element";
        this.$tooltipElementActiveClass =
            (options && options.$tooltipElementActiveClass) ||
            "".concat(this.$tooltipElement.replace(/\./, ""), "--active");
        this.$tooltipPopup =
            (options && options.$tooltipPopup) || ".tooltip__popup";
        this.$tooltipPopupActiveClass =
            (options && options.$tooltipPopupActiveClass) ||
            "".concat(this.$tooltipPopup.replace(/\./, ""), "--active");
        this.tooltipInit();
    }

    _createClass(TooltipApp, [
        {
            key: "mobileDevice",
            value: function mobileDevice() {
            }
        },
        {
            key: "tooltipInit",
            value: function tooltipInit() {
                var _this = this;

                this.$tooltip.forEach(function (item) {
                    if (_this.getHoverAvailability()) {
                        item.addEventListener("mouseover", function () {
                            _this.tooltipShow(item);
                        });
                        item.addEventListener("mouseout", function () {
                            _this.tooltipHide(item);
                        });
                    } else {
                        document.addEventListener("click", function (e) {
                            if (!item.contains(e.target)) {
                                _this.tooltipHide(item);
                            }
                        });
                        item.addEventListener("click", function (e) {
                            if (
                                item
                                    .querySelector("".concat(_this.$tooltipPopup))
                                    .classList.contains(_this.$tooltipPopupActiveClass)
                            ) {
                                _this.tooltipHide(item);
                            } else {
                                _this.tooltipShow(item);
                            }
                        });
                    }
                });
            }
        },
        {
            key: "tooltipShow",
            value: function tooltipShow(item) {
                item
                    .querySelector("".concat(this.$tooltipElement))
                    .classList.add(this.$tooltipElementActiveClass);
                item
                    .querySelector("".concat(this.$tooltipPopup))
                    .classList.add(this.$tooltipPopupActiveClass);
            }
        },
        {
            key: "tooltipHide",
            value: function tooltipHide(item) {
                item
                    .querySelector("".concat(this.$tooltipElement))
                    .classList.remove(this.$tooltipElementActiveClass);
                item
                    .querySelector("".concat(this.$tooltipPopup))
                    .classList.remove(this.$tooltipPopupActiveClass);
            }
        },
        {
            key: "getHoverAvailability",
            value: function getHoverAvailability() {
                var style = document.createElement("style");
                style.textContent =
                    "\n                :root {\n                    --hover-device:false;\n                }\n                @media (hover) {\n                    :root {\n                        --hover-device:true;\n                    }\n                }\n            ";
                document.body.append(style);
                var hover = getComputedStyle(
                    document.getElementsByTagName("body")[0]
                ).getPropertyValue("--hover-device");

                if (hover === "false") {
                    return false;
                } else if (hover === "false") {
                } else {
                    return true;
                }
            }
        }
    ]);

    return TooltipApp;
})();

var myTooltip = new TooltipApp({
    $tooltip: ".dirac-item",
    $tooltipElement: ".dirac-el",
    $tooltipPopup: ".dirac-item__popup",
});

function elementFill() {
    let elementHoverWrapper = document.querySelector('.dirac-hover__wrapper')
    let elementHoverName = 'dirac-hover'
    let elementHover = document.querySelectorAll('.' + elementHoverName)
    let elementItemWrapper = document.querySelector('.dirac-elements__wrapper')
    let elementItem = elementItemWrapper.querySelectorAll('.dirac-item')
    let elementItemActive = 'dirac-item--active'
    let overlayElementName = 'dirac-overlay'
    let overlayElement = document.querySelector('.' + overlayElementName)

    elementItemWrapper.addEventListener('mouseover', (e) => {
        let target = e.target
        if (target || target.closest('.dirac-item') === elementItem[0]) {
            elementShow(target.closest('.dirac-item').getAttribute('data-element'), target.closest('.dirac-item'))
        }
    })

    elementItemWrapper.addEventListener("mouseout", function (e) {
        let target = e.target
        if (target || target.closest('.dirac-item') === elementItem[0]) {
            elementHide()
        }
    });

    function elementShow(index, element) {
        overlayElement.classList.add(overlayElementName + "--active")
        elementHover.forEach((item) => {
            if(index === item.getAttribute('data-fill')) {
                item.classList.add(elementHoverName + '--active')
            }
        })
    }

    function elementHide() {
        overlayElement.classList.remove(overlayElementName + "--active")
        elementHover.forEach(item => {
            item.classList.remove(elementHoverName + '--active')
        })
    }
}

elementFill()