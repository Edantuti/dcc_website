
import { FaLinkedin,FaGithub, FaXTwitter } from 'react-icons/fa6';
import { HackerTextTag } from '@/components/HackerTags';
import { IconType } from 'react-icons';
import Image from "next/image"

const TeamCard = ({
  name,
  designation,
  profile_url,
  twitter,
  linkedin,
  github,
}:{name:string, designation:string, profile_url:string, twitter?:string, linkedin?:string, github?:string}) => {
  return (
    <div className='group w-fit'>
      <div className='relative grid h-64 w-64 grid-cols-2 grid-rows-2 overflow-hidden rounded fill-white'>
        <Image
          src={profile_url}
          alt='profile'
          className='duration-350 object-cover absolute z-10 h-full w-full bg-white transition-all group-hover:-translate-x-16 group-hover:translate-y-16 group-hover:scale-50'
        />
        <SocialIcon Icon={FaXTwitter} link={twitter} />
        <SocialIcon Icon={FaLinkedin} link={linkedin} />
        <div className='h-32 w-32 '></div>
        <SocialIcon Icon={FaGithub} link={github} />
      </div>
      <div className='py-4 transition-all'>
        <h4 className='text-xl font-medium text-white'>
          <HackerTextTag>{name}</HackerTextTag>
        </h4>
        <span className='text-sm text-white'>
          <HackerTextTag>{designation}</HackerTextTag>
        </span>
      </div>
    </div>
  );
};
TeamCard.displayName = "TeamCard"
export {TeamCard}
const SocialIcon = ({ Icon, link }:{Icon:IconType, link?:string}) => {
  return (
    <div className='relative h-32 w-32'>
      <a href={link} target='_blank' rel="noopener">
        <Icon className={`absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded p-5 transition-all hover:bg-slate-800 ${link?"fill-white":"fill-gray-400"}`} />
      </a>
    </div>
  );
};
