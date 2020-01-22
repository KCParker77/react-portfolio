const initState = {
    meta: {
        browserTitle: 'Your Name - portfolio',
        social: [
            {
                service: 'tumblr',
                link: 'https://doublejosh.com/archive',
            },
            {
                service: 'github',
                link: 'https://github.com/doublejosh',
            },
            {
                service: 'linkedin',
                link: 'https://www.linkedin.com/in/doublejosh',
            },
        ],
        footerMessage: 'Thanks for reading.',
    },
    intro: {
        headline: 'Josh is profesh.',
        typed: ['Web Developer', 'Front-end Developer', 'UX Designer', 'Data Analyst', 'Tinkerer'],
    },
    resume: {
        headline: 'Resume',
        summary: [
            'I develop, maintain, and refine web systems.',
            'This includes: front-end code, content management and API backends, UX components, user data flow, collecting metrics, enabling analytics, and managing projects. I believe in design systems, smart integrations, and open-source tools.',
        ],
        jobsHeadline: 'Work History',
        jobs: [
            {
                title: 'Full-stack Web Dev',
                company: 'DroneDeploy',
                timeframe: '2017-2019',
                summary:
                    'I built and integrated tools and APIs to create, manage, and measure marketing campaigns and pipe data to sales. This included rebuilding the front-end website to be editable, component driven, and provide elegant, measurable, browser-compatible experiences. DroneDeploy is software to enable physical businesses with 3D models, maps.',
            },
            {
                title: 'Team Lead, Web Dev',
                company: 'Tableau',
                timeframe: '2009-2017',
                summary:
                    'I architected systems, ran projects, and solved many at-scale web needs for marketing to handle rapid company growth and lead volume. I remained an individual contributor, but also hired and led a team of successful developers and expanded our work across departments. Tableau is software for people to see and understand their data.',
            },
            {
                title: 'Front-end Web Dev',
                company: 'Skull Squad',
                timeframe: '2009',
                summary: 'I helped turn client requirements into web-based tools that streamlined businesses and tested new ideas.',
            },
            {
                title: 'Web Designer',
                company: 'Strands Labs',
                timeframe: '2008',
                summary: 'I helped create a place-based social network prototype for “third-place” public spaces.',
            },
            {
                title: 'Lead Developer / UX',
                company: 'YourSports',
                timeframe: '2006-2007',
                summary: ' I built web UI, designed mocks and provided technical leadership for a funded startup.',
            },
            {
                title: 'Operations Manager',
                company: 'UW Career Center',
                timeframe: '2006',
                summary: 'I refined web experiences, managed backups, provided technical guidance, etc.',
            },
            {
                title: '“Webmaster”',
                company: 'UW Experimental College',
                timeframe: '2005',
                summary: 'I rebuilt their website, created a data backend, added course discovery and educator profile features, etc.',
            },
        ],
        toolsHeadline: 'Code & Tools',
        tools: [
            {
                name: 'Languages',
                list: 'JavaScript, SCSS, SQL, PHP (all 10+ years), C++ (hobby)',
            },
            {
                name: 'Frameworks',
                list: 'MetalsmithJS, Drupal, React',
            },
            {
                name: 'Data Storage',
                list: 'mySQL, Firebase, CMS APIs, Prismic, BigQuery, MixPanel, NewRelic',
            },
            {
                name: 'Utilities',
                list: 'Git, Grunt, Drush, AWS, CircleCI/Travis',
            },
            {
                name: 'Design Software',
                list: 'Photoshop, Illustrator, InDesign, in-browser',
            },
        ],
    },
    sections: [
        {
            id: 'portfolio',
            headline: 'Portfolio',
            subhead: 'Projects that mattered.',
            projects: [
                {
                    title: 'Component Guides',
                    summary: 'Style guides and visual components benefit everyone involved. These collaborations made us faster and polished.',
                    image: '',
                },
                {
                    title: 'SaaS Coalition',
                    summary: 'Thinking outside your department breeds inovation and results.',
                    image: '',
                },
                {
                    title: 'Personalized',
                    summary: '',
                    image: '',
                },
                {
                    title: 'Mobile UX',
                    summary: '',
                    image: '',
                },
                {
                    title: 'Analysis Optimized',
                    summary: '',
                    image: '',
                },
            ],
        },
        {
            id: 'art',
            headline: 'Sparks & Crafts',
            subhead: 'Artwork, installs and collaboration.',
            projects: [
                {
                    id: 'crystal-experiment',
                    title: 'Crystal Experiment',
                    summary: 'A mobile radio station built on a golf cart chassis that broadcast mobile FM (25mW). It allowed vehicles and people to synchronize nearby; sometimes silently using ear phones (50 provided to guests), as well as synchronizing disparate speaker systems.',
                    image: '',
                },
                {
                    id: 'final-approach-motel',
                    title: 'Final Approach Motel',
                    summary:
                        'An immersive tiny bar experience of a mid-century, un-scale, hotel lobby. This “roach motel” features morphing wallpaper, resin poured roach wing chandelier, and a stained wooden bar. The staff are dressed as cockroaches of course. This piece will be installed at the Golden Guy Alley (24 tiny bars) at BRC 2019.',
                    image: '',
                },
                {
                    id: 'popagenda',
                    title: 'POP-AGENDA',
                    summary: 'This mini food-truck serves popcorn and functions as a DJ booth. The volunteer employees wear 1950s period costumes (hats, bow ties, and aprons) while giving away snacks. This piece was, and will be, taken to CascadiaNW and SeaCompression.',
                    image: '',
                },
                {
                    id: 'light-skirmish',
                    title: 'Light Skirmish',
                    summary:
                        'Interactive two-player game comprised of a circular array of wifi-controlled multi-color LED stage lights and two large wireless nautical steering wheels. Players face one another across the circle and must spin their wheel… causing lights to illuminate in a series around the loop. The “spinning” lights decrease in speed with the game’s goal to stop on the opposing player.',
                    image: '',
                },
                {
                    id: 'stormbrella',
                    title: 'Stormbrella',
                    summary:
                        'Provides a mobile stormy light show. A clear umbrella is lined with addressable LEDs on the spines, which display a random rain simulation. Occasionally thunder will strike at random intervals and strength. Care was taken to ensure natural effects. Useful to improve friends finding you.',
                    image: '',
                },
                {
                    id: 'night-ballons',
                    title: 'Night Balloons',
                    summary:
                        'A string of balloon lanterns, each with a microchipped RGB LED bulb, making them controllable inflatable light bulbs synchronized from an Arduino processor on the ground. The light patterns and simulated motion is done via phone/ethernet cords and connection terminals.',
                    image: '',
                },
            ],
        },
    ],
}

export default (state = initState, action) => {
    return state
}