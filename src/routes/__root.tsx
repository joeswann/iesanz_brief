import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";

import appCss from "../styles/app.css?url";

import type { QueryClient } from "@tanstack/react-query";

import type { TRPCRouter } from "@/integrations/trpc/router";
import type { TRPCOptionsProxy } from "@trpc/tanstack-react-query";
import LayoutDefault from "@/components/layout/LayoutDefault";
import { SiteSwitcher } from "@/components/layout/SiteSwitcher";

interface MyRouterContext {
  queryClient: QueryClient;

  trpc: TRPCOptionsProxy<TRPCRouter>;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "IESANZ Wireframe",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <LayoutDefault>{children}</LayoutDefault>
        <SiteSwitcher />
        {/* <TanStackDevtools */}
        {/*   config={{ */}
        {/*     position: "bottom-right", */}
        {/*   }} */}
        {/*   plugins={[ */}
        {/*     { */}
        {/*       name: "Tanstack Router", */}
        {/*       render: <TanStackRouterDevtoolsPanel />, */}
        {/*     }, */}
        {/*     TanStackQueryDevtools, */}
        {/*   ]} */}
        {/* /> */}
        <Scripts />
      </body>
    </html>
  );
}
