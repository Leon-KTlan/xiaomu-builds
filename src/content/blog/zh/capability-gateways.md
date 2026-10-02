---
title: "模型提出，运行时决定"
description: "用统一的能力网关治理工具调用，在模型保持概率性的同时，让执行边界保持确定。"
lang: zh
path: "capability-gateways"
translationKey: "capability-gateways"
publishedAt: 2026-09-20
tags: [工具调用, 权限治理, 后端]
category: engineering
---

工具调用扩大了模型的触达范围，但触达不等于权限。

模型可以建议系统发送消息、更新记录或读取私有上下文。这个动作是否允许执行，应该由能够访问身份、权限、预算和当前产品状态的确定性代码决定。

## 让所有能力经过同一个边界

与其让每个工具散落着自己的安全判断，不如让请求统一经过 Capability Gateway：

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

具体 API 并不是重点，重点是所有权边界：功能开关、超时、重试策略、成本限制、人工审批与审计事件，都由网关而不是 Prompt 负责。

## Prompt 负责解释，代码负责执行

Prompt 可以提醒模型不要执行危险动作，这是一种有用的指导，却不是控制平面。自然语言可能被误解、被上下文覆盖，也可能在迭代中变化。

确定性执行让产品契约可以被测试。即使模型以非常有说服力的方式提出请求，被拒绝的能力仍然应该保持拒绝。

## 更清楚的失败语义

统一治理也能改善普通可靠性。工具超时、重试、熔断与幂等不该藏在自然语言指令里，而应该进入能够观察结果并持续记录的基础设施。

一个实用的分工是：模型在可能的意图中做选择，运行时决定哪些意图可以变成真实影响。
