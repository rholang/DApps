// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Icon = require("../bindings/Icon.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Config = require("../Config.js");
var Rebase = require("@glennsl/rebase/src/Rebase.bs.js");
var Vrroom = require("vrroom/src/Vrroom.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var TypedGlamor = require("bs-typed-glamor/src/TypedGlamor.bs.js");
var GatsbyLink = require("gatsby-link");
var Algoliasearch = require("algoliasearch");
var SearchBoxStyles = require("./SearchBoxStyles.js");
var SearchResultItem = require("./SearchResultItem.js");
var AlgoliasearchHelper = require("algoliasearch-helper");

var Key = /* module */[
  /* down */40,
  /* up */38,
  /* enter */13
];

var component = ReasonReact.reducerComponent("PackageSearchBox");

function make($staropt$star, _) {
  var focusOnMount = $staropt$star ? $staropt$star[0] : false;
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */(function (param) {
              var send = param[/* send */3];
              var state = param[/* state */1];
              state[/* searchClient */0].on("result", (function (results, _) {
                      return Curry._1(send, /* ResultsChanged */Block.__(1, [results.hits]));
                    }));
              if (focusOnMount) {
                return Rebase.Option[/* forEach */8]((function (prim) {
                              prim.focus();
                              return /* () */0;
                            }), state[/* inputRef */4][0]);
              } else {
                return 0;
              }
            }),
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (param) {
              var send = param[/* send */3];
              var state = param[/* state */1];
              return React.createElement("div", {
                          className: TypedGlamor.toString(SearchBoxStyles.root)
                        }, React.createElement("div", {
                              className: TypedGlamor.toString(SearchBoxStyles.fakeInput)
                            }, ReasonReact.element(/* None */0, /* None */0, Icon.Search[/* make */0](/* Some */[SearchBoxStyles.searchIcon], /* array */[])), React.createElement("input", {
                                  ref: Curry._1(param[/* handle */0], (function (r, param) {
                                          param[/* state */1][/* inputRef */4][0] = (r == null) ? /* None */0 : [r];
                                          return /* () */0;
                                        })),
                                  className: TypedGlamor.toString(SearchBoxStyles.input),
                                  placeholder: "Search packages",
                                  value: state[/* query */1],
                                  onKeyDown: (function (e) {
                                      return Curry._1(send, /* KeyDown */Block.__(3, [e.keyCode]));
                                    }),
                                  onChange: (function (e) {
                                      return Curry._1(send, /* QueryChanged */Block.__(0, [e.target.value]));
                                    })
                                })), ReasonReact.element(/* None */0, /* None */0, Curry._2(Vrroom.Control[/* If */2][/* make */1], Rebase.$$Array[/* length */16](state[/* results */2]) > 0, (function () {
                                    return React.createElement("div", {
                                                className: TypedGlamor.toString(SearchBoxStyles.results)
                                              }, ReasonReact.element(/* None */0, /* None */0, Curry._3(Vrroom.Control[/* Map */0][/* make */1], state[/* results */2], /* None */0, (function ($$package) {
                                                          return ReasonReact.element(/* Some */[$$package.id], /* None */0, SearchResultItem.make($$package, Rebase.Option[/* exists */9]((function ($$this) {
                                                                                return $$this.name === $$package.name;
                                                                              }), state[/* focused */3]), (function (p) {
                                                                            return Curry._1(send, /* SelectItem */Block.__(2, [p]));
                                                                          }), /* array */[]));
                                                        }))), React.createElement("div", {
                                                    className: TypedGlamor.toString(SearchBoxStyles.footer)
                                                  }, React.createElement("a", {
                                                        href: "https://www.algolia.com"
                                                      }, React.createElement("img", {
                                                            className: TypedGlamor.toString(SearchBoxStyles.algoliaLogo),
                                                            src: "/search-by-algolia.svg"
                                                          }))));
                                  }))));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* searchClient */AlgoliasearchHelper(Algoliasearch(Config.Search[/* appId */0], Config.Search[/* apiKey */1]), Config.Search[/* packageIndex */2]),
                      /* query */"",
                      /* results : array */[],
                      /* focused : None */0,
                      /* inputRef */[/* None */0]
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              switch (action.tag | 0) {
                case 0 : 
                    var query = action[0];
                    if (query === "") {
                      return /* Update */Block.__(0, [/* record */[
                                  /* searchClient */state[/* searchClient */0],
                                  /* query */query,
                                  /* results : array */[],
                                  /* focused : None */0,
                                  /* inputRef */state[/* inputRef */4]
                                ]]);
                    } else {
                      return /* UpdateWithSideEffects */Block.__(2, [
                                /* record */[
                                  /* searchClient */state[/* searchClient */0],
                                  /* query */query,
                                  /* results */state[/* results */2],
                                  /* focused */state[/* focused */3],
                                  /* inputRef */state[/* inputRef */4]
                                ],
                                (function (param) {
                                    param[/* state */1][/* searchClient */0].setQuery(query).search();
                                    return /* () */0;
                                  })
                              ]);
                    }
                case 1 : 
                    var results = Rebase.$$Array[/* map */0](SearchResultItem.decode, action[0]);
                    return /* Update */Block.__(0, [/* record */[
                                /* searchClient */state[/* searchClient */0],
                                /* query */state[/* query */1],
                                /* results */results,
                                /* focused */Rebase.$$Array[/* get */17](results, 0),
                                /* inputRef */state[/* inputRef */4]
                              ]]);
                case 2 : 
                    var $$package = action[0];
                    return /* UpdateWithSideEffects */Block.__(2, [
                              /* record */[
                                /* searchClient */state[/* searchClient */0],
                                /* query */"",
                                /* results : array */[],
                                /* focused : None */0,
                                /* inputRef */state[/* inputRef */4]
                              ],
                              (function () {
                                  GatsbyLink.navigateTo($$package.slug);
                                  return /* () */0;
                                })
                            ]);
                case 3 : 
                    var key = action[0];
                    if (key === 40) {
                      return /* Update */Block.__(0, [/* record */[
                                  /* searchClient */state[/* searchClient */0],
                                  /* query */state[/* query */1],
                                  /* results */state[/* results */2],
                                  /* focused */Rebase.$$Array[/* get */17](state[/* results */2], Rebase.Option[/* getOr */16](0, Rebase.Option[/* map */0]((function (param) {
                                                  return param[0] + 1 | 0;
                                                }), Rebase.Option[/* flatMap */5]((function (p) {
                                                      return Rebase.$$Array[/* findIndex */29]((function ($$this) {
                                                                    return $$this === p;
                                                                  }), state[/* results */2]);
                                                    }), state[/* focused */3])))),
                                  /* inputRef */state[/* inputRef */4]
                                ]]);
                    } else if (key === 38) {
                      return /* Update */Block.__(0, [/* record */[
                                  /* searchClient */state[/* searchClient */0],
                                  /* query */state[/* query */1],
                                  /* results */state[/* results */2],
                                  /* focused */Rebase.$$Array[/* get */17](state[/* results */2], Rebase.Option[/* getOr */16](Rebase.$$Array[/* length */16](state[/* results */2]) - 1 | 0, Rebase.Option[/* map */0]((function (param) {
                                                  return param[0] - 1 | 0;
                                                }), Rebase.Option[/* flatMap */5]((function (p) {
                                                      return Rebase.$$Array[/* findIndex */29]((function ($$this) {
                                                                    return $$this === p;
                                                                  }), state[/* results */2]);
                                                    }), state[/* focused */3])))),
                                  /* inputRef */state[/* inputRef */4]
                                ]]);
                    } else if (key === 13) {
                      return /* SideEffects */Block.__(1, [(function (self) {
                                    return Rebase.Option[/* forEach */8]((function ($$this) {
                                                  return Curry._1(self[/* send */3], /* SelectItem */Block.__(2, [$$this]));
                                                }), self[/* state */1][/* focused */3]);
                                  })]);
                    } else {
                      return /* NoUpdate */0;
                    }
                
              }
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var Styles = 0;

var Config$1 = 0;

exports.Styles = Styles;
exports.Config = Config$1;
exports.Key = Key;
exports.component = component;
exports.make = make;
/* component Not a pure module */
