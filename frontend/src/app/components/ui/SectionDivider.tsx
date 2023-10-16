type SectionDividerProps = {
  text: string;
};

export default function SectionDivider({ text }: SectionDividerProps) {
  return (
    <div className="flex items-center mx-auto">
      <h2 className="mr-6 text-2xl font-bold uppercase md:mr-8 text-slate-950 md:text-3xl whitespace-nowrap">
        {text}
      </h2>
      <hr className="w-full h-0.5 md:h-1 bg-slate-950" />
    </div>
  );
}
