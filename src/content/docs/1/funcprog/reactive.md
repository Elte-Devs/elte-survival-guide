---
title: Reaktív Programozás
subtitle: Funkcionális Programozás
sidebar:
  badge:
    text: Notes
    variant: caution
---

![programming paradigms](/src/assets/programming_paradigms.png)

- weird history
  - pure reactive language: Svelte 4
  - why pure is bad (pure reactive, pure functional)
- we will use: Svelte 5, Solid
- observer pattern: signals, [TC39 signals-proposal](https://github.com/tc39/proposal-signals)
- state, derived, effect
- learning to lose reactivity to not cause infinite loops: untrack (note: these are actually caught by the compiler, unlike with other languages I could mention *cough* haskell)
- use Bun: it's easy
