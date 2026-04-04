interface ArticleBodyProps {
  content: string;
}

export function ArticleBody({ content }: ArticleBodyProps) {
  const sections = content.split("\n\n").filter(Boolean);

  return (
    <div className="flex flex-col gap-6 py-4 pb-12">
      {sections.map((section, i) => {
        // Heading
        if (section.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="font-heading font-bold text-[30px] tracking-[-0.75px] leading-[36px] text-black pt-10"
            >
              {section.replace("## ", "")}
            </h2>
          );
        }

        // Blockquote
        if (section.startsWith("> ")) {
          const quoteText = section.replace(/^> /gm, "").replace(/"/g, "");
          return (
            <div
              key={i}
              className="bg-muted rounded-[2px] p-10 relative overflow-hidden"
            >
              <p className="italic text-[24px] text-black tracking-[-0.16px] leading-[33px]">
                &ldquo;{quoteText}&rdquo;
              </p>
            </div>
          );
        }

        // Regular paragraph — first paragraph gets drop cap
        if (i === 0) {
          return (
            <p
              key={i}
              className="text-[18px] text-[#474747] tracking-[-0.16px] leading-[33.3px] first-letter:text-[34px] first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:leading-[1]"
            >
              {section}
            </p>
          );
        }

        return (
          <p
            key={i}
            className="text-[18px] text-[#474747] tracking-[-0.16px] leading-[33.3px]"
          >
            {section}
          </p>
        );
      })}
    </div>
  );
}
