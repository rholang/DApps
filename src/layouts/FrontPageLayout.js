// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Icon = require("../bindings/Icon.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Footer = require("../components/Footer.js");
var Helmet = require("../bindings/gatsby/helmet.js");
var Vrroom = require("vrroom/src/Vrroom.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var TypedGlamor = require("bs-typed-glamor/src/TypedGlamor.bs.js");
var CommonStyles = require("../styles/CommonStyles.js");
var FrontPageLayoutStyles = require("./FrontPageLayoutStyles.js");

var component = ReasonReact.reducerComponent("FrontPageLayout");

function make(children, param) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (param) {
              var send = param[/* send */3];
              return React.createElement("div", {
                          className: TypedGlamor.toString(FrontPageLayoutStyles.root)
                        }, ReasonReact.element(undefined, undefined, Helmet.make("redex | Reason Package Index", undefined, undefined, undefined, /* array */[
                                  React.createElement("html", {
                                        lang: "en"
                                      }),
                                  React.createElement("meta", {
                                        content: "Package index for the ReasonML/BuckleScript ecosystem",
                                        name: "description"
                                      })
                                ])), React.createElement("nav", {
                              className: TypedGlamor.toString(FrontPageLayoutStyles.topNav(param[/* state */1][/* showBurgerMenu */0]))
                            }, React.createElement("button", {
                                  className: TypedGlamor.toString(FrontPageLayoutStyles.burger),
                                  onClick: (function (_e) {
                                      return Curry._1(send, /* ToggleBurgerMenu */-710484024);
                                    })
                                }, ReasonReact.element(undefined, undefined, Icon.Menu[/* make */0](undefined, /* array */[]))), React.createElement("div", {
                                  className: TypedGlamor.toString(CommonStyles.widthContainer)
                                }, React.createElement("span", {
                                      className: "left"
                                    }))), React.createElement("div", {
                              className: TypedGlamor.toString(FrontPageLayoutStyles.header)
                            }, React.createElement("div", {
                                  className: TypedGlamor.toString(CommonStyles.widthContainer)
                                }, React.createElement("h1", {
                                      className: TypedGlamor.toString(FrontPageLayoutStyles.title)
                                    }, React.createElement("svg", {
                                          className: TypedGlamor.toString(FrontPageLayoutStyles.logo)
                                        }, React.createElement("use", {
                                              href: "/logo.svg#logo",
                                              xlinkHref: "/logo.svg#logo",
                                              xmlnsXlink: "http://www.w3.org/1999/xlink"
                                            })), React.createElement("em", undefined, Vrroom.text("re")), Vrroom.text("ason package in"), React.createElement("em", undefined, Vrroom.text("dex"))))), ReasonReact.element(undefined, undefined, Footer.make(/* Front */431720585, /* array */[])));
            }),
          /* initialState */(function (param) {
              return /* record */[/* showBurgerMenu */false];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (param, state) {
              return /* Update */Block.__(0, [/* record */[/* showBurgerMenu */!state[/* showBurgerMenu */0]]]);
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(jsProps.children, /* array */[]);
      }));

var Styles = 0;

var $$__esModule = true;

exports.Styles = Styles;
exports.component = component;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
exports.$$__esModule = $$__esModule;
/* component Not a pure module */
