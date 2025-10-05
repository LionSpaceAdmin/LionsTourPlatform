import { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props} className="h-8 w-8 text-primary">
        {/* Placeholder for Lions of Zion SVG logo */}
        <path d="M12 2L9.4 4.9C9.1 5.2 8.7 5.3 8.3 5.3H4.5C3.7 5.3 3 6 3 6.8V10.7C3 11.1 2.8 11.5 2.5 11.8L2.2 12.1C2.1 12.2 2.1 12.3 2.2 12.4L2.5 12.7C2.8 13 3 13.4 3 13.8V17.7C3 18.5 3.7 19.2 4.5 19.2H8.3C8.7 19.2 9.1 19.3 9.4 19.6L12 22.5L14.6 19.6C14.9 19.3 15.3 19.2 15.7 19.2H19.5C20.3 19.2 21 18.5 21 17.7V13.8C21 13.4 21.2 13 21.5 12.7L21.8 12.4C21.9 12.3 21.9 12.2 21.8 12.1L21.5 11.8C21.2 11.5 21 11.1 21 10.7V6.8C21 6 20.3 5.3 19.5 5.3H15.7C15.3 5.3 14.9 5.2 14.6 4.9L12 2ZM12 14.5C10.6 14.5 9.5 13.4 9.5 12C9.5 10.6 10.6 9.5 12 9.5C13.4 9.5 14.5 10.6 14.5 12C14.5 13.4 13.4 14.5 12 14.5Z" />
    </svg>
);

export default Logo;