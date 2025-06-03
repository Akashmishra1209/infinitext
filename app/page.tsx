import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BrainCircuit, Sparkles, Zap, Rocket, ArrowRight, Lightbulb, Target, Repeat } from 'lucide-react'
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <BrainCircuit className="h-6 w-6 mr-2" />
          <span className="font-bold">InfiniText</span>
        </Link>
        <Button asChild size="sm">
          <Link href="/dashboard">Get Started</Link>
        </Button>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Unleash Infinite Creativity with InfiniText
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Generate high-quality content in seconds. Powered by advanced AI, InfiniText helps you create
                  articles, stories, and more with ease.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button asChild size="lg">
                  <Link href="/dashboard">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <Sparkles className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">AI-Powered Content</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Leverage cutting-edge AI to generate high-quality content on any topic.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Zap className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Lightning Fast</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Generate content in seconds, saving you hours of work.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Rocket className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Customizable Output</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Tailor the content to your specific needs with advanced customization options.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How InfiniText Works</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <Lightbulb className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Input Your Ideas</h3>
                  <p>Provide a topic, keywords, or a brief outline of what you want to create.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <BrainCircuit className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">AI Processing</h3>
                  <p>Our advanced AI analyzes your input and generates relevant, high-quality content.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Receive Results</h3>
                  <p>Get your generated content, ready for review and use in your projects.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why Choose InfiniText</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Time-Saving</h3>
                  <p>Dramatically reduce the time spent on content creation, allowing you to focus on other important aspects of your work.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Versatile</h3>
                  <p>Generate content for various purposes, including blog posts, articles, social media, and more.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Consistent Quality</h3>
                  <p>Maintain a high standard of writing across all your content with our AI-powered generation.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Scalable</h3>
                  <p>Easily scale your content production without compromising on quality or consistency.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>What types of content can InfiniText generate?</AccordionTrigger>
                <AccordionContent>
                  InfiniText can generate a wide variety of content including blog posts, articles, social media posts, product descriptions, and more. Our AI is trained on diverse datasets to handle various writing styles and topics.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How does InfiniText ensure the quality of generated content?</AccordionTrigger>
                <AccordionContent>
                  InfiniText uses advanced AI models trained on high-quality content. We also implement content filtering and quality checks to ensure the output meets high standards. However, we always recommend human review and editing for the best results.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is the content generated by InfiniText original?</AccordionTrigger>
                <AccordionContent>
                  Yes, the content generated by InfiniText is original. Our AI creates new content based on the input and parameters you provide. However, as with any AI-generated content, we recommend reviewing and editing the output to ensure it meets your specific needs and standards.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I customize the tone and style of the generated content?</AccordionTrigger>
                <AccordionContent>
                  InfiniText offers various customization options allowing you to specify the tone, style, and other parameters to match your brand voice or specific requirements.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Transform Your Content Creation?
                </h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
                  Start using InfiniText today and experience the power of AI-driven content generation.
                </p>
              </div>
              <Button asChild size="lg" variant="secondary">
                <Link href="/dashboard">Get Started Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 InfiniText. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}