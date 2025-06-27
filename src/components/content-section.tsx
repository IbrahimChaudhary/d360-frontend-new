type ContentSectionProps = {
    heading?: string;
    children: React.ReactNode;
  };
  
  export default function ContentSection({ heading, children }: ContentSectionProps) {
    return (
      <section className="my-8">
        <h2 className="text-[25px] lg:text-[60px] text-[#263244] font-extrabold mb-4 ">{heading}</h2>
        <div className="text-[14px] lg:text-[25px] lg:leading-relaxed">
          {children}
        </div>
      </section>
    );
  }