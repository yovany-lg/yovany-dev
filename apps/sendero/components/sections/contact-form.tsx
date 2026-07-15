"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations, useLocale } from "next-intl";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { submitContact } from "@/app/[locale]/contact/actions";
import { SERVICES } from "@/lib/services";
import { track, identifyLead } from "@/lib/analytics";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const st = useTranslations("services");
  const locale = useLocale();
  const [pending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", company: "", service: "", message: "" },
  });

  const onSubmit = (values: ContactInput) => {
    startTransition(async () => {
      const res = await submitContact(values);
      if (res.ok) {
        toast.success(t("success"));
        identifyLead(values.email, { service: values.service || undefined });
        track("contact_submitted", { service: values.service || undefined, locale });
        reset();
      } else if (res.error === "invalid") {
        toast.error(t("invalid"));
      } else {
        toast.error(t("error"));
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-6"
    >
      <p className="kicker">{t("title")}</p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label={t("name")}
          error={errors.name && t("name")}
          htmlFor="name"
        >
          <Input
            id="name"
            placeholder={t("namePlaceholder")}
            aria-invalid={!!errors.name}
            {...register("name")}
          />
        </Field>
        <Field
          label={t("email")}
          error={errors.email && t("email")}
          htmlFor="email"
        >
          <Input
            id="email"
            type="email"
            placeholder={t("emailPlaceholder")}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t("company")} htmlFor="company">
          <Input
            id="company"
            placeholder={t("companyPlaceholder")}
            {...register("company")}
          />
        </Field>
        <Field label={t("service")} htmlFor="service">
          <select
            id="service"
            defaultValue=""
            {...register("service")}
            className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <option value="" disabled>
              {t("servicePlaceholder")}
            </option>
            {SERVICES.map((s) => (
              <option key={s.key} value={s.key} className="bg-background">
                {st(`${s.key}.title`)}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        label={t("message")}
        error={errors.message && t("message")}
        htmlFor="message"
      >
        <Textarea
          id="message"
          rows={5}
          placeholder={t("messagePlaceholder")}
          aria-invalid={!!errors.message}
          {...register("message")}
        />
      </Field>

      <Button
        type="submit"
        disabled={pending}
        className="h-11 w-full text-base sm:w-auto sm:self-start sm:px-6"
      >
        {pending ? t("submitting") : t("submit")}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string | false;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor} className={cn(error && "text-destructive")}>
        {label}
      </Label>
      {children}
    </div>
  );
}
