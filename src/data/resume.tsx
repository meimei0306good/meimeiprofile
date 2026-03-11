import { Icons } from "@/components/icons";
import { HomeIcon, LayoutDashboardIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "李美燕",
  initials: "美美",
  url: "https://meimeiprofile.vercel.app/",
  location: "Taipei, Taiwan",
  locationLink: "",
  description: "期望能結合商業知識與廣告背景，帶給社會更多正向影響力",
  summary: "這裡放你針對這份工作的 Summary",
  avatarUrl: "/my-avatar.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      Threads: {
        name: "Threads",
        url: "#", // 請在此處換成你的 Threads 連結
        icon: Icons.instagram,
        navbar: true,
      },
      LookerStudio: {
        name: "Looker Studio",
        url: "#", // 請在此處換成你的 Looker Studio 報表連結
        icon: LayoutDashboardIcon,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "在此填寫公司名稱",
      href: "#",
      badges: [],
      location: "Taipei",
      title: "職稱",
      logoUrl: "",
      start: "開始年份",
      end: "結束年份",
      description: "描述你的工作成就。",
    },
  ],
  education: [
    {
      school: "在此填寫學校名稱",
      href: "#",
      degree: "學位",
      logoUrl: "",
      start: "開始年份",
      end: "結束年份",
    },
  ],
  projects: [
    {
      title: "專案名稱",
      href: "#",
      dates: "日期",
      active: true,
      description: "專案描述。",
      technologies: ["React", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [], // 這裡留空，Hackathons 段落就會消失
} as const;
