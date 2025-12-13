"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { FiZap, FiBookOpen, FiBook } from "react-icons/fi";
import { generateSupersignal } from "@/server/supersignal";
import { LucideClipboardCopy, LucideCopyCheck } from "lucide-react";

export default function SupersqadSignal() {
  const [signal, setSignal] = useState<string>("");
  const [words, setWords] = useState<string[]>([]);
  const [defs, setDefs] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [copiedFlash, setCopiedFlash] = useState(false);
  const [showDefs, setShowDefs] = useState(false);
  const [showHistory, setShowHistory] = useState(true);
  const [isPending, startTransition] = useTransition();

  // Generate new supersignal
  const generate = () => {
    startTransition(async () => {
      const res = await generateSupersignal();
      setSignal(res.phrase);
      setWords(res.words);
      setDefs(res.defs);
      setShowDefs(false);
      setHistory((prev) => [res.phrase, ...prev].slice(0, 5));
    });
  };

  // Copy supersignal to clipboard with branding
  const copy = async () => {
    if (!signal) return;
    const textToCopy = `supersqad signals: ${signal}`;
    await navigator.clipboard.writeText(textToCopy);
    setCopiedFlash(true);
    setTimeout(() => setCopiedFlash(false), 3000);
  };

  return (
    <section className="max-w-5xl mx-auto py-12 px-6">
      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT: Signal & Controls */}
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Supersqad Signals
          </p>

          {/* Signal Display */}
          <div
            className={`flex items-center gap-3 px-4 py-3 border rounded-md transition-all duration-500 ${
              copiedFlash ? "bg-amber-100 border-sky-400" : ""
            }`}
          >
            <FiZap className="text-lg" />
            <div className="flex-1 select-all text-sm font-medium">
              {isPending ? (
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Icons.spinner className="h-4 w-4 animate-spin" />
                  receiving super signals…
                </span>
              ) : signal ? (
                signal
              ) : (
                <span className="text-muted-foreground">
                  super.brand.signal
                </span>
              )}
            </div>

            {signal && (
              <button
                onClick={copy}
                className="text-xs flex items-center gap-1 text-blue-600 hover:text-blue-800"
              >
                {copiedFlash ? (
                  <LucideCopyCheck size={14} />
                ) : (
                  <LucideClipboardCopy size={14} />
                )}
                {copiedFlash ? "Copied" : "Copy"}
              </button>
            )}
          </div>

          {/* Buttons Row */}
          <div className="flex justify-between items-center">
            {/* Generate Button */}
            <Button
              size="default"
              onClick={generate}
              disabled={isPending}
              className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white"
            >
              {isPending && <Icons.spinner className="h-4 w-4 animate-spin" />}
              {isPending ? "Generating..." : "Generate"}
            </Button>

            {/* Show/Hide meanings */}
            {defs.length > 0 && (
              <button
                onClick={() => setShowDefs(!showDefs)}
                className="text-xs flex items-center gap-1 text-muted-foreground hover:text-zinc-900"
              >
                {showDefs ? <FiBookOpen /> : <FiBook />}
                {showDefs ? "Hide meanings" : "Show meanings"}
              </button>
            )}

            {/* Show/Hide history */}
            {history.length > 1 && (
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="text-xs text-blue-500 underline"
              >
                {showHistory ? "Hide history" : "Show history"}
              </button>
            )}
          </div>

          {/* History List */}
          {showHistory && history.length > 1 && (
            <div className="pt-4 text-xs text-muted-foreground space-y-1">
              {history.slice(1).map((h) => (
                <div key={h}>{h}</div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: Definitions */}
        {showDefs && defs.length > 0 && (
          <div className="border-l pl-6 space-y-2 text-sm bg-gray-50 p-4 rounded">
            {words.map((w, i) => (
              <div key={w} className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">&bull;</span>
                <div>
                  <strong>{w}</strong> —{" "}
                  <span className="text-muted-foreground">{defs[i]}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
