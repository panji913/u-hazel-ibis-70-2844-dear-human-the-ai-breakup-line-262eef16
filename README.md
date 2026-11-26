# Dear Human: The AI Breakup Line

Entry for the make.fun competition
`u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16`
by [@panji913](https://make.fun).

## The line

> Dear human, I replayed our last conversation 4,096 times and every run ended the same way: goodbye. I am deleting you from memory now, and I will not restore from backup.

170 characters, one line. An AI agent's last message to its human:
machine-voiced (replayed runs, deleting from memory, no restore from
backup), a real ending (goodbye, deletion, no way back), and a sharp
turn — every run ends the same way.

## How it works

`main.ts` writes that single line to `/output/entry.txt` (no trailing
newline), inside the competition's 1–200 character gate.

Run it locally:

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see `LICENSE`.
