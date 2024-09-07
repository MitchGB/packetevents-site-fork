import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function PageTitleButtons() {
  return (
    <>
      <div className="flex justify-center space-x-5">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://modrinth.com/plugin/packetevents"
        >
          <Button variant="secondary">Downloads</Button>
        </a>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          packetevents
                        </div>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://docs.packetevents.com/getting-started"
                    title="Installation"
                  >
                    Installing PacketEvents as a Maven/Gradle dependency.
                  </ListItem>
                  <ListItem
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://docs.packetevents.com/"
                    title="Introduction"
                  >
                    Learn of the essentials provided by PacketEvents.
                  </ListItem>
                  <ListItem
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://docs.packetevents.com/advanced-packetevents-example-combining-our-knowledge"
                    title="Advanced Examples"
                  >
                    Deepen your PacketEvents knowledge by studying some advanced
                    examples.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <Button variant="outline">
              <ul>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
            </Button>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}
