/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ui;
(function (ui) {
    var rank;
    (function (rank) {
        var UI_BallCon = /** @class */ (function (_super) {
            __extends(UI_BallCon, _super);
            function UI_BallCon() {
                return _super.call(this) || this;
            }
            UI_BallCon.createInstance = function () {
                return (fairygui.UIPackage.createObject("rank", "BallCon"));
            };
            UI_BallCon.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_n0 = (this.getChildAt(0));
            };
            UI_BallCon.URL = "ui://tlo9kvuvpr18g";
            return UI_BallCon;
        }(fairygui.GComponent));
        rank.UI_BallCon = UI_BallCon;
    })(rank = ui.rank || (ui.rank = {}));
})(ui || (ui = {}));
//# sourceMappingURL=UI_BallCon.js.map