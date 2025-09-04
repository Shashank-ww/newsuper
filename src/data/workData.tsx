// src/data/workData.ts
export interface WorkItem {
  id: number;
  image: string;
  description: string;
  likes: number;
  link: string;
  width: number;
  height: number;
  unoptimized?: boolean;
}

export const workItems: WorkItem[] = [
    { 
        id: 1, 
        image: '/webimgs/work/wwf1.png', 
        unoptimized: false,
        description: 'WWF social media camapign post for oceanic pollution', 
        likes: 10, 
        link: '#', 
        width: 300, 
        height: 300 // Horizontal
    },
    { 
        id: 2, 
        image: '/webimgs/work/landing2.png', 
        unoptimized: false,
        description: 'Landing page for leading contruction firm based in Czechia', 
        likes: 9, 
        link: '#', 
        width: 500, 
        height: 1100 // Horizontal
    },
    { 
        id: 3, 
        image: '/webimgs/work/stockx.jpg', 
        unoptimized: false,
        description: 'Emailer for Godrej HSX made for real estate buyers in Noida', 
        likes: 11, 
        link: '#', 
        width: 500, 
        height: 800 // Horizontal
    },
    { 
        id: 4, 
        image: '/webimgs/work/lgsocial.jpg', 
        unoptimized: false,
        description: 'LG social media campaign for washing machine with larger drum capacity', 
        likes: 7, 
        link: '#', 
        width: 300, 
        height: 300 // Horizontal
    },
    { 
        id: 5, 
        image: '/webimgs/work/gp1.png', 
        unoptimized: false,
        description: 'Social media post for climate change activism in Malaysia', 
        likes: 2, 
        link: '#', 
        width: 300, 
        height: 300 // Horizontal
    },
    { 
        id: 6, 
        image: '/webimgs/work/social.gif', 
        unoptimized: true,
        description: 'WBX programmatic ad campaign for base nich target group', 
        likes: 6, 
        link: '#', 
        width: 300, 
        height: 300 // Horizontal
    },
    { 
        id: 7, 
        image: '/webimgs/work/rishikesh.gif', 
        unoptimized: true,
        description: 'Instagram reel for a travel company based in Paharganj, New Delhi', 
        likes: 5, 
        link: '#', 
        width: 400, 
        height: 800 // Horizontal
    },
    { 
        id: 8, 
        image: '/webimgs/work/lgpost.png', 
        unoptimized: false,
        description: 'LG social media campaign for washing machine with large-capacity drum', 
        likes: 53, 
        link: '#', 
        width: 300, 
        height: 300 // Horizontal
    },
    { 
        id: 9, 
        image: '/webimgs/work/germbanner.jpg', 
        unoptimized: false,
        description: 'Godrej Protekt handwash range website banner', 
        likes: 3, 
        link: '#', 
        width: 1100, 
        height: 500 // Horizontal
    },
    { 
        id: 10, 
        image: '/webimgs/work/wwf2.png', 
        unoptimized: false,
        description: 'WWF campaign on large scale oceanic garbage collection', 
        likes: 8, 
        link: '#', 
        width: 300, 
        height: 300 // Square
    },
    { 
        id: 11, 
        image: '/webimgs/work/peace.gif', 
        unoptimized: true,
        description: 'International peace day reel for youtube channel', 
        likes: 23, 
        link: '#', 
        width: 400, 
        height: 800 // Vertical
    },
    { 
        id: 12, 
        image: '/webimgs/work/oxfamplanet.gif', 
        unoptimized: true,
        description: 'CSR activity reel for a social media channel', 
        likes: 22, 
        link: '#', 
        width: 500, 
        height: 500 // Square
    },
    { 
        id: 13, 
        image: '/webimgs/work/bsc2.jpg', 
        unoptimized: false,
        description: 'Email marketing campaign for Hospitals by Boston Scientific', 
        likes: 18, 
        link: '#', 
        width: 500, 
        height: 900 // Square
    },
    { 
        id: 14, 
        image: '/webimgs/work/bsc1.jpg', 
        unoptimized: false,
        description: 'Email marketing campaign for Brochitis treatment by Boston Scientific', 
        likes: 19, 
        link: '#', 
        width: 500, 
        height: 900 // Vertical
    },
    { 
        id: 15, 
        image: '/webimgs/work/multichannel.gif', 
        unoptimized: true,
        description: 'Inbound lead generation campaign for WBX', 
        likes: 34, 
        link: '#', 
        width: 400, 
        height: 400 // Horizontal
    },
    { 
        id: 16, 
        image: '/webimgs/work/campaign.png', 
        unoptimized: false,
        description: 'Lead generation campaign for target-based subsets', 
        likes: 25, 
        link: '#', 
        width: 400, 
        height: 400 // Vertical
    },
    { 
        id: 17, 
        image: '/webimgs/work/planet.jpg', 
        unoptimized: false,
        description: 'Still shoot for social activism in Prague', 
        likes: 12, 
        link: '#', 
        width: 500, 
        height: 500 // Horizontal
    },
    { 
        id: 18, 
        image: '/webimgs/work/wwf4.png', 
        unoptimized: false,
        description: 'Social media campaign for animal rights by WWF', 
        likes: 12, 
        link: '#', 
        width: 600, 
        height: 600 // Horizontal
    },
    { 
        id: 19, 
        image: '/webimgs/work/enking.jpg', 
        unoptimized: false,
        description: 'Social media cover for sustainable development', 
        likes: 12, 
        link: '#', 
        width: 1200, 
        height: 500 // Horizontal
    },
];