---
title: "A useful agent should show its work"
description: "Why evidence, execution traces, and explicit failure boundaries matter more than a confident final answer."
lang: en
path: "reviewable-agents"
translationKey: "reviewable-agents"
publishedAt: 2026-09-29
tags: [AI Agents, Evidence, Architecture]
category: engineering
featured: true
---

An agent can produce a polished answer while hiding every step that should make the answer trustworthy. It may have used stale context, ignored a failed tool call, or turned an inference into a fact. Fluency makes these failures harder to notice, not less important.

For consequential workflows, the final answer is only one output. The system should also preserve the path that produced it.

## From answer generation to claim construction

I prefer to model an agent report as a chain:

```text
evidence → finding → claim → report
```

Evidence is an observation: a retrieved document, a tool response, or an explicit user statement. A finding interprets one or more pieces of evidence. A claim is a statement the system is prepared to present. The report arranges those claims for a reader.

This separation creates useful friction. A report cannot silently invent a claim if the claim must point to a finding and the finding must point to evidence. When the chain breaks, the product can expose uncertainty or ask for more material.

## The trace is part of the interface

A debug log is written for the person operating a service. An execution trace is written for everyone who needs to understand what the agent did: developers, reviewers, and sometimes the end user.

A useful trace answers a small set of questions:

1. Which context entered the run?
2. Which capabilities did the model request?
3. Which requests were allowed, denied, or retried?
4. What evidence did each conclusion depend on?
5. Where can an interrupted run resume?

The trace does not need to expose hidden model reasoning. It needs to expose system actions and their consequences.

## Failure belongs in the evidence

Evaluation pages often show only the best number. That removes the information engineers need most: where the system stops being reliable.

If one golden case drifts, the honest result is not “almost perfect.” The useful result is the metric, the failed case, and the current explanation. A reviewable system makes that caveat easy to find.

The goal is not to make an agent look certain. The goal is to make its uncertainty inspectable.
