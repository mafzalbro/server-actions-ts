
import { revalidatePath } from 'next/cache'
import SubmitButton from "../../../components/contact/SubmitButton";
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { ChevronRightIcon } from '@radix-ui/react-icons';

export interface ContactProps {
  searchParams: {
    success: string
  },
}


const ContactPage = ({searchParams}: ContactProps) => {

  // console.log({params, searchParams});
  
  const contactUs = async (formData: FormData) => {
    "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    //TODO: function here to send to DB
    // if success redirect
    
        
    revalidatePath('/contact')
    // redirect('/contact?success=1')
    redirect('/contact/sent')

    
    return { name, email, message };
  };
  return (
    <>
      <form
        action={contactUs}
        className="m-4 w-[90vw] md:w-[80vw] mx-auto"
      >
        <div className="relative my-4">
          <Label htmlFor="name" className="my-2">
            Name:{" "}
          </Label>
          <Input
            type="text"
            required
            id="name"
            name="name"
            placeholder="enter your name"
            />
        </div>
        <div className="relative my-4">
          <Label htmlFor="email" className="my-2">
            Email:{" "}
          </Label>
          <Input
            required
            type="email"
            name="email"
            placeholder="enter your email"
            />
        </div>
        <div className="relative my-4">
          <Label htmlFor="message" className="my-2">
            Message:{" "}
          </Label>
          <Textarea 
            name="message"
            required  
            placeholder="enter your message"
          />
        </div>
        <SubmitButton className="w-full" searchParams={searchParams} />
      </form>


      <Button asChild className='my-10'>
        <Link href='/contact/sent' scroll={false}>
        Check Example Modal - Sent
        <ChevronRightIcon className="ml-2" />
        </Link>

      </Button>
      

    </>
  );
};

export default ContactPage;
