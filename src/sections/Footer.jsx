import FlipLink from "@/app/components/FlipLink";
function Footer() {
  return (
    <section>
      <div className="flex justify-between items-center px-6 md:px-12 py-2 bg-white border-t border-t-black h-[60px] text-md w-full">
        <div className="flex gap-6">
          <FlipLink href="https://twitter.com/deecaulcrick">Twitter</FlipLink>
          <FlipLink href="https://github.com/deecaulcrick">Github</FlipLink>
          <FlipLink href="https://linkedin.com/in/deborah-caulcrick">
            LinkedIn
          </FlipLink>
        </div>
        <div>Made In Lagos</div>
      </div>
    </section>
  );
}

export default Footer;
