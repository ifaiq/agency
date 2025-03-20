"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "CTO, TechStart",
    content:
      "Luminosa transformed our messy codebase into a scalable architecture. Our app is now 3x faster and our development velocity has increased significantly.",
    image: "/AJ.png?height=100&width=100",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Founder, DataFlow",
    content:
      "We needed an MVP fast to secure our next funding round. Luminosa delivered a polished product in just 6 weeks that impressed our investors and early users.",
    image: "/sc.jpg?height=100&width=100",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Product Lead, FinEdge",
    content:
      "Their expertise in AI integration helped us automate our core processes. What used to take days now happens in minutes. Game-changing for our business.",
    image: "/mr.jpg?height=100&width=100",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const length = testimonials.length

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined

    if (autoplay) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1))
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [autoplay, length])

  const nextSlide = () => {
    setAutoplay(false)
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setAutoplay(false)
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-full px-4">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="h-20 w-20 object-cover"
                      />
                    </div>
                    <Quote className="h-8 w-8 text-primary/40 mb-4" />
                    <p className="mb-4 text-lg italic">{testimonial.content}</p>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="rounded-full"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            onClick={() => {
              setAutoplay(false)
              setCurrent(index)
            }}
            className={`h-2 min-w-8 rounded-full p-0 ${current === index ? "bg-primary" : "bg-muted"}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="rounded-full"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

