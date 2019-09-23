// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Css   = require("bs-css/src/Css.js");
var Theme = require("./Theme.js");

require('glamor-reset')
;

Css.$$global("*", /* :: */[
      Css.boxSizing(/* BorderBox */0),
      /* [] */0
    ]);

Css.$$global("*:focus", /* :: */[
      Css.outlineStyle(/* None */0),
      /* [] */0
    ]);

Css.$$global("body", /* :: */[
      Css.unsafe("lineHeight", "inherit"),
      /* :: */[
        Css.color(Theme.Color[/* text */4]),
        /* [] */0
      ]
    ]);

Css.$$global("h1, h2, h3", /* :: */[
      Css.lineHeight(Css.em(1.1)),
      /* :: */[
        Css.fontWeight(/* Normal */0),
        /* [] */0
      ]
    ]);

Css.$$global("a", /* :: */[
      Css.unsafe("color", "inherit"),
      /* [] */0
    ]);

Css.$$global("button, input, select", /* :: */[
      Css.unsafe("background", "none"),
      /* :: */[
        Css.unsafe("border", "none"),
        /* :: */[
          Css.unsafe("font", "inherit"),
          /* [] */0
        ]
      ]
    ]);

var _reset = Css.$$global("ol, ul", /* :: */[
      Css.unsafe("listStyle", "none"),
      /* :: */[
        Css.margin(Css.zero),
        /* :: */[
          Css.padding(Css.zero),
          /* [] */0
        ]
      ]
    ]);

Css.$$global("html", /* :: */[
      Css.fontSize(Css.px(15)),
      /* :: */[
        Css.lineHeight(Css.em(1.25)),
        /* :: */[
          Css.fontFamily("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"),
          /* :: */[
            Css.boxSizing(/* BorderBox */0),
            /* :: */[
              Css.overflowY(/* Scroll */2),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var _global = Css.$$global("html, body, #___gatsby", /* :: */[
      Css.backgroundColor(Theme.Color[/* background */2]),
      /* :: */[
        Css.minHeight(Css.pct(100)),
        /* [] */0
      ]
    ]);

var Index = /* module */[];

exports._reset  = _reset;
exports._global = _global;
exports.Index   = Index;
/*  Not a pure module */
