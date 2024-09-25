import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/app/components/ui/resizeable";
import React from "react";
import { Bot, LayoutDashboard } from "lucide-react";

function WorkspaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ResizablePanelGroup
      direction={"horizontal"}
      className={"h-screen w-screen"}
    >
      <ResizablePanel
        defaultSize={5}
        maxSize={8}
        minSize={5}
        className={
          "h-screen overflow-y-scroll bg-stone-200 flex flex-col items-center gap-y-4 py-10"
        }
      >
        <LayoutDashboard />
        <Bot />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={96} minSize={92}>
        {children}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default WorkspaceLayout;
