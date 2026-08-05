import { ExternalLink } from "lucide-react";
import { researchPapers, patents } from "@/data/research";
import { siteConfig } from "@/data/site";
import { ResearchCard } from "@/components/ui/ResearchCard";
import { PatentCard } from "@/components/ui/PatentCard";
import { Button } from "@/components/ui/Button";

export function ResearchPatentsContent() {
  return (
    <div>
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Research &amp; Patents
        </h1>
        <p className="text-sm sm:text-base text-zinc-500 mt-2 max-w-2xl">
          7 IEEE-SCOPUS papers, Best Paper @ CCICT&apos;24, and 2 AI &amp;
          healthcare patents.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mb-10">
        <Button
          href={siteConfig.links.papersFolder}
          variant="outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
          All Papers (Drive)
        </Button>
        <Button
          href={siteConfig.links.patentsOverview}
          variant="outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
          Patents Overview
        </Button>
        <Button
          href={siteConfig.links.bestPaperAward}
          variant="outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
          Best Paper CCICT&apos;24
        </Button>
      </div>

      <h2 className="text-sm font-mono uppercase tracking-widest text-accent mb-5">
        Research Publications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-14">
        {researchPapers.map((paper, index) => (
          <ResearchCard key={paper.id} paper={paper} index={index} />
        ))}
      </div>

      <h2 className="text-sm font-mono uppercase tracking-widest text-amber-400 mb-5">
        Patents
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {patents.map((patent, index) => (
          <PatentCard key={patent.id} patent={patent} index={index} />
        ))}
      </div>
    </div>
  );
}
