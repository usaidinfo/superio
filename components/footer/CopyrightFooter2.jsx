import Link from "next/link";
import Social from "./common-footer/Social";
import Image from "next/image";

const CopyrightFooter2 = () => {
  return (
    <div className="footer-bottom">
      <div className="auto-container">
        <div className="outer-box">
          <div className="bottom-left">
            <div className="logo">
              <Link href="/">
                <Image
                  width={154}
                  height={50}
                  src="/images/logo.svg"
                  alt="brand"
                />
              </Link>
            </div>
            <div className="copyright-text">
              © {new Date().getFullYear()} Superio by{" "}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Usaid
              </a>
              . All Right Reserved.
            </div>
          </div>

          <div className="social-links">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightFooter2;
