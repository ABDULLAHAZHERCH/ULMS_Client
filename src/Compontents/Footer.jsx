import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <>
      <footer className=" relative left-0 bottom-0 sm:h-[10vh] h-[15vh] py-5 sm:px-20  sm:pb-2 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-900">
        <section>Copyright {year} | All rights resvered</section>
        <section>A Quad Core Production</section>
      </footer>
    </>
  );
}
export default Footer;
