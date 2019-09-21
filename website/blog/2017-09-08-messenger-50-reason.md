---
title: Messenger.com Now 50% Converted to Reason
---

Boom!

Messenger.com is the web version of Facebook Messenger; we also share code with facebook.com's inbox view and chat tabs. For over a year, the Reason team has been working directly on Messenger in order to integrate Reason + BuckleScript into the codebases. As of a while ago, we've reached 50% Reason code coverage!

## Some Statistics

- Full rebuild of the Reason part of the codebase is ~2s (a few hundreds of files), incremental build (the norm) is **<100ms** on average. The BuckleScript author estimates that the build system should scale to a few hundred thousands files in the current condition.
- Messenger used to receive bugs reports on a daily basis; since the introduction of Reason, there have been a total of **10 bugs** (that's during the whole year, not per week)! \*
- Most of the messenger core team's new features are now developed in Reason.
- Dozens of massive refactors while iterating on ReasonReact. Refactoring speed went from days to hours to dozens of minutes. I don't think we've caused more than a few bugs during the process (counted toward the total number of bugs).
- Everyone writing Reason got promoted for quality engineering. Just kidding. But definitely high, long-term impact.

\* in the Reason sections. This excludes: the JS sections, the backend (still PHP), etc.

## Which Team's Next?

We believe in iterating on/alongside product teams in order to create the best infra. The product teams' and open source folks' feedback has changed our strategy a few times, for the better. As of today, Reason and BuckleScript are also deployed on a WhatsApp internal tool, Instagram Web (small scale), plus some critical Ads internal tools. We'll be working closely with these teams over the next year.

We've successfully onboarded regular JavaScript folks to Reason; in the most extreme case, an intern with no JS knowledge was able to ship ReasonReact code in production (and made 0 bug while doing so). Give your own team a try! =)

A big thanks to all these teams' members, to Hongbo (BuckleScript author) and to the OCaml community (really, 50% Reason means 50% OCaml. We're nothing without you); and of course, to all of you folks in the community for being with us all this time. The best is yet to come.

See you soon!
