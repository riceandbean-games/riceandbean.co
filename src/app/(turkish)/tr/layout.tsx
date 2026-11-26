import type { ReactNode } from "react";
import { DocumentLayout, siteMetadata, siteViewport } from "@/components/layout/DocumentLayout";

export const metadata = siteMetadata("tr");
export const viewport = siteViewport;

export default function TurkishLayout({ children }: { children: ReactNode }) {
  return <DocumentLayout language="tr">{children}</DocumentLayout>;
}
