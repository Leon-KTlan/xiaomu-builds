---
title: "Design long-running agents for interruption"
description: "Checkpoints, durable events, and idempotent work turn disconnection from a disaster into a normal state transition."
lang: en
path: "recoverable-agent-runs"
translationKey: "recoverable-agent-runs"
publishedAt: 2026-09-11
tags: [Recovery, Async Jobs, SSE]
category: method
---

A long-running agent will be interrupted. The browser will disconnect. A tool will time out. A worker will restart. A user will return hours later.

Treating those events as exceptional creates fragile products. Treating them as expected state transitions changes the architecture.

## Streaming is not storage

Server-sent events are useful for showing progress, but an open connection cannot be the source of truth. If the browser disappears, the work should continue and its events should remain available.

A durable event record lets a client reconnect with a cursor and replay what it missed. The stream becomes a projection of stored progress rather than a temporary narration.

## Checkpoint at meaningful boundaries

Saving every internal token is noisy. Saving only the final report is too late. Good checkpoints sit at boundaries that are meaningful to the workflow:

- context accepted;
- tool result recorded;
- human approval requested;
- evidence set committed;
- report section completed.

At each boundary, the system should know whether repeating the next step is safe.

## Recovery changes the interface

Once state is durable, the interface can say more than “loading.” It can show where the run paused, what has already been verified, what requires approval, and whether a retry will repeat an external side effect.

Recoverability is not only an infrastructure property. It is a promise the product can explain to its users.
