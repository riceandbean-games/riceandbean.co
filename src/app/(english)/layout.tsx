import type { ReactNode } from "react";
import { DocumentLayout, siteMetadata, siteViewport } from "@/components/layout/DocumentLayout";

export const metadata = siteMetadata("en");
export const viewport = siteViewport;

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <DocumentLayout language="en">{children}</DocumentLayout>;
}
