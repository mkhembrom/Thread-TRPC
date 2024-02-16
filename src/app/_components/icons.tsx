import { type LucideProps } from "lucide-react";

export const Icons = {
  logo: (props: LucideProps) => (
    <svg
      {...props}
      aria-label="Threads"
      className="text-black dark:text-white"
      role="img"
      viewBox="0 0 192 192"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="x19hqcy"
        d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"
      ></path>
    </svg>
  ),
  loading: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="6" />
      <line x1="12" x2="12" y1="18" y2="22" />
      <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
      <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
      <line x1="2" x2="6" y1="12" y2="12" />
      <line x1="18" x2="22" y1="12" y2="12" />
      <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
      <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
    </svg>
  ),
  threadIconLong: (props: LucideProps) => (
    <svg
      {...props}
      aria-hidden="true"
      fill="none"
      viewBox="0 0 21 490"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 1L18 465"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
      <path
        d="M18 479C18 465 4 465 4 472.12777C4 479.2555 18 479.9513 18 465"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      ></path>
      <path
        d="M18 479L18 489"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
    </svg>
  ),
  threadIconSmall: (props: LucideProps) => (
    <svg
      {...props}
      aria-hidden="true"
      fill="none"
      viewBox="0 0 21 92"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 1L18 67"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
      <path
        d="M18 81C18 67 4 67 4 74.12777C4 81.2555 18 81.9513 18 67"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      ></path>
      <path
        d="M18 81L18 91"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
    </svg>
  ),
  threeDot: (props: LucideProps) => (
    <svg {...props} aria-label="More" role="img" viewBox="0 0 24 24">
      <title>More</title>
      <circle cx="12" cy="12" r="1.5"></circle>
      <circle cx="6" cy="12" r="1.5"></circle>
      <circle cx="18" cy="12" r="1.5"></circle>
    </svg>
  ),

  home: (props: LucideProps) => (
    <svg
      {...props}
      aria-label="Home"
      className="text-black dark:text-white"
      role="img"
      viewBox="0 0 26 26"
    >
      <title>Home</title>
      <path
        d="M2.25 12.8855V20.7497C2.25 21.8543 3.14543 22.7497 4.25 22.7497H8.25C8.52614 22.7497 8.75 22.5259 8.75 22.2497V17.6822V17.4997C8.75 15.1525 10.6528 13.2497 13 13.2497C15.3472 13.2497 17.25 15.1525 17.25 17.4997V17.6822V22.2497C17.25 22.5259 17.4739 22.7497 17.75 22.7497H21.75C22.8546 22.7497 23.75 21.8543 23.75 20.7497V12.8855C23.75 11.3765 23.0685 9.94815 21.8954 8.99883L16.1454 4.3454C14.3112 2.86095 11.6888 2.86095 9.85455 4.3454L4.10455 8.99883C2.93153 9.94815 2.25 11.3765 2.25 12.8855Z"
        strokeLinecap="round"
        strokeWidth="2.5"
        stroke="currentColor"
      ></path>
    </svg>
  ),
  heart: (props: LucideProps) => (
    <svg
      {...props}
      aria-label="Notifications"
      className="text-black dark:text-white"
      role="img"
      viewBox="0 0 24 24"
    >
      <title>Like</title>
      <path
        d="M2.5 9.85683C2.5 14.224 6.22178 18.5299 12.0332 22.2032C12.3554 22.397 12.7401 22.5909 13 22.5909C13.2703 22.5909 13.655 22.397 13.9668 22.2032C19.7782 18.5299 23.5 14.224 23.5 9.85683C23.5 6.11212 20.8698 3.5 17.4599 3.5C15.4847 3.5 13.9356 4.39792 13 5.74479C12.0851 4.40812 10.5257 3.5 8.5401 3.5C5.14059 3.5 2.5 6.11212 2.5 9.85683Z"
        stroke="currentColor"
        strokeWidth="2.5"
      ></path>
    </svg>
  ),
  comment: (props: LucideProps) => (
    <svg
      {...props}
      aria-label="Comment"
      role="img"
      viewBox="0 0 24 24"
      className="text-black dark:text-white"
    >
      <title>Comment</title>
      <path
        d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
        strokeLinejoin="round"
        strokeWidth="2"
        stroke="currentColor"
      ></path>
    </svg>
  ),
  search: (props: LucideProps) => (
    <svg
      {...props}
      aria-label="Search"
      role="img"
      viewBox="0 0 26 26"
      className="text-black dark:text-white"
    >
      <title>Search</title>
      <path
        clipRule="evenodd"
        d="M3.5 11.5C3.5 7.08172 7.08172 3.5 11.5 3.5C15.9183 3.5 19.5 7.08172 19.5 11.5C19.5 15.9183 15.9183 19.5 11.5 19.5C7.08172 19.5 3.5 15.9183 3.5 11.5ZM11.5 1C5.70101 1 1 5.70101 1 11.5C1 17.299 5.70101 22 11.5 22C13.949 22 16.2023 21.1615 17.9883 19.756L22.3661 24.1339C22.8543 24.622 23.6457 24.622 24.1339 24.1339C24.622 23.6457 24.622 22.8543 24.1339 22.3661L19.756 17.9883C21.1615 16.2023 22 13.949 22 11.5C22 5.70101 17.299 1 11.5 1Z"
        fillRule="evenodd"
      ></path>
    </svg>
  ),
  profile: (props: LucideProps) => (
    <svg
      {...props}
      aria-label="Profile"
      className="text-black dark:text-white"
      role="img"
      viewBox="0 0 26 26"
    >
      <title>Profile</title>
      <circle
        cx="13"
        cy="7.25"
        r="4"
        strokeWidth="2.5"
        stroke="currentColor"
      ></circle>
      <path
        d="M6.26678 23.75H19.744C21.603 23.75 22.5 23.2186 22.5 22.0673C22.5 19.3712 18.8038 15.75 13 15.75C7.19625 15.75 3.5 19.3712 3.5 22.0673C3.5 23.2186 4.39704 23.75 6.26678 23.75Z"
        strokeWidth="2.5"
        stroke="currentColor"
      ></path>
    </svg>
  ),
  post: (props: LucideProps) => (
    <svg
      {...props}
      aria-label=""
      role="img"
      viewBox="0 0 20 20"
      className="text-black dark:text-white"
    >
      <title></title>
      <path d="M8.62523 12.5C8.5337 12.5 8.44836 12.4796 8.3692 12.4389C8.29004 12.4008 8.20594 12.3384 8.11688 12.2519L5.18924 9.4084C5.1175 9.33969 5.06803 9.26972 5.04082 9.19847C5.01361 9.12723 5 9.06107 5 9C5 8.93639 5.01361 8.86896 5.04082 8.79771C5.06803 8.72646 5.1175 8.65649 5.18924 8.58779L8.11688 5.77099C8.21583 5.6743 8.30117 5.6056 8.37291 5.56489C8.44465 5.52163 8.52628 5.5 8.61781 5.5C8.74892 5.5 8.85529 5.5458 8.93692 5.6374C9.01855 5.72901 9.05937 5.83842 9.05937 5.96565V7.4084H9.16698C9.83488 7.4084 10.41 7.51399 10.8924 7.72519C11.3772 7.93639 11.7743 8.24173 12.0835 8.64122C12.3952 9.04071 12.6252 9.5229 12.7737 10.0878C12.9246 10.6501 13 11.2837 13 11.9885C13 12.1539 12.9604 12.2799 12.8813 12.3664C12.8046 12.4555 12.7168 12.5 12.6178 12.5C12.5387 12.5 12.4583 12.4835 12.3766 12.4504C12.2975 12.4173 12.2257 12.3397 12.1614 12.2176C11.9462 11.8003 11.6976 11.4746 11.4156 11.2405C11.1336 11.0038 10.8083 10.8372 10.4397 10.7405C10.0711 10.6438 9.64688 10.5954 9.16698 10.5954H9.05937V12.0534C9.05937 12.1832 9.01855 12.2901 8.93692 12.374C8.85529 12.458 8.75139 12.5 8.62523 12.5Z"></path>
    </svg>
  ),
  postCreate: (props: LucideProps) => (
    <svg
      {...props}
      aria-label="Create"
      role="img"
      viewBox="0 0 26 26"
      fill="transparent"
      className="text-black dark:text-white"
    >
      <title>Create</title>
      <path
        d="M22.75 13L22.75 13.15C22.75 16.5103 22.75 18.1905 22.096 19.4739C21.5208 20.6029 20.6029 21.5208 19.4739 22.096C18.1905 22.75 16.5103 22.75 13.15 22.75L12.85 22.75C9.48969 22.75 7.80953 22.75 6.52606 22.096C5.39708 21.5208 4.4792 20.6029 3.90396 19.4739C3.25 18.1905 3.25 16.5103 3.25 13.15L3.25 12.85C3.25 9.48968 3.25 7.80953 3.90396 6.52606C4.4792 5.39708 5.39708 4.4792 6.52606 3.90396C7.80953 3.25 9.48968 3.25 12.85 3.25L13 3.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.5"
      ></path>
      <path
        d="M21.75 4.25L13.75 12.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.5"
      ></path>
    </svg>
  ),
  more: (props: LucideProps) => (
    <svg
      {...props}
      aria-label="More"
      role="img"
      viewBox="0 0 24 24"
      className="text-black dark:text-white"
    >
      <title>More</title>
      <rect height="2.5" rx="1.25" width="21" x="3" y="7"></rect>
      <rect height="2.5" rx="1.25" width="14" x="10" y="15"></rect>
    </svg>
  ),
  sun: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-black dark:text-white"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  ),
  moon: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-black dark:text-white"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  ),
  back: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  ),
  retweet: (props: LucideProps) => (
    <svg
      {...props}
      aria-label="Repost"
      height="20"
      role="img"
      viewBox="0 0 24 24"
      width="20"
    >
      <title>Repost</title>
      <path d="M19.998 9.497a1 1 0 0 0-1 1v4.228a3.274 3.274 0 0 1-3.27 3.27h-5.313l1.791-1.787a1 1 0 0 0-1.412-1.416L7.29 18.287a1.004 1.004 0 0 0-.294.707v.001c0 .023.012.042.013.065a.923.923 0 0 0 .281.643l3.502 3.504a1 1 0 0 0 1.414-1.414l-1.797-1.798h5.318a5.276 5.276 0 0 0 5.27-5.27v-4.228a1 1 0 0 0-1-1Zm-6.41-3.496-1.795 1.795a1 1 0 1 0 1.414 1.414l3.5-3.5a1.003 1.003 0 0 0 0-1.417l-3.5-3.5a1 1 0 0 0-1.414 1.414l1.794 1.794H8.27A5.277 5.277 0 0 0 3 9.271V13.5a1 1 0 0 0 2 0V9.271a3.275 3.275 0 0 1 3.271-3.27Z"></path>
    </svg>
  ),
  send: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  ),
  hashTag: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </svg>
  ),
  arrowBack: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  ),
  addImage: (props: LucideProps) => (
    <svg {...props} aria-label="Attach media" role="img" viewBox="0 0 24 24">
      <title>Attach media</title>
      <g>
        <path
          clipRule="evenodd"
          d="M2.00207 9.4959C1.65132 7.00019 1.47595 5.75234 1.82768 4.73084C2.13707 3.83231 2.72297 3.05479 3.50142 2.50971C4.38639 1.89005 5.63425 1.71467 8.12996 1.36392L10.7047 1.00207C13.2004 0.651325 14.4482 0.47595 15.4697 0.827679C16.3682 1.13707 17.1458 1.72297 17.6908 2.50142C17.9171 2.82454 18.0841 3.19605 18.2221 3.65901C17.7476 3.64611 17.2197 3.64192 16.6269 3.64055C16.5775 3.5411 16.5231 3.44881 16.4621 3.36178C16.0987 2.84282 15.5804 2.45222 14.9814 2.24596C14.3004 2.01147 13.4685 2.12839 11.8047 2.36222L7.44748 2.97458C5.78367 3.20841 4.95177 3.32533 4.36178 3.73844C3.84282 4.10182 3.45222 4.62017 3.24596 5.21919C3.01147 5.90019 3.12839 6.73209 3.36222 8.3959L3.97458 12.7531C4.15588 14.0431 4.26689 14.833 4.50015 15.3978C4.50083 16.3151 4.50509 17.0849 4.53201 17.7448C4.13891 17.4561 3.79293 17.1036 3.50971 16.6991C2.89005 15.8142 2.71467 14.5663 2.36392 12.0706L2.00207 9.4959Z"
          fill="currentColor"
          fillRule="evenodd"
        ></path>
        <g>
          <g clipPath="url(#clip0_16905_4767)">
            <rect
              fill="none"
              height="15.5"
              rx="3.75"
              stroke="currentColor"
              strokeWidth="1.5"
              width="15.5"
              x="6.75"
              y="5.8894"
            ></rect>
            <path
              d="M6.6546 17.8894L8.59043 15.9536C9.1583 15.3857 10.0727 15.3658 10.6647 15.9085L12.5062 17.5966C12.9009 17.9584 13.5105 17.9451 13.8891 17.5665L17.8181 13.6376C18.4038 13.0518 19.3536 13.0518 19.9394 13.6375L22.0663 15.7644"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
            <circle
              cx="10.75"
              cy="9.8894"
              fill="currentColor"
              r="1.25"
            ></circle>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_16905_4767">
          <rect
            fill="white"
            height="17"
            rx="4.5"
            width="17"
            x="6"
            y="5.1394"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  ),
};
