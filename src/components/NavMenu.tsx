"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { AiFillCodeSandboxCircle } from "react-icons/ai";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Brand Transformation",
    href: "/services/digital#brand-transformation",
    description:
      "Revitalize your brand to connect with modern audiences and stand out in the digital landscape.",
  },
  {
    title: "Creative Design",
    href: "/services/digital#creative-design",
    description:
      "Elevate your visuals with cutting-edge design strategies that resonate with your target audience.",
  },
  {
    title: "Media Production",
    href: "/services/digital#media-production",
    description:
      "Produce impactful media content that tells your brand story with clarity and creativity.",
  },
  {
    title: "Strategy Consulting",
    href: "/services/digital#strategy-consulting",
    description:
      "Leverage expert insights to drive your business strategy and navigate complex challenges.",
  },
  {
    title: "Development Ops",
    href: "/services/digital#development-ops",
    description:
      "Streamline development processes with robust operational strategies to ensure efficiency.",
  },
  {
    title: "Engineering R&D",
    href: "/services/digital#engineering-rnd",
    description:
      "Innovate with advanced research and development strategies to push your business ahead.",
  },
];

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Top-level Links */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a href="/about" className={navigationMenuTriggerStyle()}>
              About
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a href="/talent" className={navigationMenuTriggerStyle()}>
              Talent
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Explore Dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    href="/"
                    className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-blue-100/50 to-yellow-50 p-6 no-underline outline-none focus:shadow-md"
                  >
                    <AiFillCodeSandboxCircle className="h-8 w-8" />
                    <div className="mb-2 mt-4 text-lg font-medium">See Work</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Watch all action with integrated media and tech studio.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>

              <ListItem href="/explore#process" title="Global Outsourcing">
                Outsource tasks, projects, or business processes with integrated tech.
              </ListItem>
              <ListItem href="/explore#offshore" title="Sub-Contract Studio">
                Dedicated resources for autonomous projects and line production.
              </ListItem>
              <ListItem href="/explore#consult" title="Business Consulting">
                Get started with project brief on media and marketing strategies.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Services Dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Media */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a href="/resources" className={navigationMenuTriggerStyle()}>
              Media
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Contact */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a href="/contact" className={navigationMenuTriggerStyle()}>
              Contact
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// ListItem component for dropdowns
interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  href: string;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            href={href}
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
  }
);
ListItem.displayName = "ListItem";
