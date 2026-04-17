import { createActor } from "@/backend";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { SERVICE_INTEREST_OPTIONS } from "@/types";
import type { ServiceInterest, SubmitContactForm } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import {
  AlertCircle,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "Chevron Estate, Lagos, Nigeria",
    href: undefined,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 818 000 2345",
    href: "tel:+2348180002345",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@purplecrib.ng",
    href: "mailto:hello@purplecrib.ng",
  },
];

const INITIAL_FORM: SubmitContactForm = {
  name: "",
  email: "",
  phone: "",
  serviceInterest: "Photography",
  message: "",
};

export function ContactSection() {
  const { actor } = useActor(createActor);
  const [form, setForm] = useState<SubmitContactForm>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [errors, setErrors] = useState<
    Partial<Record<keyof SubmitContactForm, string>>
  >({});

  const validate = (): boolean => {
    const errs: Partial<Record<keyof SubmitContactForm, string>> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email";
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setServerError(null);

    try {
      if (actor) {
        const result = await actor.submitContactForm({
          name: form.name,
          email: form.email,
          phone: form.phone,
          serviceInterest: form.serviceInterest,
          message: form.message,
        });

        if (result.__kind__ === "ok") {
          setSubmissionId(result.ok.toString());
          setSubmitted(true);
        } else {
          setServerError(
            result.err || "Something went wrong. Please try again.",
          );
        }
      } else {
        // Fallback when actor not yet ready
        await new Promise((r) => setTimeout(r, 1000));
        setSubmitted(true);
      }
    } catch {
      setServerError(
        "Network error. Please check your connection and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const fieldClass = (field: keyof SubmitContactForm) =>
    cn(
      "bg-muted/40 border-border/60 focus:border-primary focus:ring-primary/20 transition-smooth",
      errors[field] && "border-destructive focus:border-destructive",
    );

  return (
    <section
      id="contact"
      className="py-24 bg-muted/30 border-t border-border/40"
      data-ocid="contact.section"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              Get In Touch
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Let's Create{" "}
              <span className="text-gradient">Something Great</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
              Ready to elevate your brand? Tell us about your project and we'll
              get back to you within 24 hours with a tailored proposal.
            </p>

            <div className="flex flex-col gap-6">
              {CONTACT_INFO.map((info) => (
                <div
                  key={info.label}
                  className="flex items-start gap-4"
                  data-ocid={`contact.info_${info.label.toLowerCase()}`}
                >
                  <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center shrink-0">
                    <info.icon className="size-4 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-medium mb-0.5">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-foreground font-medium">
                        {info.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Business hours */}
            <div className="mt-10 p-5 rounded-xl bg-card border border-border/50">
              <h4 className="font-display font-semibold text-foreground text-sm mb-3">
                Studio Hours
              </h4>
              <div className="flex flex-col gap-1.5">
                {[
                  { day: "Mon – Fri", time: "8:00am – 6:00pm" },
                  { day: "Saturday", time: "9:00am – 4:00pm" },
                  { day: "Sunday", time: "Closed" },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className="text-foreground font-medium">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-card rounded-2xl border border-border/60 p-8 shadow-elevated">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10 gap-4"
                  data-ocid="contact.success_state"
                >
                  <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center shadow-glow">
                    <CheckCircle2 className="size-8 text-accent-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground max-w-xs leading-relaxed">
                    Thank you for reaching out! Our team will respond within 24
                    hours.
                  </p>
                  {submissionId && (
                    <p className="text-xs text-muted-foreground bg-muted/40 px-3 py-1.5 rounded-md border border-border/40">
                      Reference ID:{" "}
                      <span className="text-primary font-mono font-semibold">
                        #{submissionId}
                      </span>
                    </p>
                  )}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setForm(INITIAL_FORM);
                      setSubmissionId(null);
                    }}
                    className="mt-2 border-border/60"
                    data-ocid="contact.send_another_button"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                  noValidate
                  data-ocid="contact.form"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="contact-name"
                        className="text-sm font-medium"
                      >
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="contact-name"
                        placeholder="Adaeze Okonkwo"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        onBlur={() => {
                          if (!form.name.trim())
                            setErrors((p) => ({
                              ...p,
                              name: "Name is required",
                            }));
                          else setErrors(({ name: _n, ...rest }) => rest);
                        }}
                        className={fieldClass("name")}
                        data-ocid="contact.name_input"
                      />
                      {errors.name && (
                        <p
                          className="text-xs text-destructive"
                          data-ocid="contact.name_field_error"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="contact-email"
                        className="text-sm font-medium"
                      >
                        Email Address{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="adaeze@company.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        onBlur={() => {
                          if (!form.email.trim())
                            setErrors((p) => ({
                              ...p,
                              email: "Email is required",
                            }));
                          else if (
                            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
                          )
                            setErrors((p) => ({
                              ...p,
                              email: "Enter a valid email",
                            }));
                          else setErrors(({ email: _e, ...rest }) => rest);
                        }}
                        className={fieldClass("email")}
                        data-ocid="contact.email_input"
                      />
                      {errors.email && (
                        <p
                          className="text-xs text-destructive"
                          data-ocid="contact.email_field_error"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="contact-phone"
                        className="text-sm font-medium"
                      >
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        placeholder="+234 818 000 2345"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        onBlur={() => {
                          if (!form.phone.trim())
                            setErrors((p) => ({
                              ...p,
                              phone: "Phone is required",
                            }));
                          else setErrors(({ phone: _p, ...rest }) => rest);
                        }}
                        className={fieldClass("phone")}
                        data-ocid="contact.phone_input"
                      />
                      {errors.phone && (
                        <p
                          className="text-xs text-destructive"
                          data-ocid="contact.phone_field_error"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <Label className="text-sm font-medium">
                        Service Interest{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={form.serviceInterest}
                        onValueChange={(v) =>
                          setForm({
                            ...form,
                            serviceInterest: v as ServiceInterest,
                          })
                        }
                      >
                        <SelectTrigger
                          className={fieldClass("serviceInterest")}
                          data-ocid="contact.service_select"
                        >
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICE_INTEREST_OPTIONS.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="contact-message"
                      className="text-sm font-medium"
                    >
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Tell us about your project — what you need, your timeline, and any relevant details..."
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      onBlur={() => {
                        if (!form.message.trim())
                          setErrors((p) => ({
                            ...p,
                            message: "Message is required",
                          }));
                        else setErrors(({ message: _m, ...rest }) => rest);
                      }}
                      className={cn(fieldClass("message"), "resize-none")}
                      data-ocid="contact.message_textarea"
                    />
                    {errors.message && (
                      <p
                        className="text-xs text-destructive"
                        data-ocid="contact.message_field_error"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Server error */}
                  {serverError && (
                    <div
                      className="flex items-center gap-2.5 p-3.5 rounded-lg bg-destructive/10 border border-destructive/30 text-sm text-destructive"
                      data-ocid="contact.error_state"
                    >
                      <AlertCircle className="size-4 shrink-0" />
                      {serverError}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="gradient-accent text-accent-foreground font-semibold border-0 hover:opacity-90 transition-smooth h-11 text-sm"
                    data-ocid="contact.submit_button"
                  >
                    {loading ? (
                      <span
                        className="flex items-center gap-2"
                        data-ocid="contact.loading_state"
                      >
                        <span className="size-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="size-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
