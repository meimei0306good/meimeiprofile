import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 px-6 py-12 max-w-2xl mx-auto">
      <section id="hero">
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
          <div className="flex-1 space-y-2 text-center sm:text-left">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-5xl"
              text={`Hi！我是 ${DATA.name} 👋`}
            />
            <p className="text-muted-foreground md:text-xl">
              {DATA.description}
            </p>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="size-28 rounded-full overflow-hidden border">
              <img 
                src={DATA.avatarUrl} 
                alt={DATA.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold mb-4">About</h2>
          <div className="prose dark:prose-invert text-sm text-muted-foreground">
            <Markdown>{DATA.summary}</Markdown>
          </div>
        </BlurFade>
      </section>

      <section id="work">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold mb-4">Work Experience</h2>
          <div className="space-y-6">
            {DATA.work.map((work, id) => (
              <div key={id} className="flex gap-4 border-b pb-4 last:border-0">
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-base">{work.company}</h3>
                    <span className="text-xs text-muted-foreground">{work.start} - {work.end}</span>
                  </div>
                  <p className="text-sm italic text-primary">{work.title}</p>
                  <p className="text-xs text-muted-foreground mt-2">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </BlurFade>
      </section>

      <section id="skills">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill) => (
              <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-full text-xs font-medium">
                {skill}
              </span>
            ))}
          </div>
        </BlurFade>
      </section>

      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Projects</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {DATA.projects.map((project, id) => (
              <div key={id} className="border rounded-xl p-5 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{project.dates}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
              </div>
            ))}
          </div>
        </BlurFade>
      </section>

      <section id="contact" className="text-center py-16 border-t mt-10">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-6">想聊聊嗎？歡迎傳訊息給我！</p>
          <div className="flex justify-center gap-4">
            {/* 這裡改成自動抓取 social 裡面的第一個連結，不再寫死 X 或 Threads */}
            {Object.entries(DATA.contact.social).map(([name, social]) => (
              <a 
                key={name}
                href={social.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg text-sm font-bold"
              >
                在 {name} 上聯絡我
              </a>
            ))}
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
