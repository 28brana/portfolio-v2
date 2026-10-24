"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  skills?: readonly string[];
  period: string;
  description?: string;
  open?: boolean;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  open = false,
  skills
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(open);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      target={href ? "_blank":"_self"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex rounded-xl border border-transparent bg-transparent p-3 -mx-3 transition-colors hover:border-border hover:bg-card/60 hover:backdrop-blur-sm">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-white">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="font-mono text-xs tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {subtitle && <div className="mt-1 font-sans text-xs text-muted-foreground">{subtitle}</div>}
          </CardHeader>

          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 overflow-hidden text-xs text-muted-foreground sm:text-sm"
            >
              <ul className="list-disc pl-5 space-y-1.5 marker:text-brand">
                {description.split("\n").map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Skills Section */}
          {skills && skills.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {skills?.map((skill, index) => (
                <Badge key={index} variant="secondary" className="rounded-full px-2 py-0.5 text-[10px] font-medium">
                  {skill}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
};
