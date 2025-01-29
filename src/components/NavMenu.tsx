"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { AiFillCodeSandboxCircle } from "react-icons/ai"

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
    description: "Innovate with advanced research and development strategies to push your business ahead.",
  },
]

export function NavMenu () {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
        <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/talent" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Talent
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <Link href="/explore" legacyBehavior passHref>
          <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-100/50 to-yellow-50 p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <AiFillCodeSandboxCircle className="h-8 w-8" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      See Work
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Watch all action with integrated media and tech studio.
                    </p>
                  </Link>
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
        <NavigationMenuItem>
        <Link href="/services" legacyBehavior passHref>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          </Link>
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
        <NavigationMenuItem>
          <Link href="/resources" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Resources
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

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
  )
})
ListItem.displayName = "ListItem"
