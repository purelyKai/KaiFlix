import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">KaiFlix</h3>
            <p className="text-gray-400">
              Free movie and TV show streaming website
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/movies" className="text-gray-400 hover:text-white">
                  Movies
                </Link>
              </li>
              <li>
                <Link href="/shows" className="text-gray-400 hover:text-white">
                  TV Shows
                </Link>
              </li>
              <li>
                <Link
                  href="/genre/action"
                  className="text-gray-400 hover:text-white"
                >
                  Action
                </Link>
              </li>
              <li>
                <Link
                  href="/genre/comedy"
                  className="text-gray-400 hover:text-white"
                >
                  Comedy
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>
            &copy; KaiFlix is an open-source project. We do not host or store
            any content. All media is provided by third-party services such as
            FMHY. For DMCA takedown requests, contact FMHY, not me.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
