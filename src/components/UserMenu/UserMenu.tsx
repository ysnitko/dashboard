import Link from 'next/link';
import Image from 'next/image';

export default function UserMenu(props) {
  const { setOpenRowId } = props;
  return (
    <div className="absolute">
      <button
        className="absolute top-0 right-0 p-2 rounded-full border-[1px]"
        onClick={() => setOpenRowId(null)}
      >
        <Image src="/assets/Close.svg" width={20} height={20} alt="close" />
      </button>
      <div>
        <Link href={'/'}>Edit</Link>
        <Link href={'/'}>View Profile</Link>
        <button>Activate User</button>
        <button>Delete User</button>
      </div>
    </div>
  );
}
