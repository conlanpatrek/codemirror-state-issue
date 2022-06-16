# CodeMirror 6 State Update Issue

I noticed this today while trying to detach and reattach state to a view. When re-attaching i noticed my editor changes had been reverted.

I did a little digging and I think the doc state isn't being updated at all.

I notice that the bundle here: https://codemirror.net/codemirror.js does not suffer from the same symptom, so I think there's a hint.

Note: I've installed codemirror via the npm `codemirror` package for this repro (that's what the getting started docs had me do), but installing directly via the `@codemirror/view` and `@codemirror/state` packages also causes the same issue.

## Running the example

```
npm install
npm start
```

Should pop open a small repro with instructions.