# Openclaw

Openclaw is an AI-powered developer toolkit for automating codebase workflows from the command line. It provides structured CLI modes for agent-driven edits, goal planning, and ask-style codebase exploration using OpenRouter-backed AI models.

## Key Features

- **Wakeup launcher** with interactive mode selection
- **Agent Mode** for objective-driven workspace changes with approval gating
- **Plan Mode** for breaking goals into execution steps and running AI-guided actions
- **Ask Mode** for codebase queries, file search, and answer saving
- **Telegram mode placeholder** for future bot integration
- Uses **OpenRouter** as the AI provider and supports model configuration via environment variables

## Requirements

- `bun`
- `OPENROUTER_API_KEY`
- `OPENROUTER_DEFAULT_MODEL`

## Install

```bash
bun install
```

## Run

```bash
export OPENROUTER_API_KEY="your_api_key"
export OPENROUTER_DEFAULT_MODEL="your_model_id"
bun index.ts wakeup
```

Or, if installed globally from this package, use:

```bash
rishcodeclaw-build wakeup
```

## Modes

- `CLI Mode`
  - `Agent Mode` — craft and approve codebase edits driven by a natural language goal
  - `Plan Mode` — generate a plan, select steps, and execute AI-guided actions
  - `Ask Mode` — query the codebase, search files, and optionally save responses
- `Telegram Mode`
  - currently starts a placeholder flow and can be extended for chat-based automation

## Configuration

Set the environment variables before running the tool:

```bash
export OPENROUTER_API_KEY="your_api_key"
export OPENROUTER_DEFAULT_MODEL="openai/gpt-4o-mini"
```

## Project Structure

- `index.ts` — CLI entrypoint and wakeup launcher
- `tui/` — terminal UI utilities and banner flow
- `modes/` — CLI, agent, ask, and plan workflows
- `ai/` — OpenRouter model provider configuration

## Notes

Openclaw is designed as a developer tooling prototype. Agent operations stage changes for review before applying them to the workspace, so you keep control over edits.
