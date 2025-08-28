import PageHeader from "@/modules/base/ui/components/page-header";
import PageSidebar from "@/modules/base/ui/components/page-sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-muted max-h-svh [--header-height:calc(--spacing(14))]">
      <PageHeader />
      <PageSidebar />
      <div className="flex flex-1 pl-[3.5rem] mt-[3.5rem]">{children}</div>
    </div>
  );
}
