!function(e,t,n,r,a,o,s,i){"use strict";function l(e,t,n){let r;return function(){let a=this,o=arguments;const s=n&&!r;clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(a,o)},t),s&&e.apply(a,o)}}e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n,a=a&&a.hasOwnProperty("default")?a.default:a,o=o&&o.hasOwnProperty("default")?o.default:o,s=s&&s.hasOwnProperty("default")?s.default:s,i=i&&i.hasOwnProperty("default")?i.default:i;const c=r.compressToEncodedURIComponent,m=r.decompressFromEncodedURIComponent;let u=new n;class d extends e.Component{constructor(e){super()}componentDidMount(){this.editor=a(this.div,this.props.options),this.editor.setValue(this.props.value),this.editor.on("change",(e,t)=>{const n=this.editor.getValue();n!==this.props.value&&this.props.onChange&&this.props.onChange(n)})}componentWillReceiveProps(e){this.props.value!==e.value&&e.value!==this.editor.getValue()&&this.editor.setValue(e.value)}render(){return e.createElement("div",{className:this.props.className,ref:e=>this.div=e})}}class p extends e.Component{constructor(e){super(e)}render(){return e.createElement("div",{id:"preview",className:"cleanslate"},e.createElement("p",null,"This div has the ID ",e.createElement("code",null,"preview"),"."),e.createElement("p",null,'Feel free to override its content, or choose "React Greetings" in the Examples menu!'))}}const h=[{name:"Tree sum",code:"type tree = Leaf | Node(int, tree, tree);\n\nlet rec sum = (item) => {\n  switch (item) {\n  | Leaf => 0\n  | Node(value, left, right) => value + sum(left) + sum(right);\n  }\n};\n\nlet myTree =\n  Node(\n    1,\n    Node(2, Node(4, Leaf, Leaf), Node(6, Leaf, Leaf)),\n    Node(3, Node(5, Leaf, Leaf), Node(7, Leaf, Leaf))\n  );\n\nJs.log(sum(myTree));"},{name:"FFI - Base64",code:'[@bs.val] external btoa : string => string = "";\n[@bs.val] external atob : string => string = "";\n\nlet text = "Hello World!";\nJs.log(btoa(text));\nJs.log(text |. btoa |. atob);'},{name:"Factorial",code:"/* Based on https://rosettacode.org/wiki/Factorial#Recursive_50 */\nlet rec factorial = (n) =>\n  n <= 0\n  ? 1\n  : n * factorial(n - 1);\n\nJs.log(factorial(6));"},{name:"Greatest Common Divisor",code:"/* Based on https://rosettacode.org/wiki/Greatest_common_divisor#OCaml */\nlet rec gcd = (a, b) =>\n  switch (a mod b) {\n  | 0 => b\n  | r => gcd(b, r)\n  };\n\nJs.log(gcd(27, 9));"},{name:"Towers of Hanoi",code:"/* Based on https://rosettacode.org/wiki/Towers_of_Hanoi#OCaml */\nlet rec hanoi = (n, a, b, c) =>\n  if (n > 0) {\n    hanoi(n - 1, a, c, b);\n    Js.log({j|Move disk from pole $a to pole $b|j});\n    hanoi(n - 1, c, b, a)\n  };\n\nhanoi(4, 1, 2, 3);"},{name:"Json",code:'open Belt;\n\n[@bs.deriving abstract]\ntype fullName = {\n  first: string,\n  last: string,\n};\n\n[@bs.deriving abstract]\ntype person = {\n  name: fullName,\n  age: int,\n};\n\nlet person1 = person(~name=fullName(~first="Ricky", ~last="Zhang"), ~age=10);\n\n/* encode person1, then decode it */\nlet json =\n  person1\n  |. Js.Json.stringifyAny\n  |. Option.getExn\n  |. Js.Json.parseExn;\n\nlet name =\n  json\n  |. Js.Json.decodeObject\n  |. Option.flatMap(p => Js.Dict.get(p, "name"))\n  |. Option.flatMap(json => Js.Json.decodeObject(json))\n  |. Option.getExn;\n\nlet firstName =\n  Js.Dict.get(name, "first")\n  |. Option.flatMap(json => Js.Json.decodeString(json))\n  |. Option.getExn;\n\nlet lastName =\n  Js.Dict.get(name, "last")\n  |. Option.flatMap(json => Js.Json.decodeString(json))\n  |. Option.getExn;\n\nJs.log({j|Hello, $firstName $lastName|j});'},{name:"FizzBuzz",code:'/* Based on https://rosettacode.org/wiki/FizzBuzz#OCaml */\nlet fizzbuzz = (i) =>\n  switch (i mod 3, i mod 5) {\n  | (0, 0) => "FizzBuzz"\n  | (0, _) => "Fizz"\n  | (_, 0) => "Buzz"\n  | _ => string_of_int(i)\n  };\n\nfor (i in 1 to 100) {\n  Js.log(fizzbuzz(i))\n};'},{name:"Normal distribution of random numbers",code:"/* Based on https://rosettacode.org/wiki/Random_numbers#OCaml */\nlet pi = 4. *. atan(1.);\n\nlet random_gaussian = () =>\n  1. +. sqrt((-2.) *. log(Random.float(1.))) *. cos(2. *. pi *. Random.float(1.));\n\nBelt.Array.makeBy(42, (_) => random_gaussian()) |. Belt.Array.forEach(Js.log);"},{name:"Regex",code:'let input = {|\n  <html>\n    <head>\n      <title>A Simple HTML Document</title>\n    </head>\n    <body>\n      <p>This is a very simple HTML document</p>\n      <p>It only has two paragraphs</p>\n    </body>\n  </html>\n|};\n\nlet result = Js.String.match([%re {|/<p>(.*?)<\\/p>/gi|}], input);\n\nswitch (result) {\n| Some(result) => Js.Array.forEach(Js.log, result)\n| None => Js.log("no matches")\n};'},{name:"String interpolation",code:"for (a in 1 to 10) {\n  for (b in 1 to 10) {\n    let product = a * b;\n    Js.log({j|🐙 $a times $b is $product|j})\n  }\n};"},{name:"React Greetings",code:'[@bs.config {jsx: 3}];\n\nmodule Greeting = {\n  [@react.component]\n  let make = () => {\n    <button> {React.string("Hello!")} </button>\n  };\n};\n\nReactDOMRe.renderToElementWithId(<Greeting />, "preview");'},{name:"React Hooks",code:'[@bs.config {jsx: 3}];\n\nmodule Counter = {\n  [@react.component]\n  let make = (~name) => {\n    let (count, setCount) = React.useState(() => 0);\n\n    <div>\n      <p> {React.string(name ++ " clicked " ++ string_of_int(count) ++ " times")} </p>\n      <button onClick={_ => setCount(_ => count + 1)}>\n        {React.string("Click me")}\n      </button>\n    </div>\n  };\n};\n\nReactDOMRe.renderToElementWithId(<Counter name="Counter" />, "preview");'},{name:"(Legacy Record API) ReasonReact Greetings",code:'module Greeting = {\n  let component = ReasonReact.statelessComponent("Greeting");\n  let make = _children => {\n    ...component,\n    render: _self =>\n      <button> (ReasonReact.string("Hello!")) </button>,\n  };\n};\n\nReactDOMRe.renderToElementWithId(<Greeting />, "preview");'}];function g(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}const y=()=>{const e={language:"reason",code:h[0].code,useReasonReactJSX:!0},t=!!g("reason"),n=!!g("ocaml"),r="false"!==g("rrjsx");if(t){const e=g("reason");return{language:"reason",useReasonReactJSX:r,code:m(e)}}if(n){const e=g("ocaml");return{language:"ocaml",useReasonReactJSX:r,code:m(e)}}return function(){try{const e=localStorage.getItem("try-reason");let t=e&&JSON.parse(e);return t.useReasonReactJSX=!t.hasOwnProperty("useReasonReactJSX")||t.useReasonReactJSX,t.code=t.code||"",t}catch(e){console.error(e)}}()||e},f=(e,t,n)=>{return window.location.origin+window.location.pathname+"?rrjsx="+n+"&"+e+"="+c(t)},R=l((e,t,n)=>{try{localStorage.setItem("try-reason",JSON.stringify({language:e,code:t,useReasonReactJSX:n}))}catch(e){console.error(e)}window.history.replaceState(null,"",f(e,t,n))},100),v=500;class E extends e.Component{constructor(e){super(e),this.state={showConfirmation:!1},this.onClick=(()=>{this.props.onClick(),this.setState({showConfirmation:!0}),setTimeout(()=>this.setState({showConfirmation:!1}),2e3)})}render(){const{url:t}=this.props,{showConfirmation:n}=this.state;return e.createElement("div",{className:this.props.className},e.createElement("input",{id:"shareableUrl",value:this.props.url,readOnly:!0}),e.createElement("div",{onClick:this.onClick},"Share"),e.createElement("span",{className:"try-tooltip"},e.createElement("span",{className:"arrow"}),n?"Copied":"Click to copy to clipboard"))}}const b=({startLine:e,startLineStartChar:t,endLine:n,endLineEndChar:r})=>e===n?t===r?`Line ${e}:${t}`:`Line ${e}:${t}-${r}`:`Line ${e}:${t}-Line ${n}:${r}`,S=e=>e.replace(/\d+: /,""),w=e=>0===e.length?"":e[0].toUpperCase()+e.slice(1);const N=e=>`(function(exports) {${e}})({})`;t.render(e.createElement(class extends e.Component{constructor(n){super(n),this.state={reason:"/* loading */",reasonSyntaxError:null,ocaml:"(* loading *)",js:"// loading",jsIsLatest:!1,useReasonReactJSX:"false"!==g("rrjsx"),output:[],shareableUrl:"",errorsFromCompilation:null},this.previewPanel=e.createRef(),this._output=(e=>this.setState(t=>({output:t.output.concat(e)}))),this.output=(e=>{if(!this.outputOverloaded)return this.state.output.length>100?(this.outputOverloaded=!0,void this._output({type:"error",contents:["[Too much output!]"]})):void this._output(e)}),this.initEvalWorker=(()=>{this.evalWorker=new Worker("/js/evalWorker.js"),this.evalWorker.onmessage=(({data:e})=>{"end"===e.type?clearTimeout(e.contents):this.output(e)}),this.evalWorker.onerror=(e=>{this.errorTimerId=setTimeout(()=>this.setState(t=>({jsError:e})),v)})}),this.evalJs=(n=>{t.unmountComponentAtNode(this.previewPanel.current),t.render(e.createElement(p),this.previewPanel.current),this.outputOverloaded=!1,this.setState(e=>({output:[]}),()=>{if(n.indexOf('var React = require("react");')>=0||n.indexOf('var ReasonReact = require("stdlib/reasonReact");')>=0){const e=eval;try{e("const exports = {};"+n)}catch(e){this.errorTimerId=setTimeout(()=>this.setState(t=>({reasonSyntaxError:null,ocamlSyntaxError:null,jsError:e,js:"",ocaml:"",output:[]})),v)}}else{const e=setTimeout(()=>{this.evalWorker.terminate(),this.initEvalWorker(),this._output({type:"error",contents:["[Evaluation timed out!]"]})},1e3);this.evalWorker.postMessage({code:N(n),timerId:e})}})}),this.updateReason=((e,t)=>{(e!==this.state.reason||t)&&(R("reason",e,this.state.useReasonReactJSX),clearTimeout(this.errorTimerId),this.setState((t,n)=>{let r=t.ocaml;try{r=window.printML(window.parseRE(e)),this.tryCompiling(e,r)}catch(e){this.errorTimerId=setTimeout(()=>this.setState(t=>({reasonSyntaxError:e,ocamlSyntaxError:null,errorsFromCompilation:null,jsError:null,js:"",ocaml:"",output:[]})),v)}return{reason:e,ocaml:r,reasonSyntaxError:null,ocamlSyntaxError:null,jsError:null,shareableUrl:f("reason",e,this.state.useReasonReactJSX)}}))}),this.updateOCaml=(e=>{e!==this.state.ocaml&&(R("ocaml",e,this.state.useReasonReactJSX),clearTimeout(this.errorTimerId),this.setState((t,n)=>{let r=t.reason;try{r=window.printRE(window.parseML(e)),this.tryCompiling(r,e)}catch(e){this.errorTimerId=setTimeout(()=>this.setState(t=>({ocamlSyntaxError:e,reasonSyntaxError:null,jsError:null,js:"",reason:"",output:[]})),v)}return{reason:r,ocaml:e,reasonSyntaxError:null,ocamlSyntaxError:null,jsError:null,shareableUrl:f("ocaml",e,this.state.useReasonReactJSX)}}))}),this.reformat=(()=>{clearTimeout(this.errorTimerId),this.setState((e,t)=>{let n=e.reason;try{n=window.printRE(window.parseRE(n))}catch(e){this.errorTimerId=setTimeout(()=>this.setState(t=>({reasonSyntaxError:e})),v)}return R("reason",n,this.state.useReasonReactJSX),{reason:n,reasonSyntaxError:null,shareableUrl:f("reason",n,this.state.useReasonReactJSX)}})}),this.compile=(e=>{const t=console.error;let n="";console.error=((...e)=>e.forEach(e=>{e.indexOf('WARN: File "js_cmj_load.ml"')<0&&(n+=e+"\n")}));let r=window.ocaml.compile_super_errors_ppx_v2(e);return console.error=t,[r,n=n.replace(/^  /gm,"").replace(/\(No file name\)/gm,"OCaml preview")]}),this.tryCompiling=l((e,t)=>{try{const[e,n]=this.compile(t);if(e.js_code)return this.setState(t=>({js:e.js_code,jsIsLatest:!0,errorsFromCompilation:n})),void this.evalJs(e.js_code);this.errorTimerId=setTimeout(()=>this.setState(e=>({errorsFromCompilation:n,js:""})),v)}catch(e){this.errorTimerId=setTimeout(()=>this.setState(t=>({errorsFromCompilation:e,js:""})),v)}this.setState(e=>({errorsFromCompilation:null,jsIsLatest:!1,output:[]}))},100),this.copyShareableUrl=(()=>{document.getElementById("shareableUrl").select(),document.execCommand("copy")}),this.toggleUseReasonReact=(()=>{this.setState(e=>({useReasonReactJSX:!this.state.useReasonReactJSX}),()=>{this.updateReason(this.state.reason,!0)})})}componentDidMount(){this.initEvalWorker();const{language:e,code:t,useReasonReactJSX:n}=y();"reason"===e?this.updateReason(t):this.updateOCaml(t)}componentWillUnmount(){this.evalWorker&&this.evalWorker.terminate()}render(){let{reason:t,ocaml:n,js:r,reasonSyntaxError:a,errorsFromCompilation:o,ocamlSyntaxError:s,jsError:i}=this.state;return e.createElement("div",{className:"try-inner"},e.createElement("div",{className:"try-buttons"},e.createElement("div",{className:"try-button try-button-examples try-button-right-border"},"Examples",e.createElement("ul",{className:"try-button-examples-list"},h.map(t=>e.createElement("li",{key:t.name,onClick:()=>this.updateReason(t.code)},t.name)))),e.createElement("div",{className:"try-button try-button-note",style:{marginRight:"auto"}},"Note on foo##bar",e.createElement("div",{className:"try-tooltip"},e.createElement("span",{className:"arrow"}),"Currently, typing `foo##bar` in the Reason syntax section gives a syntax error; the playground translates Reason syntax to OCaml syntax first before feeding it into the compiler. But OCaml mis-prints `foo##bar` as the syntactically invalid `## foo bar` (a fix will be released soon). For now, whenever this happens, please manually edit the OCaml section to use `foo##bar` instead. Sorry!")),e.createElement("div",{className:"try-button try-button-right-border",onClick:this.reformat},"Refmt (Reformat)"),e.createElement("div",{className:"try-button try-button-right-border",onClick:this.toggleUseReasonReact},"ReasonReact JSX",e.createElement("input",{className:"try-button-reasonreact-checkbox",type:"checkbox",checked:this.state.useReasonReactJSX,onChange:this.toggleUseReasonReact})),e.createElement(E,{className:"try-button try-button-share",url:this.state.shareableUrl,onClick:this.copyShareableUrl})),e.createElement("div",{className:"try-grid"},e.createElement("div",{className:"try-grid-editor"},e.createElement("div",{className:"try-label"},"Reason"),e.createElement(d,{className:"try-codemirror-wrap",value:t,options:{mode:"rust",lineNumbers:!0},onChange:this.updateReason}),a&&e.createElement("pre",{className:"try-error-warning",style:{padding:15}},b(a.location)," ",w(S(a.message)))),e.createElement("div",{className:"try-grid-editor"},e.createElement("div",{className:"try-label"},"JavaScript"),e.createElement(d,{className:"try-codemirror-wrap",value:r,options:{mode:"javascript",lineNumbers:!0,readOnly:!0}}),i&&e.createElement("pre",{className:"try-error-warning",style:{padding:15}},i.message)),e.createElement("div",{className:"try-grid-editor"},e.createElement("div",{className:"try-label"},"OCaml"),e.createElement(d,{className:"try-codemirror-wrap",value:n,options:{mode:"mllike",lineNumbers:!0},onChange:this.updateOCaml}),s&&e.createElement("pre",{className:"try-error-warning",style:{padding:15}},s.message),o&&e.createElement("pre",{className:"try-error-warning",dangerouslySetInnerHTML:{__html:u.ansi_to_html(o)}})),e.createElement("div",{className:"try-output"},e.createElement("div",{className:"try-grid-editor"},e.createElement("div",{className:"try-label"},"Console"),e.createElement("div",{style:{padding:10}},this.state.output.map((t,n)=>e.createElement("div",{className:"try-output-line",key:n},t.contents.join(" "))))),e.createElement("div",{className:"try-grid-editor"},e.createElement("div",{className:"try-label"},"Preview"),e.createElement("div",{ref:this.previewPanel,style:{padding:10}},e.createElement(p))))))}}),document.querySelector("#try-wrapper"))}(React,ReactDOM,AnsiUp,lzString,codemirror,javascript,mllike,rust);
