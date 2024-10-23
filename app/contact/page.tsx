import { ContactForm } from "@/components/contact/contact-form";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Have a question or interested in commissioning a piece? I'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <p>123 Art Studio Lane, Creative District</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <p>hello@chromaart.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          <div className="bg-muted rounded-lg p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}