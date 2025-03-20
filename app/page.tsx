import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Brain, Users } from "lucide-react"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ContactForm from "@/components/contact-form"
import ServiceCard from "@/components/service-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">LUMINOSA</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#why-us" className="text-sm font-medium hover:text-primary transition-colors">
              Why Us
            </Link>
            <Link href="#case-studies" className="text-sm font-medium hover:text-primary transition-colors">
              Case Studies
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button>
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    From Idea to MVP.
                    <span className="text-primary"> Fast.</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We build scalable, investor-ready products and revamp codebases to help you scale with confidence.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Launch Your MVP Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Get a Free Code Audit
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px] aspect-square rounded-lg overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 mix-blend-overlay" />
                  <img
                    src="/placeholder.svg?height=600&width=600"
                    alt="Abstract code visualization"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tailored solutions to bring your vision to life and optimize your existing systems.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
              <ServiceCard
                icon={<Zap className="h-10 w-10" />}
                title="MVP Development"
                description="Fast, scalable, investor-ready products built with modern technologies."
              />
              <ServiceCard
                icon={<Code className="h-10 w-10" />}
                title="Codebase Revamp"
                description="Fix tech debt, improve performance, and optimize architecture."
              />
              <ServiceCard
                icon={<Brain className="h-10 w-10" />}
                title="AI & Automation"
                description="Seamless AI integrations to enhance your products and workflows."
              />
              <ServiceCard
                icon={<Users className="h-10 w-10" />}
                title="Tech Consulting"
                description="Helping startups make the right technology decisions."
              />
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                <div className="relative w-full max-w-[500px] aspect-square rounded-lg overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/30 mix-blend-overlay" />
                  <img
                    src="/placeholder.svg?height=600&width=600"
                    alt="Team collaboration"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us?</h2>
                <p className="text-muted-foreground">
                  We combine technical expertise with business acumen to deliver solutions that drive growth.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Technical Expertise</h3>
                      <p className="text-sm text-muted-foreground">
                        Deep knowledge of TypeScript, JavaScript, Node.js, Python, Nest.js, Next.js, FastAPI, and
                        scalable architecture.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Rapid Development</h3>
                      <p className="text-sm text-muted-foreground">
                        Fast turnaround for MVPs without compromising on quality or scalability.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Codebase Rescue</h3>
                      <p className="text-sm text-muted-foreground">
                        Deep experience fixing messy, AI-generated, or legacy codebases.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Client-Focused Approach</h3>
                      <p className="text-sm text-muted-foreground">
                        We prioritize clear communication and align our solutions with your business goals.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="py-16 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Case Studies</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how we've helped our clients achieve their goals.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl mt-12">
              <TestimonialCarousel />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Work Together</h2>
                <p className="text-muted-foreground md:text-xl">
                  Ready to bring your idea to life or revamp your existing codebase? Get in touch with us today.
                </p>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Free initial consultation</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Detailed project assessment</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Transparent pricing</span>
                  </p>
                </div>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">LUMINOSA</span>
            </Link>
            <p className="text-sm text-muted-foreground">From idea to MVP. Fast.</p>
          </div>
          <nav className="flex flex-wrap gap-4 sm:gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#why-us" className="text-sm font-medium hover:text-primary transition-colors">
              Why Us
            </Link>
            <Link href="#case-studies" className="text-sm font-medium hover:text-primary transition-colors">
              Case Studies
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Luminosa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

