import Link from 'next/link';
import Logo from '@/components/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 md:mb-0">
            <Link href="/experiences" className="text-sm text-muted-foreground hover:text-primary">
              Experiences
            </Link>
            <Link href="/planner" className="text-sm text-muted-foreground hover:text-primary">
              AI Planner
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
              About Us
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} LionsTour. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
