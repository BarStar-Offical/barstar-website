import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import FormField from "@/components/FormField";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful }
  } = useForm<ContactFormValues>();

  const onSubmit = (values: ContactFormValues) =>
    new Promise((resolve) => {
      console.log("Contact form submission", values);
      setTimeout(resolve, 600);
    });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-3xl border border-white/5 bg-slate-900/40 p-8"
    >
      <FormField label="Name" name="name" required>
        <Input id="name" placeholder="Jordan Lee" required {...register("name")} />
      </FormField>
      <FormField label="Email" name="email" required>
        <Input id="email" type="email" placeholder="you@company.com" required {...register("email")} />
      </FormField>
      <FormField label="Subject" name="subject" required>
        <Input id="subject" placeholder="Venue partnership" required {...register("subject")} />
      </FormField>
      <FormField label="Message" name="message" required>
        <Textarea
          id="message"
          placeholder="Tell us how we can help…"
          required
          {...register("message")}
        />
      </FormField>
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitSuccessful ? "Message sent" : isSubmitting ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
};

export default ContactForm;
