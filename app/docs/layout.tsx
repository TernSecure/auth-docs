import { source } from "@/lib/source";
import { DocsLayout } from "@/components/layout/docs";
import { baseOptions } from "@/lib/layout.shared";
import { BookOpen, FileText, Settings, Shield } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const base = baseOptions();
  
  const tabs = [
    {
      title: "Next.js",
      description: "Next.js framework",
      url: "/docs/nextjs/getting-started",
      sdk: "nextjs",
      icon: <BookOpen className="size-4" />,
    },
    {
      title: "React",
      description: "React framework",
      url: "/docs/react/getting-started",
      sdk: "react",
      icon: <FileText className="size-4" />,
    },
  ];

  const navigation = [
    // ========== NAVIGATION 1: GETTING STARTED ==========
    {
      title: "Getting Started",
      icon: <BookOpen className="size-4" />,
      url: "/docs/${sdk}/getting-started",
      items: [
        {
          title: "Installation",
          url: "/docs/${sdk}/installation",
        },
        {
          title: "Quick Start",
          url: "/docs/${sdk}/quick-start",
        },
        {
          title: "Configuration",
          url: "/docs/${sdk}/configuration",
        },
      ],
    },

    // ========== NAVIGATION 2: GUIDES ==========
    {
      title: "Guides",
      icon: <FileText className="size-4" />,
      url: "/docs/guides/overview",
      items: [
        {
          title: "Authentication",
          url: "/docs/guides/authentication",
          items: [
            { title: "Email/Password", url: "/docs/guides/auth/email" },
            { title: "OAuth", url: "/docs/guides/auth/oauth" },
          ],
        },
        {
          title: "User Management",
          url: "/docs/guides/users",
          collapsible: true,
          items: [
            { title: "Create User", url: "/docs/guides/users/create" },
            { title: "Update User", url: "/docs/guides/users/update" },
          ],
        },
        {
          title: "Best Practices",
          url: "/docs/guides/best-practices",
        },
      ],
    },

    // ========== NAVIGATION 3: FIREBASE SETUP ==========
    {
      title: "Firebase",
      icon: <Settings className="size-4" />,
      url: "/docs/firebase/overview",
      collapsible: false,
      items: [
        {
          title: "Configuration",
          url: "/docs/firebase/configuration",
        },
        {
          title: "Authorized Domains",
          url: "/docs/firebase/authorized-domains",
        },
        {
          title: "Sign-in Methods",
          url: "/docs/firebase/sign-in-methods",
        },
        {
          title: "Google Sign-in",
          url: "/docs/firebase/google-signin",
        },
      ],
    },

    // ========== NAVIGATION 4: API REFERENCE ==========
    {
      title: "API Reference",
      icon: <Shield className="size-4" />,
      collapsible: true,
      items: [
        {
          title: "Auth Methods",
          url: "/docs/api/auth",
          collapsible: true,
          items: [
            { title: "signIn()", url: "/docs/api/auth/signin" },
            { title: "signOut()", url: "/docs/api/auth/signout" },
            { title: "signUp()", url: "/docs/api/auth/signup" },
          ],
        },
        {
          title: "User Methods",
          url: "/docs/api/users",
          collapsible: true,
          items: [
            { title: "getUser()", url: "/docs/api/users/get" },
            { title: "updateUser()", url: "/docs/api/users/update" },
          ],
        },
      ],
    },
  ];

  return (
    <DocsLayout
      tree={source.pageTree}
      {...base}
      sidebar={{
        tabs,
        navigation,
      }}
    >
      {children}
    </DocsLayout>
  );
}
