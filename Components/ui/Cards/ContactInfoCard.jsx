import Link from "next/link";

export default function ContactInfoCard({
  ContactMode,
  ContactInfo,
  ContactIcon,
  ContactLink,
  NewTab = false
}) {
  return (
    <Link target={NewTab ? "_blank" : ""} href={ContactLink} className="w-full flex justify-center my-3 cursor-pointer">
      <div className="w-10/12 flex items-center gap-4 p-4 rounded-2xl bg-linear-to-r from-pink-500/10 to-purple-600/10 border border-pink-500/30 hover:border-pink-400/60 transition-all duration-300 group backdrop-blur-sm">
        <div className="w-12 h-12 rounded-full bg-linear-to-br from-slate-400 to-slate-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <span className="text-white text-xl">{ContactIcon}</span>
        </div>
        <div>
          <p className="text-xs font-semibold text-pink-300 uppercase tracking-wider">
            {ContactMode}
          </p>
          <p className="text-white font-medium group-hover:text-pink-100 transition-colors break-all">
            {ContactInfo}
          </p>
        </div>
      </div>
    </Link>
  );
}
