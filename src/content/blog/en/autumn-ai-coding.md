---
title: "Overwhelmed by an Autumn AI Coding Task? Don't Start Coding Yet"
description: "A practical order for AI Coding tasks: make a checklist, run the starter project, verify the key paths, compare independent attempts, and submit the version you tested."
lang: en
path: "autumn-ai-coding"
translationKey: "autumn-ai-coding"
publishedAt: 2026-10-13T12:00:00Z
tags: ["AI Coding", "Campus Recruiting", "Interviews"]
category: method
---

The part of an AI Coding task that makes people panic is often the README: a dozen or more endpoints, entity relationships, and a long list of business rules.

My advice is to spend your time keeping a runnable version, verifying the key paths, and fixing concrete errors.

Here's the order I'd follow:

## ① Have AI read the task and produce a checklist

Ask it to list the endpoints, inputs and outputs, business rules, exceptional cases, and startup commands.

You don't have to read every word of the README, but you should know what the task asks you to deliver. Otherwise, AI may work quickly while missing half the requirements.

## ② Start from the provided code and get the original project running

Run the existing install, build, and smoke-test commands first, and record the results.

If the starter code runs, don't let AI make sweeping changes to the directories and configuration just to “clean up the architecture.”

## ③ Keep the prompt simple, but make acceptance criteria specific

For example, you can say:

> Read the README and implement the requirements using the existing code. Keep the project structure. When finished, run the build and existing tests, then list the completed endpoints, uncovered rules, and any failures.

When something fails, give AI the command, the full error, and the relevant files. That's more useful than saying only “it failed to run.”

## ④ If time allows, try multiple independent copies

Let each session work in its own copy so you can try different implementations in parallel.

Run the same tests on each one, then choose the version with the more reliable results.

## ⑤ Aim to pass as many test cases as possible

At a minimum, check whether it starts, whether all endpoints exist, whether key business flows work, and whether edge cases are handled.

The number of passing tests matters. Before submitting, also make sure the version you put back in the root directory is the one you actually tested.

As for language, I strongly recommend TypeScript because AI is best at it. If you haven't been getting high scores, maybe changing languages will improve your results!

That's what I wanted to share today. If you found it useful, follow along, and I wish you a great October recruiting season!
