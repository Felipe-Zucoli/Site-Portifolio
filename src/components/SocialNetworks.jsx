import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    {
        name: "linkedin",
        icon: <FaLinkedinIn />,
        profiles: [
            'https://www.linkedin.com/in/felipe-zucoli-51b571202/' 
        ]
    },
    {
        name: "github",
        icon: <FaGithub />,
        profiles: [
            'https://github.com/Felipe-Zucoli'
        ]
    },
    {
        name: "Instagram",
        icon: <FaInstagram />,
        profiles: [
            'https://www.instagram.com/felipezucoli/'
        ]
    },
]

const SocialNetworks = () => {
    return (
        <section id='social-networks'>
            {socialNetworks.map((network) => (
                <div key={network.name}>
                    {network.profiles.map((profileUrl) => (
                        <a
                            href={profileUrl}
                            className='social-btn'
                            id={`${network.name}-${profileUrl.split('/').pop()}`}
                            key={profileUrl}
                        >
                            {network.icon}
                        </a>
                    ))}
                </div>
            ))}
        </section>
    )
}
export default SocialNetworks