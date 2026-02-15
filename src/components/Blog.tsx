import { useState } from "react";
import { BookOpen, X } from "lucide-react";

const notes = [
  {
    title: "What is Spark Shuffle and How to Optimize It",
    summary: "Understanding shuffle operations in Apache Spark, why they are expensive, and practical techniques to minimize shuffle overhead in large-scale pipelines.",
    tags: ["Spark", "PySpark", "Performance"],
    content: `**Spark Shuffle** occurs when data needs to be redistributed across partitions — typically during operations like \`groupByKey\`, \`reduceByKey\`, or \`join\`.\n\n### Why it matters\nShuffle is one of the most expensive operations in Spark because it involves disk I/O, serialization, and network transfer.\n\n### Optimization Tips\n- Use \`reduceByKey\` instead of \`groupByKey\`\n- Broadcast small tables with \`broadcast()\`\n- Tune \`spark.sql.shuffle.partitions\`\n- Use bucketing for repeated joins`,
  },
  {
    title: "Handling Data Skew in Distributed Systems",
    summary: "Data skew causes uneven partition sizes leading to slow tasks. Learn strategies like salting, repartitioning, and adaptive query execution.",
    tags: ["Spark", "SQL", "Big Data"],
    content: `**Data Skew** happens when certain keys have disproportionately more data than others, causing some tasks to take much longer.\n\n### Common Fixes\n- **Salting**: Add a random prefix to skewed keys, aggregate, then remove\n- **Adaptive Query Execution (AQE)**: Enable \`spark.sql.adaptive.enabled\`\n- **Repartition**: Manually redistribute data\n- **Broadcast joins**: For small-large table joins`,
  },
  {
    title: "Azure Data Factory vs Apache Airflow",
    summary: "A comparison of two popular orchestration tools — ADF for Azure-native workflows and Airflow for code-first, platform-agnostic pipelines.",
    tags: ["Azure", "ADF", "Airflow"],
    content: `### Azure Data Factory\n- GUI-based, low-code\n- Deep Azure integration\n- Managed service, no infra overhead\n\n### Apache Airflow\n- Python-first, DAG-based\n- Platform agnostic\n- Highly extensible with custom operators\n\n### When to choose?\n- **ADF**: Azure-heavy environments, quick setup\n- **Airflow**: Complex logic, multi-cloud, full control`,
  },
  {
    title: "What is RAG Explained Simply",
    summary: "Retrieval Augmented Generation combines search with AI generation — fetch relevant docs first, then let the LLM answer using that context.",
    tags: ["AI", "RAG", "LLM"],
    content: `**RAG (Retrieval Augmented Generation)** is a pattern where:\n1. A user asks a question\n2. Relevant documents are retrieved from a vector database\n3. The LLM generates an answer using the retrieved context\n\n### Why RAG?\n- Reduces hallucinations\n- Keeps answers grounded in real data\n- No need to fine-tune the model\n\n### Common Stack\nEmbeddings → Vector DB (Pinecone/Weaviate) → LLM (GPT/Claude)`,
  },
  {
    title: "Spark Memory Management & Tuning",
    summary: "Deep dive into Spark's unified memory model, executor memory allocation, and key configurations for performance tuning.",
    tags: ["Spark", "PySpark", "Performance"],
    content: `### Unified Memory Model\nSpark divides executor memory into:\n- **Storage Memory**: cached data\n- **Execution Memory**: shuffles, joins, aggregations\n\nThey share a unified region and can borrow from each other.\n\n### Key Configs\n- \`spark.executor.memory\`\n- \`spark.memory.fraction\` (default 0.6)\n- \`spark.memory.storageFraction\` (default 0.5)\n\n### Tips\n- Monitor via Spark UI → Executors tab\n- Avoid collecting large datasets to driver\n- Use \`persist(StorageLevel.MEMORY_AND_DISK)\``,
  },
];

const Blog = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="blog" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Data Engineering <span className="text-gradient">Notes</span>
        </h2>
        <p className="text-muted-foreground mb-2 max-w-xl">
          Technical deep-dives and learnings from building data systems.
        </p>
        <div className="w-16 h-1 bg-primary rounded mb-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.slice(0, 5).map((note, i) => (
            <div
              key={note.title}
              className="group border border-border rounded-lg p-5 card-hover bg-card flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={18} className="text-primary" />
                <span className="text-xs font-mono text-muted-foreground">NOTE #{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">{note.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">{note.summary}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {note.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setOpenIndex(i)}
                className="text-sm border border-primary text-primary px-4 py-1.5 rounded hover:bg-primary hover:text-primary-foreground transition-all duration-200 self-start"
              >
                Read More
              </button>
            </div>
          ))}

          <a
            href="/notes" // or /blog if using Next.js routing
            className="group border border-primary/40 rounded-lg p-5 bg-primary/5 backdrop-blur flex flex-col items-center justify-center hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all"
          >
            View All Notes
          </a>
        </div>


        {/* Modal */}
        {openIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm" onClick={() => setOpenIndex(null)}>
            <div
              className="bg-card border border-border rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setOpenIndex(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                <X size={20} />
              </button>
              <div className="font-mono text-xs text-primary mb-3 bg-primary/10 inline-block px-2 py-1 rounded">
                NOTE #{String(openIndex + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{notes[openIndex].title}</h3>
              <div className="prose prose-invert prose-sm max-w-none text-muted-foreground leading-relaxed whitespace-pre-line font-mono text-sm bg-secondary/50 rounded-lg p-4 border border-border">
                {notes[openIndex].content}
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {notes[openIndex].tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
