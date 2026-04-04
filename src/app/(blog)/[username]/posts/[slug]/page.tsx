import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getPostBySlug, mockAuthors } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { AuthorBar } from "@/components/features/posts/author-bar";
import { ArticleBody } from "@/components/features/posts/article-body";
import { ArticleSidebar } from "@/components/features/posts/article-sidebar";
import { ArticleFooter } from "@/components/features/posts/article-footer";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ username: string; slug: string }>;
}) {
  const { username, slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const author = mockAuthors.find((a) => a.id === post.authorId);

  return (
    <div className="min-h-screen px-8 pt-24 pb-24">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left sidebar - Back nav */}
        <div className="lg:col-span-2 pt-12">
          <Link
            href={`/${username}`}
            className="inline-flex items-center gap-2 font-heading text-[10px] text-text-tertiary tracking-[1px] uppercase hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-[9px]" />
            Back to Archive
          </Link>
        </div>

        {/* Main content */}
        <div className="lg:col-span-8">
          <article className="bg-white rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] p-8 sm:p-16">
            {/* Header */}
            <div className="flex flex-col gap-6">
              <Badge variant="status">{post.category}</Badge>

              <h1 className="text-[36px] sm:text-[48px] font-bold tracking-[-1.2px] leading-[1] pb-4">
                {post.title}
              </h1>

              {author && (
                <AuthorBar author={author} readTime={post.readTime} />
              )}
            </div>

            {/* Hero Image */}
            {post.coverImage && (
              <figure className="flex flex-col gap-4 mt-12">
                <div className="relative h-[300px] sm:h-[500px] rounded-[2px] overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-white mix-blend-saturation rounded-[2px]" />
                </div>
                <figcaption className="text-right text-[10px] italic text-text-tertiary tracking-[0.25px]">
                  Fig 1.0 — 도심 속 구조적 침묵 (Structural Silence in the
                  Urban Core).
                </figcaption>
              </figure>
            )}

            {/* Body */}
            {post.content && <ArticleBody content={post.content} />}

            {/* Footer */}
            <ArticleFooter tags={post.tags} commentCount={24} />
          </article>
        </div>

        {/* Right sidebar */}
        <div className="lg:col-span-2 hidden lg:block">
          <ArticleSidebar post={post} />
        </div>
      </div>
    </div>
  );
}
