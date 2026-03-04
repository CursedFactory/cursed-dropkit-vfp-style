---
name: vfp-style
description: Coding style and implementation conventions for source-code work; use when editing or generating code to enforce readability, naming consistency, safe error handling, and style-first refactor decisions.
---

## Core coding baseline

- Favor readable, explicit code over clever shortcuts.
- Keep functions focused and avoid hidden side effects.
- Avoid dead code, unused imports, and speculative abstractions.
- Keep naming consistent:
  - `PascalCase` for types
  - `camelCase` for values/functions
  - `UPPER_SNAKE_CASE` for constants
- Handle errors with context; do not swallow exceptions silently.
- Never log secrets or credentials.

## Logging and CLI output style

- Keep default log output user-friendly, especially at `info` level.
- Prefer short, plain-language messages over deep prefixes.
- Prefer multi-line CLI output when readability improves.
- Avoid metadata-heavy blobs unless they materially help debug failures.
- Reserve verbose context for `debug`/`trace` when possible.
- Example `info`: `Started session tinyverse_123 with OpenCode`.
- Example `debug`: `spawn details: session=tinyverse_123 prompt=true agent_args=false`.

## Engineering principles

- Path Minimalism:
  - Prefer one maintained hot path per workflow.
  - Remove dead or duplicate approaches once a supported path is verified.
  - Avoid backup implementations "just in case" when one clean path is sufficient.
  - Optimize for easier human navigation: fewer entrypoints and clearer ownership.
- DRY:
  - Keep a single source of truth for shared behavior, rules, and transformations.
  - Extract reusable helpers/modules instead of repeating logic.
  - Centralize constants, validation rules, and parsing/serialization logic.

## Rust CLI layout conventions

- Prefer folder-based modules for Rust CLI code.
- Use one command folder per command under `tinyverse_cli/src/commands/`.
- Keep files focused and human-readable; usually one primary type per file.
- Use `fn execute(args) -> anyhow::Result<()>` as the default command handler shape.
- Keep command argument structs in `args.rs` when a command has options/positionals.
- Keep command behavior in `command.rs`; keep leaf subcommand behavior in dedicated files.
- Keep root clap wiring in `tinyverse_cli/src/root.rs` and runtime dispatch in `tinyverse_cli/src/run.rs`.
- Prefer short imports and limited namespaces over deep fully qualified paths when local `use` or `super::` improves clarity.

## Refactor decision heuristics

When touching existing code:

1. Remove obvious dead code and stale branches first.
2. Simplify control flow before introducing new abstractions.
3. Consolidate duplicated logic into one clear helper.
4. Preserve behavior unless explicitly asked to change semantics.
5. Prefer small, reviewable edits that increase clarity and reduce risk.
