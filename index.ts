#!/usr/bin/env bun

import { progress } from "@clack/prompts";
import { Command } from "commander";
import { argv } from "node:process";
import { runWakeup } from "./tui/wakeup";

const program =new Command();

program
  .name("rishcodeclaw-build")
  .description("A build tool for RishCodeClaw projects.")
  .version("0.1.0");

program
    .command("wakeup")
    .description("SHOW THE BANNER AND PICK CLI OR TELEGRAM MODE.")
    .action(
        async () => {
            await runWakeup();
        }
    );

    await program.parseAsync(process.argv);