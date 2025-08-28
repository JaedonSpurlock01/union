import PageHeader from "@/modules/base/ui/components/page-header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <PageHeader />
      {children}
    </div>
  );
}

//md:w-[268px] lg:w-[286px]
