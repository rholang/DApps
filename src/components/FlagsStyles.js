// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Theme = require("../styles/Theme.js");
var TypedGlamor = require("bs-typed-glamor/src/TypedGlamor.bs.js");

function flag(style_, invert) {
  return TypedGlamor.css(/* None */0, /* :: */[
              TypedGlamor.display(TypedGlamor.inlineBlock),
              /* :: */[
                TypedGlamor.fontSize(TypedGlamor.em(0.75)),
                /* :: */[
                  TypedGlamor.lineHeight(TypedGlamor.em(1.6)),
                  /* :: */[
                    TypedGlamor.marginRight(TypedGlamor.em(1)),
                    /* :: */[
                      TypedGlamor.whiteSpace(TypedGlamor.nowrap),
                      /* :: */[
                        TypedGlamor.padding2(TypedGlamor.zero, TypedGlamor.ex(1)),
                        /* :: */[
                          style_ !== 136970422 ? (
                              style_ >= 937841383 ? TypedGlamor.backgroundColor(invert ? TypedGlamor.hex("fffc") : Theme.Color[/* primary */0]) : TypedGlamor.backgroundColor(invert ? TypedGlamor.hex("0003") : TypedGlamor.hex("444e"))
                            ) : TypedGlamor.border3(TypedGlamor.px(1), TypedGlamor.solid, invert ? TypedGlamor.hex("fffc") : Theme.Color[/* primary */0]),
                          /* :: */[
                            TypedGlamor.color(style_ !== 136970422 ? (
                                    style_ >= 937841383 ? (
                                        invert ? Theme.Color[/* primary */0] : TypedGlamor.white
                                      ) : TypedGlamor.hex("fffd")
                                  ) : (
                                    invert ? TypedGlamor.white : Theme.Color[/* primary */0]
                                  )),
                            /* :: */[
                              TypedGlamor.borderRadius(TypedGlamor.ex(0.5)),
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

var flags = TypedGlamor.css(/* None */0, /* [] */0);

exports.flag = flag;
exports.flags = flags;
/* flags Not a pure module */
