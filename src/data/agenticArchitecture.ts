export type AgenticNodeIcon =
  | "jira"
  | "splunk"
  | "video"
  | "bridge"
  | "extract"
  | "llm"
  | "validate"
  | "correlate"
  | "bruno"
  | "vugen"
  | "controller"
  | "run"
  | "checkpoint";

export interface ArchitectureFlowNode {
  id: string;
  label: string;
  detail: string;
  phase?: string;
  icon: AgenticNodeIcon;
  tools?: string[];
}

export interface ArchitectureLane {
  id: string;
  label: string;
  color: string;
  nodes: ArchitectureFlowNode[];
}

/** Compact summary shown when collapsed */
export const agenticArchitectureGroups = [
  { id: "sources", label: "Sources", color: "#38bdf8" },
  { id: "orchestrate", label: "Orchestrate", color: "#a78bfa" },
  { id: "generate", label: "Generate", color: "#fb923c" },
  { id: "execute", label: "Execute", color: "#34d399" },
];

/**
 * Connected end-to-end flow from the consolidated LR Agentic AI docs.
 */
export const agenticArchitectureLanes: ArchitectureLane[] = [
  {
    id: "sources",
    label: "Inputs",
    color: "#38bdf8",
    nodes: [
      {
        id: "jira",
        label: "Jira Ticket",
        detail: "Issue · comments · attachments",
        phase: "01–02",
        icon: "jira",
        tools: ["Jira", "PAT"],
      },
      {
        id: "splunk",
        label: "Splunk Catalog",
        detail: "Excel · Bitbucket · MSSQL",
        phase: "A",
        icon: "splunk",
        tools: ["Splunk", "Excel"],
      },
      {
        id: "video",
        label: "Video Evidence",
        detail: "Whisper transcript · API mentions",
        phase: "opt",
        icon: "video",
        tools: ["Whisper"],
      },
    ],
  },
  {
    id: "bridge",
    label: "Bridge",
    color: "#818cf8",
    nodes: [
      {
        id: "export",
        label: "Workload Export",
        detail: "≥80% success · validated schemas",
        phase: "bridge",
        icon: "bridge",
        tools: ["FastAPI"],
      },
    ],
  },
  {
    id: "orchestrate",
    label: "Agent Core",
    color: "#a78bfa",
    nodes: [
      {
        id: "extract",
        label: "Multi-Strategy Extract",
        detail: "curl · URL+context · tables",
        phase: "03",
        icon: "extract",
        tools: ["Python"],
      },
      {
        id: "clarify",
        label: "LLM Clarification",
        detail: "Structured JSON · human-in-loop",
        phase: "04",
        icon: "llm",
        tools: ["OpenAI", "Azure"],
      },
      {
        id: "validate",
        label: "Live Validation",
        detail: "3-level overrides · IPE/IAT/FIT",
        phase: "05",
        icon: "validate",
        tools: ["HTTPX"],
      },
    ],
  },
  {
    id: "generate",
    label: "Generate",
    color: "#fb923c",
    nodes: [
      {
        id: "correlate",
        label: "Correlation Infer",
        detail: "web_reg_save_param · UUID/token",
        phase: "06",
        icon: "correlate",
        tools: ["VuGen"],
      },
      {
        id: "bruno",
        label: "Bruno Collections",
        detail: ".bru files · env profiles",
        phase: "07",
        icon: "bruno",
        tools: ["Bruno"],
      },
      {
        id: "vugen",
        label: "VuGen C Scripts",
        detail: "Action_NNN.c · params CSV",
        phase: "08",
        icon: "vugen",
        tools: ["VuGen", "C"],
      },
      {
        id: "scenario",
        label: "Controller Scenario",
        detail: "LRS · VUser autoscaling",
        phase: "09–10",
        icon: "controller",
        tools: ["LoadRunner"],
      },
    ],
  },
  {
    id: "execute",
    label: "Execute & Resume",
    color: "#34d399",
    nodes: [
      {
        id: "run",
        label: "CLI / GUI Run",
        detail: "Bruno + VuGen + Controller",
        phase: "11–12",
        icon: "run",
        tools: ["PyWinAuto"],
      },
      {
        id: "checkpoint",
        label: "Checkpoint Resume",
        detail: "post-validation · Bruno · VuGen",
        phase: "13",
        icon: "checkpoint",
        tools: ["State"],
      },
    ],
  },
];

export const agenticFlowSequence = agenticArchitectureLanes.flatMap(
  (lane) => lane.nodes
);

export const agenticArchitectureHighlights = [
  "4–6 hrs → 20–30 min (~90% setup reduction) across ADP perf / QA teams",
  "Splunk Catalog (source of truth) + LR Agentic AI (ticket orchestration)",
  "13-phase state machine with artifact-backed checkpoint resume",
];

export const agenticStackRail = [
  {
    id: "llm",
    title: "Constrained LLM",
    detail: "OpenAI / Azure · action schema only",
    color: "violet" as const,
  },
  {
    id: "api",
    title: "FastAPI Orchestrator",
    detail: "~32 endpoints · specialist modules",
    color: "sky" as const,
  },
  {
    id: "desktop",
    title: "PyWinAuto + Playwright",
    detail: "Bruno · VuGen · Controller UI",
    color: "emerald" as const,
  },
];
