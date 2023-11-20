import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandFacebook,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className=" bg-slate-950">
      <div className="md:mx-4">
        <div className="container flex flex-col py-4 px-4 md:px-0 mx-auto md:flex-row md:justify-between">
          <div className="flex justify-center gap-4 md:gap-6">
            {/* #f1f5f9 is the same as text-slate-100 */}
            {/* mr-1 because the facebook logo has weird spacing and this makes things more uniform */}
            <IconBrandInstagram
              className="mr-1 hover:cursor-pointer hover:fill-slate-600"
              color="#f1f5f9"
            />
            <IconBrandTwitter
              className="hover:cursor-pointer hover:fill-slate-600"
              color="#f1f5f9"
            />
            <IconBrandFacebook
              className="hover:cursor-pointer hover:fill-slate-600"
              color="#f1f5f9"
            />
          </div>
          <p className="mt-3 text-center md:mt-0 text-slate-100">
            &copy; <span className="font-extralight">Intrepid Audio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
