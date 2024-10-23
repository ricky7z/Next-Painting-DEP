import { CustomOrderForm } from "@/components/custom-order/custom-order-form";

export default function CustomOrderPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Order Your Custom Painting
            </h1>
            <p className="text-muted-foreground text-lg">
              Let me help you bring your vision to life! Fill in the details below, and I'll get back to you with options tailored to your unique needs.
            </p>
          </div>
          <CustomOrderForm />
        </div>
      </div>
    </main>
  );
}