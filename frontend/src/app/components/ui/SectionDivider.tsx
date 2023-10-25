type SectionDividerProps = {
  text: string;
};

export default function SectionDivider({ text }: SectionDividerProps) {
  return (
    <div className="flex items-center mx-auto">
      <h2 className="mr-6 font-bold uppercase md:mr-8 text-slate-950  whitespace-nowrap">
        {text}
      </h2>
      <hr className="w-full h-0.5 bg-slate-950" />
    </div>
  );
}
