"use client";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/spotlight-card";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { trackEvent } from "@/lib/mixpanel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const trackClick = () => {
    trackEvent('PROJECT_CLICKED', {
      title
    })
  }
  return (
    <SpotlightCard className="flex h-full flex-col">
      <Link
        href={href || "#"}
        target={"_blank"}
        onClick={trackClick}
        className={cn("block cursor-pointer overflow-hidden border-b", className)}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            sizes="(min-width: 640px) 340px, 100vw"
            className="h-40 w-full overflow-hidden object-cover object-top transition-transform duration-500 ease-out group-hover/spotlight:scale-105 motion-reduce:transform-none"
          />
        )}
      </Link>
      <CardHeader className="px-3 pt-3">
        <div className="space-y-1">
          <CardTitle className="text-base">{title}</CardTitle>
          <time className="font-mono text-xs text-muted-foreground">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-3">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="rounded-full px-2 py-0 text-[10px] font-medium"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-3 pb-3">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 rounded-full px-2.5 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </SpotlightCard>
  );
}
