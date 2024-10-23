import { AdminTabs } from "@/components/admin/admin-tabs";

export default function AdminPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Admin Dashboard
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Manage your gallery, custom orders, and website content.
            </p>
          </div>
          <AdminTabs />
        </div>
      </div>
    </main>
  );
}