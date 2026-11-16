---
title: "I Really Don't Recommend Another RAG Internship Project"
description: "RAG is still useful, but it should no longer be the same résumé centerpiece everyone builds. Agent tooling, planning, multi-step execution, and recovery show more differentiation."
lang: en
path: "stop-using-rag-as-your-internship-project"
translationKey: "stop-using-rag-as-your-internship-project"
publishedAt: 2026-10-20T12:00:00Z
tags: [RAG, AI Agents, Internship Projects]
category: method
---

Here's the conclusion upfront: stop making RAG the centerpiece of your résumé. It isn't useless. The problem is that interviewers have probably seen it too many times already.

## 1. Interviewers really don't ask much about it

After talking to people over the past few months, I've heard a fairly consistent story. When interviewers see a RAG knowledge-base project on a résumé, they usually skim it, casually ask why you chose that chunking strategy, listen to the standard answer, and move on to the next page.

Many candidates cannot handle deeper follow-up questions. Most of these projects were learned from someone else, so the reasoning behind the design often becomes another AI-generated answer to memorize. Why do I say that? Because in a copied project, AI may have produced everything from the implementation to the documentation.

The broader reason is simple. During the knowledge-base wave in early 2026, everyone was building one, and the projects looked almost identical. The hype arrived like a crayfish craze: suddenly everywhere, then cooling before real-world use could test it. No one wants to spend much time digging into something they have seen a hundred times.

## 2. RAG was support for a particular stage

FinTool founder Nicolas Bustamante wrote an article described as an obituary for RAG, and I think it made the point clearly. Think of a child learning to ride a bicycle. If that whole process represents AI's evolution, RAG was the first set of training wheels.

RAG emerged when GPT-3.5 had a 4,096-token context window while a real financial report could easily exceed 50,000 tokens. You could not fit the whole document, so you had to split it up and retrieve pieces. But as the pipeline grows—chunking, embedding, hybrid search, and reranking—a failure at any stage propagates to everything that follows.

## 3. AI's own context window has grown

Context windows have now reached the million-token scale. Claude Code skips a vector database and can follow references through tools such as grep and glob, often making the process faster and more accurate. The idea shifts from “find similar passages” to “work through the documents like an active learner.”

## 4. Does that mean learning RAG was a waste?

Of course not. Retrieval is not dead; it has simply become one tool in an agent's toolbox. You still need to understand it, including why AI can fail while using it.

## 5. So what should you build instead?

Move the focus from retrieval to agents: tool use, task planning, multi-step execution, and recovery from errors. Projects in this direction are much easier to distinguish from the crowd.

What should you build specifically? Which agent projects are worth recommending? I'll cover that in the next article.
