import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import { ReactNode } from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NewLayout>
        {children}
        <ScrollRestoration />
        <Scripts />
        </NewLayout>
      </body>
    </html>
  );
}

function NewLayout({children}:{children: ReactNode}){
  return(
    <>
    <nav className="px-10 pt-5">
      <Link to="/" prefetch="intent" className="text-2xl font-semibold">
      Move <span className="text-teal-500">DB</span>
      </Link>

    </nav>
    <main>{children}</main>
    </>
  )
}

export default function App() {
  return <Outlet />;
}
