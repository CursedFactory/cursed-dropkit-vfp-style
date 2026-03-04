# cursed-dropkit-vfp-style

Dropkit package for VFP-style coding conventions and style-first refactor execution.

## Included agent

- `style_refactor` (`mode: subagent`): applies style-oriented, behavior-safe refactors to existing code.

## Included skill

- `vfp-style`: coding style, logging style, engineering principles, and refactor heuristics.

## Use in OpenCode plugin file

```ts
import { createVfpStyleDropkitPlugin } from "@cursed-factory/dropkit-vfp-style";

export const VfpStyleDropkit = createVfpStyleDropkitPlugin({
  service: "dropkit-vfp-style",
  namespace: "dropkit-vfp-style",
});
```

## Agent prompt: install this dropkit in OpenCode

Copy/paste this prompt to an agent:

```md
Install `@cursed-factory/dropkit-vfp-style` into my OpenCode setup.

First ask me where to install it:
1) System level (`~/.config/opencode`)
2) Project level (`.opencode` in current repo)
3) Custom config dir path

After I choose, do all setup steps end-to-end:
- Add dependency in `<CONFIG_DIR>/package.json`:
  - `"@cursed-factory/dropkit-vfp-style": "<VERSION_OR_SOURCE>"`
- Add plugin wrapper file at `<CONFIG_DIR>/plugins/vfp_style_dropkit.ts`:
  - import `createVfpStyleDropkitPlugin` from `@cursed-factory/dropkit-vfp-style`
  - export plugin with:
    - `service: "dropkit-vfp-style"`
    - `namespace: "dropkit-vfp-style"`
- Run `bun install --cwd <CONFIG_DIR>`
- Verify by importing wrapper:
  - `bun --cwd <CONFIG_DIR> -e "import('./plugins/vfp_style_dropkit.ts').then(() => console.log('ok'))"`
- Confirm that style agent/skills are available.

If I choose custom path, use that path exactly.
If package source is not published npm, ask whether to use `file:`, `git+https`, or `github:` source string.
```

Relevant OpenCode docs:

- https://opencode.ai/docs/
- https://opencode.ai/docs/config/
- https://opencode.ai/docs/plugins/
- https://opencode.ai/docs/agents/

Reference snippets (embedded so agents do not need web fetch):

```jsonc
// OpenCode config locations:
// - Global: ~/.config/opencode/opencode.json
// - Project: <repo>/opencode.json
// - Custom dir: OPENCODE_CONFIG_DIR=/path/to/config-dir
```

```text
Plugin files auto-load from:
- ~/.config/opencode/plugins/
- .opencode/plugins/
```

```json
{
  "$schema": "https://opencode.ai/config.json",
  "plugin": ["@cursed-factory/dropkit-vfp-style"]
}
```

```markdown
---
description: Refactor existing source files to enforce coding style
mode: subagent
---
```

```text
Agents are defined in markdown files under:
- ~/.config/opencode/agents/
- .opencode/agents/
```
