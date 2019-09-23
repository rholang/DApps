// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Theme = require("./Theme.js");
var TypedGlamor = require("bs-typed-glamor/src/TypedGlamor.bs.js");
var CommonStyles = require("./CommonStyles.js");

var root = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.marginBottom(TypedGlamor.em(1.45)),
      /* [] */0
    ]);

var header = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.label("header"),
      /* :: */[
        TypedGlamor.backgroundColor(Theme.Inverted[/* Color */0][/* background */0]),
        /* :: */[
          TypedGlamor.color(Theme.Inverted[/* Color */0][/* text */1]),
          /* :: */[
            TypedGlamor.padding2(TypedGlamor.em(2), TypedGlamor.em(4)),
            /* :: */[
              TypedGlamor.select("@media (max-width: 900px)", /* :: */[
                    TypedGlamor.padding2(TypedGlamor.em(1), TypedGlamor.em(2)),
                    /* [] */0
                  ]),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var props = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.display(TypedGlamor.flex),
      /* :: */[
        TypedGlamor.justifyContent(TypedGlamor.flexEnd),
        /* :: */[
          TypedGlamor.alignItems(TypedGlamor.baseline),
          /* :: */[
            TypedGlamor.select("& > *", /* :: */[
                  TypedGlamor.marginLeft(TypedGlamor.em(1)),
                  /* [] */0
                ]),
            /* [] */0
          ]
        ]
      ]
    ]);

var title = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.padding3(TypedGlamor.em(1), TypedGlamor.zero, TypedGlamor.zero),
      /* :: */[
        TypedGlamor.display(TypedGlamor.flex),
        /* :: */[
          TypedGlamor.alignItems(TypedGlamor.baseline),
          /* [] */0
        ]
      ]
    ]);

var owner = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.display(TypedGlamor.block),
      /* :: */[
        TypedGlamor.opacity(0.75),
        /* :: */[
          TypedGlamor.fontSize(TypedGlamor.em(0.85)),
          /* :: */[
            TypedGlamor.fontVariant(TypedGlamor.smallCaps),
            /* [] */0
          ]
        ]
      ]
    ]);

var name = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.fontSize(TypedGlamor.rem(1.5)),
      /* :: */[
        TypedGlamor.fontWeight(TypedGlamor.bold),
        /* :: */[
          TypedGlamor.textDecoration(TypedGlamor.none),
          /* :: */[
            TypedGlamor.lineHeight(TypedGlamor.em(1.45)),
            /* :: */[
              TypedGlamor.select("&:hover", /* :: */[
                    TypedGlamor.textDecoration(TypedGlamor.underline),
                    /* [] */0
                  ]),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var descLine = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.marginBottom(TypedGlamor.em(0.5)),
      /* [] */0
    ]);

var description = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.unsafe("textOverflow", "ellipsis"),
      /* :: */[
        TypedGlamor.overflow(TypedGlamor.hidden),
        /* :: */[
          TypedGlamor.opacity(0.75),
          /* [] */0
        ]
      ]
    ]);

var tags = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.select("& span", /* :: */[
            TypedGlamor.fontSize(TypedGlamor.em(0.85)),
            /* :: */[
              TypedGlamor.backgroundColor(Theme.Inverted[/* Color */0][/* block */2]),
              /* :: */[
                TypedGlamor.padding2(TypedGlamor.zero, TypedGlamor.ex(1)),
                /* :: */[
                  TypedGlamor.opacity(1),
                  /* :: */[
                    TypedGlamor.hover(/* :: */[
                          TypedGlamor.backgroundColor(Theme.Inverted[/* Color */0][/* highlightedBlock */3]),
                          /* :: */[
                            TypedGlamor.cursor(TypedGlamor.pointer),
                            /* [] */0
                          ]
                        ]),
                    /* [] */0
                  ]
                ]
              ]
            ]
          ]),
      /* [] */0
    ]);

var tagsIcon = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.opacity(0.25),
      /* [] */0
    ]);

var right = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.textAlign(TypedGlamor.right),
      /* [] */0
    ]);

var updated = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.fontSize(TypedGlamor.em(0.85)),
      /* :: */[
        TypedGlamor.whiteSpace(TypedGlamor.nowrap),
        /* [] */0
      ]
    ]);

var license = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.fontSize(TypedGlamor.em(0.85)),
      /* :: */[
        TypedGlamor.whiteSpace(TypedGlamor.nowrap),
        /* :: */[
          TypedGlamor.border3(TypedGlamor.px(1), TypedGlamor.solid, Theme.Inverted[/* Color */0][/* text */1]),
          /* :: */[
            TypedGlamor.padding2(TypedGlamor.zero, TypedGlamor.ex(1)),
            /* [] */0
          ]
        ]
      ]
    ]);

var nolicense = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.fontSize(TypedGlamor.em(0.85)),
      /* :: */[
        TypedGlamor.whiteSpace(TypedGlamor.nowrap),
        /* :: */[
          TypedGlamor.border3(TypedGlamor.px(1), TypedGlamor.solid, TypedGlamor.hex("0008")),
          /* :: */[
            TypedGlamor.color(TypedGlamor.hex("0008")),
            /* :: */[
              TypedGlamor.padding2(TypedGlamor.zero, TypedGlamor.ex(1)),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var stars = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.fontSize(TypedGlamor.em(0.85)),
      /* :: */[
        TypedGlamor.whiteSpace(TypedGlamor.nowrap),
        /* [] */0
      ]
    ]);

var starIcon = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.marginLeft(TypedGlamor.em(0.25)),
      /* :: */[
        TypedGlamor.transforms(/* :: */[
              TypedGlamor.translateY(TypedGlamor.px(-1)),
              /* [] */0
            ]),
        /* :: */[
          TypedGlamor.opacity(0.5),
          /* [] */0
        ]
      ]
    ]);

var links = TypedGlamor.css(/* None */0, /* :: */[
      TypedGlamor.label("links"),
      /* :: */[
        TypedGlamor.marginTop(TypedGlamor.em(3)),
        /* :: */[
          TypedGlamor.select("& > a", /* :: */[
                TypedGlamor.display(TypedGlamor.inlineBlock),
                /* :: */[
                  TypedGlamor.textDecoration(TypedGlamor.none),
                  /* :: */[
                    TypedGlamor.marginRight(TypedGlamor.em(2)),
                    /* :: */[
                      TypedGlamor.fontVariant(TypedGlamor.smallCaps),
                      /* :: */[
                        TypedGlamor.select("@media (max-width: 450px)", /* :: */[
                              TypedGlamor.marginRight(TypedGlamor.em(1)),
                              /* [] */0
                            ]),
                        /* :: */[
                          TypedGlamor.hover(/* :: */[
                                TypedGlamor.textDecoration(TypedGlamor.underline),
                                /* [] */0
                              ]),
                          /* :: */[
                            TypedGlamor.select("&:not([href])", /* :: */[
                                  TypedGlamor.textDecoration(TypedGlamor.none),
                                  /* :: */[
                                    TypedGlamor.opacity(0.25),
                                    /* [] */0
                                  ]
                                ]),
                            /* [] */0
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]),
          /* [] */0
        ]
      ]
    ]);

var readme = TypedGlamor.css(/* Some */[CommonStyles.html], /* :: */[
      TypedGlamor.backgroundColor(Theme.Panel[/* Color */0][/* background */0]),
      /* :: */[
        TypedGlamor.padding2(TypedGlamor.em(2), TypedGlamor.em(4)),
        /* :: */[
          TypedGlamor.select("@media (max-width: 900px)", /* :: */[
                TypedGlamor.padding2(TypedGlamor.em(1), TypedGlamor.em(2)),
                /* [] */0
              ]),
          /* [] */0
        ]
      ]
    ]);

exports.root = root;
exports.header = header;
exports.props = props;
exports.title = title;
exports.owner = owner;
exports.name = name;
exports.descLine = descLine;
exports.description = description;
exports.tags = tags;
exports.tagsIcon = tagsIcon;
exports.right = right;
exports.updated = updated;
exports.license = license;
exports.nolicense = nolicense;
exports.stars = stars;
exports.starIcon = starIcon;
exports.links = links;
exports.readme = readme;
/* root Not a pure module */