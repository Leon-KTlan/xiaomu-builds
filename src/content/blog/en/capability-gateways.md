---
title: "The model proposes; the runtime decides"
description: "A capability gateway keeps tool use governed even when model behavior remains probabilistic."
lang: en
path: "capability-gateways"
translationKey: "capability-gateways"
publishedAt: 2026-09-20
tags: [Tool Calling, Guardrails, Backend]
category: engineering
---

Tool calling gives a model reach. Reach is useful, but it is not authority.

A model can suggest that the system send a message, update a record, or retrieve private context. Whether that action is allowed should be decided by deterministic code with access to identity, permissions, budgets, and current product state.

## One boundary for every capability

Instead of giving each tool its own scattered safety checks, route requests through a capability gateway:

```python
decision = gateway.authorize(
    actor=actor,
    capability="profile.write",
    arguments=arguments,
    budget=run_budget,
)

if decision.requires_approval:
    return request_human_approval(decision)

return execute_with_policy(decision)
```

The exact API matters less than the ownership boundary. The gateway, not the prompt, owns feature flags, timeouts, retry policy, cost limits, approval, and audit events.

## Prompts explain; code enforces

A prompt can tell the model not to perform an unsafe action. This is useful guidance, but it is not a control plane. Prompts can be misunderstood, overridden by context, or changed during iteration.

Deterministic enforcement makes the product contract testable. A denied capability remains denied even when the model asks persuasively.

## Better failure semantics

Central governance also improves ordinary reliability. Tool timeouts, retries, circuit breaking, and idempotency do not belong in natural-language instructions. They belong in infrastructure that can observe outcomes and record them consistently.

The useful split is simple: models choose among possible intentions; runtimes decide which intentions may become effects.
