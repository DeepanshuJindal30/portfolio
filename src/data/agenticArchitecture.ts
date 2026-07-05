export interface ArchitectureGroup {
  id: string;
  label: string;
  color: string;
}

export interface ArchitectureFlowNode {
  id: string;
  label: string;
  detail: string;
  group: string;
}

export const agenticArchitectureGroups: ArchitectureGroup[] = [
  { id: "ingest", label: "Ingest", color: "#38bdf8" },
  { id: "intelligence", label: "Validate & AI", color: "#a78bfa" },
  { id: "generate", label: "Generate", color: "#fb923c" },
  { id: "execute", label: "Execute", color: "#34d399" },
];

export const agenticArchitectureNodes: ArchitectureFlowNode[] = [
  {
    id: "jira-fetch",
    label: "Jira Fetch",
    detail: "PAT auth · proxy-aware · issue + comments + attachments",
    group: "ingest",
  },
  {
    id: "extract",
    label: "API Extract",
    detail: "curl / URL / method blocks · IPE · IAT · FIT bucketing",
    group: "ingest",
  },
  {
    id: "clarify",
    label: "LLM Clarify",
    detail: "Structured action schema · fix headers & payloads",
    group: "intelligence",
  },
  {
    id: "validate",
    label: "Live Validation",
    detail: "OOID/AOID overrides · 2xx checks · pre-flight warnings",
    group: "intelligence",
  },
  {
    id: "bruno-gen",
    label: "Bruno Gen",
    detail: ".bru collections · env profiles · method folders",
    group: "generate",
  },
  {
    id: "vugen-gen",
    label: "VuGen Gen",
    detail: "C action files · correlation rules · params CSV",
    group: "generate",
  },
  {
    id: "scenario",
    label: "Scenario Build",
    detail: "LRS controller file · vuser autoscaling from Jira hints",
    group: "generate",
  },
  {
    id: "bruno-run",
    label: "Bruno Run",
    detail: "CLI + PyWinAuto UI fallback · normalized results",
    group: "execute",
  },
  {
    id: "vugen-run",
    label: "VuGen Replay",
    detail: "Compile · smoke replay · process cleanup",
    group: "execute",
  },
  {
    id: "controller",
    label: "Controller",
    detail: "Open LRS scenario · LoadRunner execution ready",
    group: "execute",
  },
];

export const agenticArchitectureHighlights = [
  "13-phase checkpoint state machine — resume from validation, Bruno, or VuGen",
  "Multi-strategy extraction from Jira tickets (10–40 APIs per run)",
  "Whisper video evidence pipeline for API mention enrichment",
];
