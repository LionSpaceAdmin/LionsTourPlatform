import Link from 'next/link';
import Logo from '@/components/Logo';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground">
              Discover the real Israel through the people who live it.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Navigate</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                About Us
              </Link>
              <Link href="/trust-safety" className="text-sm text-muted-foreground hover:text-primary">
                Trust & Safety
              </Link>
              <Link href="/academy" className="text-sm text-muted-foreground hover:text-primary">
                Academy
              </Link>
              <Link href="https://www.lionsofzion.org" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">
                Lions of Zion Official
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              {/* Add actual links */}
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Founders</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Lior Natanov</li>
              <li>Gal Shusha</li>
              <li>Daniel Hanukayev</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          &copy; {currentYear} Lions of Zion. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;