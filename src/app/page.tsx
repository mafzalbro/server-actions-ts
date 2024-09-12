import BlogSection from "@/components/home/blogs";
import CardSection from "@/components/home/cards";
import Testimonials from "@/components/home/testimonials";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { revalidatePath } from "next/cache";
import Head from 'next/head';
import { redirect } from "next/navigation";

export default function Home() {
  const subscribe = async (formData: FormData) => {
    'use server'
    const email = formData.get('email')


    //TODO: send this data to 
    
    revalidatePath('/')
    redirect('/subscribed')

    return { email }
  }
  return (
    <>
      <Head>
        <title>My Home Page</title>
        <meta name="description" content="Landing Page using ShadCN and Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="py-2 px-4 md:px-8">
        <section className="text-center">
          <h1 className="text-4xl font-bold">Welcome to Home Page</h1>
          <p className="mt-4 text-lg">Build amazing applications faster with our components</p>
          <div className="mt-6 flex justify-center space-x-4">
            <Button>Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Subscribe to Our Newsletter</h2>
          <form className="mt-4 flex space-x-2" action={subscribe}>
            <Input type="email" placeholder="Your email" className="w-full" />
            <Button>Subscribe</Button>
          </form>
        </section>

        {/* Cards */}

        <CardSection />

        {/* Blogs*/}

        <BlogSection />

        {/* Testimonials */}

        <Testimonials />
      </main>
    </>
  );
}
