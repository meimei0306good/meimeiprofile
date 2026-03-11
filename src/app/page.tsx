import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi！我是 ${DATA.name} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage 
                  alt={DATA.name} 
                  src={DATA.avatarUrl} 
                  className="object-cover" 
                />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade key={work.company + id} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <div className="flex items-center gap-4 py-2 border-b last:border-0">
                <img src={work.logoUrl} alt={work.company} className="size-12 rounded-full border bg-white object-contain" />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold leading-none">{work.company}</h3>
                    <span className="text-xs text-muted-foreground">{work.start} - {work.end ?? "Present"}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{work.title}</p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((edu, id) => (
            <BlurFade key={edu.school + id} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <div className="flex items-center gap-4 py-2">
                <img src={edu.logoUrl} alt={edu.school} className="size-12 rounded-full border bg-white object-contain" />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{edu.school}</h3>
                    <span className="text-xs text-muted-foreground">{edu.start} - {edu.end}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{edu.degree}</p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge>{skill.name}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">My Projects</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Check out my latest work</h2>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden flex flex-col h-full">
                  {project.image && <img src={project.image} alt={project.title} className="h-40 w-full object-cover" />}
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <time className="text-xs text-muted-foreground mb-2 block">{project.dates}</time>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{project.description}</p>
                    <div className="mt-auto flex flex-wrap gap-1">
                      {project.technologies.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-[10px] px-1 py-0">{tag}</Badge>
                      ))}
                    </div>
                    {project.href && (
                      <a href={project.href} target="_blank" className="mt-4 text-xs font-medium text-blue-500 hover:underline">
                        View Project →
                      </a>
                    )}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">Contact</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                想聊聊嗎？歡迎到我的 Threads 傳訊息給我！
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
