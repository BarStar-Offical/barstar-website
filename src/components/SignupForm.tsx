import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "@/components/Button";
import FormField from "@/components/FormField";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Textarea from "@/components/Textarea";

const schema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  accountType: z.enum(["venue", "vendor"]),
  goal: z.string().min(10, "Tell us more about your goals"),
  timeframe: z.string().optional()
});

type SignupFormValues = z.infer<typeof schema>;

const SignupForm = ({ defaultAccountType = "venue" }: { defaultAccountType?: "venue" | "vendor" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm<SignupFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { accountType: defaultAccountType }
  });

  const onSubmit = (values: SignupFormValues) =>
    new Promise((resolve) => {
      // Placeholder submission to illustrate flow
      console.log("Submitting signup lead", values);
      setTimeout(resolve, 600);
    });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-3xl border border-white/5 bg-slate-900/40 p-8"
    >
      <div>
        <h3 className="text-xl font-semibold text-white">Create a BarStar business account</h3>
        <p className="mt-2 text-sm text-slate-300">
          Complete the form and a BarStar specialist will tailor the onboarding for your venue or
          vendor brand.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <FormField label="Company name" name="companyName" required>
          <Input
            id="companyName"
            placeholder="Club Orion"
            {...register("companyName")}
            aria-invalid={Boolean(errors.companyName)}
          />
          {errors.companyName ? (
            <span className="text-xs text-amber-300">{errors.companyName.message}</span>
          ) : null}
        </FormField>
        <FormField label="Contact name" name="contactName" required>
          <Input
            id="contactName"
            placeholder="Jordan Lee"
            {...register("contactName")}
            aria-invalid={Boolean(errors.contactName)}
          />
          {errors.contactName ? (
            <span className="text-xs text-amber-300">{errors.contactName.message}</span>
          ) : null}
        </FormField>
        <FormField label="Email address" name="email" required>
          <Input
            id="email"
            type="email"
            placeholder="you@barstar.ca"
            {...register("email")}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? (
            <span className="text-xs text-amber-300">{errors.email.message}</span>
          ) : null}
        </FormField>
        <FormField label="Phone number" name="phone">
          <Input id="phone" type="tel" placeholder="+1 (416) 555-0199" {...register("phone")} />
        </FormField>
        <FormField label="Account type" name="accountType" required>
          <Select id="accountType" {...register("accountType")}>
            <option value="venue">Venue</option>
            <option value="vendor">Vendor</option>
          </Select>
          {errors.accountType ? (
            <span className="text-xs text-amber-300">{errors.accountType.message}</span>
          ) : null}
        </FormField>
        <FormField label="Launch timeframe" name="timeframe">
          <Select id="timeframe" {...register("timeframe")}>
            <option value="">Select timeframe</option>
            <option value="immediate">Ready to launch now</option>
            <option value="30">Within 30 days</option>
            <option value="60">Within 60 days</option>
            <option value="90">90+ days out</option>
          </Select>
        </FormField>
      </div>
      <FormField label="Goals &amp; activation notes" name="goal" required>
        <Textarea
          id="goal"
          placeholder="Tell us about your venue, target audience, and campaign goals."
          {...register("goal")}
          aria-invalid={Boolean(errors.goal)}
        />
        {errors.goal ? (
          <span className="text-xs text-amber-300">{errors.goal.message}</span>
        ) : null}
      </FormField>
      <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-xs text-slate-300">
        <p>
          We&apos;ll reach out within one business day. Ready to connect now? Email{" "}
          <a className="font-semibold text-brand-200" href="mailto:partners@barstar.ca">
            partners@barstar.ca
          </a>
          .
        </p>
      </div>
      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
        {isSubmitSuccessful ? "Submission received" : isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};

export default SignupForm;
