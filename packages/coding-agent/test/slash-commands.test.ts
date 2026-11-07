import { describe, expect, it } from "vitest";
import { BUILTIN_SLASH_COMMANDS, isQuitCommand } from "../src/core/slash-commands.ts";

describe("/exit alias", () => {
	it("quits for both spellings", () => {
		expect(isQuitCommand("/quit")).toBe(true);
		expect(isQuitCommand("/exit")).toBe(true);
	});

	it("ignores text that is not the command", () => {
		for (const text of ["/quit now", "/exiting", "/q", "exit", ""]) {
			expect(isQuitCommand(text)).toBe(false);
		}
	});

	it("is offered in the builtin command list", () => {
		expect(BUILTIN_SLASH_COMMANDS.map((command) => command.name)).toContain("exit");
	});
});
