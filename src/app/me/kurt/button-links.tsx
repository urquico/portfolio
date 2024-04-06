import CustomButton from '@/components/custom-button';
import { socials } from '@/lib/constants/links-data';

function ButtonLinks() {
  return (
    <div className='grid grid-cols-2 gap-2 justify-items-start mt-10 max-md:flex max-md:flex-col'>
      {socials.map((social) => {
        return (
          <CustomButton
            key={social.label}
            icon={social.icon}
            path={social.path}
            label={social.label}
          />
        );
      })}
    </div>
  );
}

export default ButtonLinks;
